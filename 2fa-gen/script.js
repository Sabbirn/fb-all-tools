document.addEventListener('DOMContentLoaded', function() {
    const secretInput = document.getElementById('secretInput');
    const getCodeBtn = document.getElementById('getCodeBtn');
    const codeOutput = document.getElementById('codeOutput');
    const secretOutput = document.getElementById('secretOutput');
    
    // Load jsSHA library for HMAC-SHA1
    function loadJsSHA() {
        return new Promise((resolve, reject) => {
            if (window.jsSHA) {
                resolve(window.jsSHA);
                return;
            }
            
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jsSHA/2.4.2/sha.js';
            script.onload = () => resolve(window.jsSHA);
            script.onerror = reject;
            document.body.appendChild(script);
        });
    }
    
    // Base32 decode function - used for OTP secrets
    function base32ToHex(base32) {
        const base32chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
        let bits = '';
        let hex = '';
        
        // Remove spaces and make uppercase
        base32 = base32.replace(/\s/g, '').toUpperCase();
        
        // Convert each character to bits
        for (let i = 0; i < base32.length; i++) {
            const val = base32chars.indexOf(base32.charAt(i));
            if (val === -1) continue; // Skip invalid characters
            bits += val.toString(2).padStart(5, '0');
        }
        
        // Convert bit groups to hex
        for (let i = 0; i + 4 <= bits.length; i += 4) {
            const chunk = bits.substr(i, 4);
            hex += parseInt(chunk, 2).toString(16);
        }
        
        return hex;
    }
    
    // TOTP code generation
    async function generateTOTP(secret) {
        if (!secret || secret.trim() === '') {
            return '-';
        }
        
        try {
            // Clean and convert the secret
            const cleanSecret = secret.replace(/\s+/g, '');
            secretOutput.textContent = cleanSecret;
            
            // Get current time factor (30-second window)
            const timeStep = 30;
            const timeCounter = Math.floor(Date.now() / 1000 / timeStep);
            
            // Convert time counter to bytes
            const timeBytes = new Uint8Array(8);
            let temp = timeCounter;
            for (let i = 7; i >= 0; i--) {
                timeBytes[i] = temp & 0xff;
                temp = temp >> 8;
            }
            
            // Convert time bytes to hex string
            let timeHex = '';
            for (let i = 0; i < timeBytes.length; i++) {
                timeHex += timeBytes[i].toString(16).padStart(2, '0');
            }
            
            // Load jsSHA library
            await loadJsSHA();
            
            // Convert base32 secret to hex
            const secretHex = base32ToHex(cleanSecret);
            
            // Create HMAC-SHA1 hash
            const shaObj = new jsSHA("SHA-1", "HEX");
            shaObj.setHMACKey(secretHex, "HEX");
            shaObj.update(timeHex);
            const hmac = shaObj.getHMAC("HEX");
            
            // Get byte offset for dynamic truncation
            const offset = parseInt(hmac.substring(hmac.length - 2), 16) & 0xf;
            
            // Get 4 bytes from the hash
            const binary = parseInt(hmac.substring(offset * 2, offset * 2 + 8), 16) & 0x7fffffff;
            
            // Get 6-digit TOTP code
            const code = (binary % 1000000).toString().padStart(6, '0');
            return code;
        } catch (error) {
            console.error('Error generating TOTP:', error);
            // Fallback to simple hash if TOTP generation fails
            return generateSimpleCode(secret);
        }
    }
    
    // Fallback simple code generation
    function generateSimpleCode(secret) {
        if (!secret || secret.trim() === '') {
            return '-';
        }
        
        // Remove any spaces from the secret
        const cleanSecret = secret.replace(/\s+/g, '');
        secretOutput.textContent = cleanSecret;
        
        // Use the secret to seed a simple hash
        let hash = 0;
        for (let i = 0; i < cleanSecret.length; i++) {
            hash = ((hash << 5) - hash) + cleanSecret.charCodeAt(i);
            hash |= 0; // Convert to 32-bit integer
        }
        
        // Add current time factor (changes every 30 seconds)
        const timeFactor = Math.floor(Date.now() / 30000);
        hash = (hash + timeFactor) % 1000000;
        
        // Ensure it's 6 digits by padding with leading zeros if necessary
        return String(hash).padStart(6, '0');
    }
    
    // Event listener for the button
    getCodeBtn.addEventListener('click', async function() {
        const secret = secretInput.value;
        if (!secret || secret.trim() === '') {
            secretOutput.textContent = '-';
            codeOutput.textContent = '-';
            return;
        }
        
        try {
            // Try to generate real TOTP first
            const code = await generateTOTP(secret);
            codeOutput.textContent = code;
        } catch (error) {
            console.error('Error:', error);
            // Fallback to simple code
            const simpleCode = generateSimpleCode(secret);
            codeOutput.textContent = simpleCode;
        }
    });
}); 
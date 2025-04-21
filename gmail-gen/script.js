document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('generatorForm');
    const emailInput = document.getElementById('emailInput');
    const resultsContainer = document.getElementById('results');
    const variantCount = document.getElementById('variantCount');
    const copyAllBtn = document.getElementById('copyAll');
    
    let allVariations = [];
    const itemsPerPage = 100;
    let currentPage = 1;
    
    // Detect mobile devices
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    // Focus input field on load (with slight delay on mobile)
    if (isMobile) {
        setTimeout(() => emailInput.focus(), 500);
    } else {
        emailInput.focus();
    }
    
    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        generateDotVariations();
        // Hide keyboard on mobile after submission
        if (isMobile) {
            emailInput.blur();
        }
    });
    
    // Copy all variations
    copyAllBtn.addEventListener('click', () => {
        copyAllVariations();
    });
    
    // Function to generate all possible dot variations
    function generateDotVariations() {
        const username = emailInput.value.trim().replace(/\./g, ''); // Remove any dots
        
        if (!username) {
            alert('Please enter a valid Gmail username');
            return;
        }
        
        // Show loading indicator
        resultsContainer.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i> Generating variations...</div>';
        
        // Use setTimeout to allow the UI to update before heavy computation
        setTimeout(() => {
            // Generate all possible dot variations
            allVariations = getAllDotVariations(username);
            currentPage = 1;
            
            // Display the variations
            displayVariations();
            
            // Scroll to results on mobile
            if (isMobile) {
                setTimeout(() => {
                    document.querySelector('.results-container').scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start' 
                    });
                }, 100);
            }
        }, 50);
    }
    
    // Function to get all possible dot variations
    function getAllDotVariations(str) {
        // Get all possible combinations of dot placements
        const positions = [];
        for (let i = 1; i < str.length; i++) {
            positions.push(i);
        }
        
        const variations = [];
        
        // Add the original email (no dots)
        variations.push(str + '@gmail.com');
        
        // Generate all possible combinations of dot positions
        for (let r = 1; r <= positions.length; r++) {
            const combinations = getCombinations(positions, r);
            
            for (const combo of combinations) {
                let variant = '';
                for (let i = 0; i < str.length; i++) {
                    variant += str[i];
                    if (combo.includes(i + 1)) {
                        variant += '.';
                    }
                }
                variations.push(variant + '@gmail.com');
            }
        }
        
        return variations;
    }
    
    // Function to get combinations of positions for dot placement
    function getCombinations(arr, r) {
        const result = [];
        
        // Recursive helper function
        function helper(start, combo) {
            if (combo.length === r) {
                result.push([...combo]);
                return;
            }
            
            for (let i = start; i < arr.length; i++) {
                combo.push(arr[i]);
                helper(i + 1, combo);
                combo.pop();
            }
        }
        
        helper(0, []);
        return result;
    }
    
    // Function to display the variations in the UI with pagination
    function displayVariations() {
        resultsContainer.innerHTML = '';
        
        variantCount.textContent = `(${allVariations.length} variations)`;
        
        // Calculate start and end indices for the current page
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, allVariations.length);
        
        // Display current page variations
        const currentVariations = allVariations.slice(startIndex, endIndex);
        
        // Determine animation delay based on device
        const animationDelayBase = isMobile ? 0.01 : 0.02;
        
        // Add delay to create staggered animation effect
        currentVariations.forEach((variant, index) => {
            const variantDiv = document.createElement('div');
            variantDiv.className = 'email-variant';
            variantDiv.style.animationDelay = `${index * animationDelayBase}s`;
            
            const emailSpan = document.createElement('span');
            emailSpan.textContent = variant;
            
            const copyBtn = document.createElement('button');
            copyBtn.className = 'copy-single';
            copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy';
            
            // Add touch-friendly copying
            copyBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent duplicate actions
                copyToClipboard(variant);
                copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                setTimeout(() => {
                    copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy';
                }, 1500);
            });
            
            // Make entire row clickable on mobile to copy email (improves UX for small screens)
            if (isMobile) {
                variantDiv.addEventListener('click', () => {
                    copyToClipboard(variant);
                    // Show a temporary toast notification
                    showToast(`${variant} copied!`);
                });
            }
            
            variantDiv.appendChild(emailSpan);
            variantDiv.appendChild(copyBtn);
            resultsContainer.appendChild(variantDiv);
        });
        
        // Add pagination controls if needed
        if (allVariations.length > itemsPerPage) {
            addPaginationControls();
        }
    }
    
    // Function to add pagination controls
    function addPaginationControls() {
        const totalPages = Math.ceil(allVariations.length / itemsPerPage);
        
        const paginationDiv = document.createElement('div');
        paginationDiv.className = 'pagination';
        
        // Add "Previous" button
        const prevBtn = document.createElement('button');
        prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i> Previous';
        prevBtn.disabled = currentPage === 1;
        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                displayVariations();
                scrollToTop();
            }
        });
        
        // Add page indicator
        const pageIndicator = document.createElement('span');
        pageIndicator.textContent = `Page ${currentPage} of ${totalPages}`;
        pageIndicator.className = 'page-indicator';
        
        // Add "Next" button
        const nextBtn = document.createElement('button');
        nextBtn.innerHTML = 'Next <i class="fas fa-chevron-right"></i>';
        nextBtn.disabled = currentPage === totalPages;
        nextBtn.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                displayVariations();
                scrollToTop();
            }
        });
        
        paginationDiv.appendChild(prevBtn);
        paginationDiv.appendChild(pageIndicator);
        paginationDiv.appendChild(nextBtn);
        
        resultsContainer.appendChild(paginationDiv);
    }
    
    // Helper function to scroll to the top of results smoothly
    function scrollToTop() {
        resultsContainer.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    // Function to show a toast notification
    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.textContent = message;
        
        document.body.appendChild(toast);
        
        // Trigger animation
        setTimeout(() => {
            toast.classList.add('show');
        }, 10);
        
        // Remove after animation
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 2000);
    }
    
    // Function to copy all variations to clipboard
    function copyAllVariations() {
        if (allVariations.length === 0) {
            return;
        }
        
        copyToClipboard(allVariations.join('\n'));
        copyAllBtn.innerHTML = '<i class="fas fa-check"></i> Copied All!';
        
        // Show toast on mobile
        if (isMobile) {
            showToast('All variations copied!');
        }
        
        setTimeout(() => {
            copyAllBtn.innerHTML = '<i class="fas fa-copy"></i> Copy All';
        }, 1500);
    }
    
    // Function to copy text to clipboard
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).catch(err => {
            console.error('Failed to copy: ', err);
            
            // Fallback copy method
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'fixed';  // Avoid scrolling to bottom
            document.body.appendChild(textarea);
            textarea.focus();
            textarea.select();
            
            try {
                document.execCommand('copy');
                // Success message handled by caller
            } catch (err) {
                console.error('Fallback copy failed:', err);
                alert('Could not copy text. Please manually copy.');
            }
            
            document.body.removeChild(textarea);
        });
    }
}); 
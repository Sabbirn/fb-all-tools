document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const generateBtn = document.getElementById('generate-btn');
    const countrySelect = document.getElementById('country');
    const genderSelect = document.getElementById('gender');
    const fullNameEl = document.getElementById('full-name');
    const phoneNumberEl = document.getElementById('phone-number');
    const passwordEl = document.getElementById('password');
    const copyButtons = document.querySelectorAll('.copy-btn');
    const infoCard = document.querySelector('.info-card');
    
    // First and last names by country and gender
    const nameData = {
        USA: {
            male: {
                first: [
                    'John', 'Michael', 'David', 'James', 'Robert', 'William', 'Richard', 'Joseph', 'Thomas', 'Christopher', 
                    'Daniel', 'Matthew', 'Anthony', 'Mark', 'Donald', 'Steven', 'Paul', 'Andrew', 'Joshua', 'Kenneth',
                    'Kevin', 'Brian', 'George', 'Timothy', 'Ronald', 'Jason', 'Edward', 'Jeffrey', 'Ryan', 'Jacob',
                    'Gary', 'Nicholas', 'Eric', 'Jonathan', 'Stephen', 'Larry', 'Justin', 'Scott', 'Brandon', 'Benjamin',
                    'Samuel', 'Gregory', 'Alexander', 'Patrick', 'Frank', 'Raymond', 'Jack', 'Dennis', 'Jerry', 'Tyler',
                    'Aaron', 'Jose', 'Adam', 'Nathan', 'Henry', 'Zachary', 'Douglas', 'Peter', 'Kyle', 'Noah',
                    'Ethan', 'Jeremy', 'Walter', 'Christian', 'Keith', 'Roger', 'Terry', 'Austin', 'Sean', 'Gerald',
                    'Carl', 'Harold', 'Dylan', 'Arthur', 'Lawrence', 'Jordan', 'Jesse', 'Bryan', 'Billy', 'Bruce',
                    'Gabriel', 'Joe', 'Logan', 'Alan', 'Juan', 'Albert', 'Willie', 'Elijah', 'Wayne', 'Randy',
                    'Vincent', 'Mason', 'Roy', 'Ralph', 'Bobby', 'Russell', 'Bradley', 'Philip', 'Eugene', 'Louis'
                ],
                last: [
                    'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Garcia', 'Rodriguez', 'Wilson',
                    'Martinez', 'Anderson', 'Taylor', 'Thomas', 'Hernandez', 'Moore', 'Martin', 'Jackson', 'Thompson', 'White',
                    'Lopez', 'Lee', 'Gonzalez', 'Harris', 'Clark', 'Lewis', 'Robinson', 'Walker', 'Perez', 'Hall',
                    'Young', 'Allen', 'Sanchez', 'Wright', 'King', 'Scott', 'Green', 'Baker', 'Adams', 'Nelson',
                    'Hill', 'Ramirez', 'Campbell', 'Mitchell', 'Roberts', 'Carter', 'Phillips', 'Evans', 'Turner', 'Torres',
                    'Parker', 'Collins', 'Edwards', 'Stewart', 'Flores', 'Morris', 'Nguyen', 'Murphy', 'Rivera', 'Cook',
                    'Rogers', 'Morgan', 'Peterson', 'Cooper', 'Reed', 'Bailey', 'Bell', 'Gomez', 'Kelly', 'Howard',
                    'Ward', 'Cox', 'Diaz', 'Richardson', 'Wood', 'Watson', 'Brooks', 'Bennett', 'Gray', 'James',
                    'Reyes', 'Cruz', 'Hughes', 'Price', 'Myers', 'Long', 'Foster', 'Sanders', 'Ross', 'Morales',
                    'Powell', 'Sullivan', 'Russell', 'Ortiz', 'Jenkins', 'Gutierrez', 'Perry', 'Butler', 'Barnes', 'Fisher'
                ]
            },
            female: {
                first: [
                    'Mary', 'Patricia', 'Jennifer', 'Linda', 'Elizabeth', 'Barbara', 'Susan', 'Jessica', 'Sarah', 'Karen',
                    'Lisa', 'Nancy', 'Betty', 'Margaret', 'Sandra', 'Ashley', 'Kimberly', 'Emily', 'Donna', 'Michelle',
                    'Carol', 'Amanda', 'Dorothy', 'Melissa', 'Deborah', 'Stephanie', 'Rebecca', 'Sharon', 'Laura', 'Cynthia',
                    'Kathleen', 'Amy', 'Angela', 'Shirley', 'Anna', 'Ruth', 'Brenda', 'Pamela', 'Nicole', 'Katherine',
                    'Virginia', 'Catherine', 'Christine', 'Samantha', 'Debra', 'Janet', 'Rachel', 'Carolyn', 'Emma', 'Maria',
                    'Heather', 'Diane', 'Julie', 'Joyce', 'Evelyn', 'Joan', 'Victoria', 'Kelly', 'Christina', 'Lauren',
                    'Frances', 'Martha', 'Judith', 'Cheryl', 'Megan', 'Andrea', 'Olivia', 'Ann', 'Jean', 'Alice',
                    'Jacqueline', 'Hannah', 'Doris', 'Kathryn', 'Gloria', 'Teresa', 'Sara', 'Janice', 'Marie', 'Julia',
                    'Grace', 'Judy', 'Theresa', 'Madison', 'Beverly', 'Denise', 'Marilyn', 'Amber', 'Danielle', 'Abigail',
                    'Brittany', 'Rose', 'Diana', 'Natalie', 'Sophia', 'Alexis', 'Lori', 'Kayla', 'Jane', 'Tiffany'
                ],
                last: [
                    'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Garcia', 'Rodriguez', 'Wilson',
                    'Martinez', 'Anderson', 'Taylor', 'Thomas', 'Hernandez', 'Moore', 'Martin', 'Jackson', 'Thompson', 'White',
                    'Lopez', 'Lee', 'Gonzalez', 'Harris', 'Clark', 'Lewis', 'Robinson', 'Walker', 'Perez', 'Hall',
                    'Young', 'Allen', 'Sanchez', 'Wright', 'King', 'Scott', 'Green', 'Baker', 'Adams', 'Nelson',
                    'Hill', 'Ramirez', 'Campbell', 'Mitchell', 'Roberts', 'Carter', 'Phillips', 'Evans', 'Turner', 'Torres',
                    'Parker', 'Collins', 'Edwards', 'Stewart', 'Flores', 'Morris', 'Nguyen', 'Murphy', 'Rivera', 'Cook',
                    'Rogers', 'Morgan', 'Peterson', 'Cooper', 'Reed', 'Bailey', 'Bell', 'Gomez', 'Kelly', 'Howard',
                    'Ward', 'Cox', 'Diaz', 'Richardson', 'Wood', 'Watson', 'Brooks', 'Bennett', 'Gray', 'James',
                    'Reyes', 'Cruz', 'Hughes', 'Price', 'Myers', 'Long', 'Foster', 'Sanders', 'Ross', 'Morales',
                    'Powell', 'Sullivan', 'Russell', 'Ortiz', 'Jenkins', 'Gutierrez', 'Perry', 'Butler', 'Barnes', 'Fisher'
                ]
            }
        },
        UK: {
            male: {
                first: [
                    'Oliver', 'George', 'Harry', 'Noah', 'Jack', 'Leo', 'Arthur', 'Charlie', 'Oscar', 'Henry',
                    'Jacob', 'Alfie', 'Freddie', 'Thomas', 'Theo', 'William', 'Theodore', 'Archie', 'Joshua', 'Alexander',
                    'James', 'Isaac', 'Edward', 'Lucas', 'Tommy', 'Finley', 'Max', 'Logan', 'Ethan', 'Mohammed',
                    'Teddy', 'Benjamin', 'Arlo', 'Reggie', 'Joseph', 'Sebastian', 'Harrison', 'Elijah', 'Adam', 'Daniel',
                    'Samuel', 'Louie', 'Mason', 'Albie', 'Reuben', 'Rory', 'Jaxon', 'Hugo', 'Luca', 'Matthew',
                    'David', 'Michael', 'Oakley', 'Jesse', 'Muhammad', 'Tommy', 'Ronnie', 'Elliott', 'Jasper', 'Ollie',
                    'Ryan', 'Felix', 'Rowan', 'Luke', 'Albert', 'Charles', 'Jude', 'Caleb', 'Dylan', 'Hunter',
                    'Louis', 'Gabriel', 'Ioan', 'Ezra', 'Blake', 'Nathaniel', 'Frederick', 'Robert', 'Toby', 'Riley',
                    'Austin', 'Roman', 'Finn', 'Leon', 'Aaron', 'Owen', 'Jackson', 'Brodie', 'Parker', 'Sonny',
                    'Zachary', 'Brody', 'Eden', 'Ibrahim', 'Nicholas', 'Nathan', 'Stanley', 'Harvey', 'Bobby', 'Elliot'
                ],
                last: [
                    'Smith', 'Jones', 'Williams', 'Taylor', 'Brown', 'Davies', 'Evans', 'Wilson', 'Thomas', 'Johnson',
                    'Roberts', 'Robinson', 'Thompson', 'Wright', 'Walker', 'White', 'Edwards', 'Hughes', 'Green', 'Hall',
                    'Lewis', 'Harris', 'Clarke', 'Patel', 'Jackson', 'Wood', 'Turner', 'Martin', 'Cooper', 'Hill',
                    'Ward', 'Morris', 'Moore', 'Clark', 'Lee', 'King', 'Baker', 'Harrison', 'Morgan', 'Allen',
                    'James', 'Scott', 'Phillips', 'Watson', 'Davis', 'Parker', 'Price', 'Bennett', 'Young', 'Griffiths',
                    'Mitchell', 'Kelly', 'Cook', 'Carter', 'Richardson', 'Bailey', 'Collins', 'Bell', 'Shaw', 'Murphy',
                    'Miller', 'Cox', 'Richards', 'Khan', 'Marshall', 'Anderson', 'Simpson', 'Ellis', 'Adams', 'Singh',
                    'Begum', 'Wilkinson', 'Foster', 'Chapman', 'Powell', 'Webb', 'Rogers', 'Gray', 'Mason', 'Ali',
                    'Hunt', 'Hussain', 'Campbell', 'Matthews', 'Owen', 'Palmer', 'Holmes', 'Mills', 'Barnes', 'Knight',
                    'Lloyd', 'Butler', 'Russell', 'Barker', 'Fisher', 'Stevens', 'Jenkins', 'Murray', 'Dixon', 'Harvey'
                ]
            },
            female: {
                first: [
                    'Olivia', 'Amelia', 'Isla', 'Ava', 'Emily', 'Sophia', 'Grace', 'Mia', 'Poppy', 'Ella',
                    'Isabella', 'Ivy', 'Lily', 'Rosie', 'Freya', 'Florence', 'Charlotte', 'Willow', 'Evie', 'Elsie',
                    'Phoebe', 'Sophie', 'Sienna', 'Alice', 'Ruby', 'Matilda', 'Harper', 'Daisy', 'Isabelle', 'Evelyn',
                    'Eva', 'Millie', 'Maya', 'Layla', 'Esme', 'Eliza', 'Elizabeth', 'Lola', 'Thea', 'Luna',
                    'Jessica', 'Chloe', 'Mila', 'Penelope', 'Emma', 'Lucy', 'Bella', 'Violet', 'Scarlett', 'Eleanor',
                    'Hannah', 'Harriet', 'Aria', 'Amber', 'Georgia', 'Maisie', 'Rose', 'Holly', 'Emilia', 'Imogen',
                    'Ellie', 'Darcie', 'Lottie', 'Ada', 'Maria', 'Amelie', 'Aurora', 'Ayla', 'Zara', 'Robyn',
                    'Molly', 'Victoria', 'Anna', 'Gracie', 'Hallie', 'Summer', 'Beatrice', 'Nancy', 'Clara', 'Darcey',
                    'Orla', 'Arabella', 'Delilah', 'Iris', 'Mabel', 'Elodie', 'Jasmine', 'Abigail', 'Martha', 'Margot',
                    'Heidi', 'Darcy', 'Lyla', 'Ellie', 'Olive', 'Annabelle', 'Bertie', 'Lara', 'Bonnie', 'Frankie'
                ],
                last: [
                    'Smith', 'Jones', 'Williams', 'Taylor', 'Brown', 'Davies', 'Evans', 'Wilson', 'Thomas', 'Johnson',
                    'Roberts', 'Robinson', 'Thompson', 'Wright', 'Walker', 'White', 'Edwards', 'Hughes', 'Green', 'Hall',
                    'Lewis', 'Harris', 'Clarke', 'Patel', 'Jackson', 'Wood', 'Turner', 'Martin', 'Cooper', 'Hill',
                    'Ward', 'Morris', 'Moore', 'Clark', 'Lee', 'King', 'Baker', 'Harrison', 'Morgan', 'Allen',
                    'James', 'Scott', 'Phillips', 'Watson', 'Davis', 'Parker', 'Price', 'Bennett', 'Young', 'Griffiths',
                    'Mitchell', 'Kelly', 'Cook', 'Carter', 'Richardson', 'Bailey', 'Collins', 'Bell', 'Shaw', 'Murphy',
                    'Miller', 'Cox', 'Richards', 'Khan', 'Marshall', 'Anderson', 'Simpson', 'Ellis', 'Adams', 'Singh',
                    'Begum', 'Wilkinson', 'Foster', 'Chapman', 'Powell', 'Webb', 'Rogers', 'Gray', 'Mason', 'Ali',
                    'Hunt', 'Hussain', 'Campbell', 'Matthews', 'Owen', 'Palmer', 'Holmes', 'Mills', 'Barnes', 'Knight',
                    'Lloyd', 'Butler', 'Russell', 'Barker', 'Fisher', 'Stevens', 'Jenkins', 'Murray', 'Dixon', 'Harvey'
                ]
            }
        },
        Canada: {
            male: {
                first: [
                    'Liam', 'Noah', 'William', 'Logan', 'Lucas', 'Benjamin', 'Ethan', 'Oliver', 'Jacob', 'James',
                    'Alexander', 'Matthew', 'Jackson', 'Daniel', 'Gabriel', 'Carter', 'Owen', 'Thomas', 'John', 'Jack',
                    'Ryan', 'Nathan', 'Samuel', 'Isaac', 'David', 'Wyatt', 'Caleb', 'Mason', 'Michael', 'Joseph',
                    'Leo', 'Joshua', 'Adam', 'Henry', 'Grayson', 'Anthony', 'Eli', 'Luke', 'Levi', 'Lincoln',
                    'Hudson', 'Hunter', 'Austin', 'Julian', 'Aiden', 'Sebastian', 'Xavier', 'Theodore', 'Andrew', 'Max',
                    'Evan', 'Nicholas', 'Connor', 'Aaron', 'Zachary', 'Jonathan', 'Cooper', 'Christian', 'Cameron', 'Nolan',
                    'Dominic', 'Chase', 'Elijah', 'Emmett', 'Jaxon', 'Charles', 'Felix', 'Cole', 'Simon', 'Louis',
                    'Theo', 'Dylan', 'Tyler', 'Eric', 'Gavin', 'Elliot', 'Asher', 'Kyle', 'Blake', 'Muhammad',
                    'Damien', 'Tristan', 'Justin', 'Marcus', 'Robert', 'Félix', 'Vincent', 'Alex', 'Jordan', 'Oscar',
                    'Luc', 'Miles', 'Ian', 'Amir', 'Edward', 'Timothy', 'Jayden', 'August', 'Axel', 'Patrick'
                ],
                last: [
                    'Smith', 'Brown', 'Tremblay', 'Martin', 'Roy', 'Wilson', 'Johnson', 'MacDonald', 'Gagnon', 'Lee',
                    'Williams', 'Taylor', 'Jones', 'Singh', 'Wong', 'Anderson', 'Côté', 'Campbell', 'Chan', 'Leblanc',
                    'White', 'Thompson', 'Bouchard', 'Gauthier', 'Davis', 'Miller', 'Bélanger', 'Moore', 'Morin', 'Clark',
                    'Thomas', 'Lefebvre', 'Young', 'King', 'Robinson', 'Lavoie', 'Walker', 'Stewart', 'Patel', 'Green',
                    'Fortin', 'Mitchell', 'Roberts', 'Wright', 'Hall', 'Li', 'Pelletier', 'Baker', 'Ross', 'Chen',
                    'Johnston', 'Dubois', 'Lewis', 'Wang', 'Harris', 'Adams', 'Allen', 'Kim', 'Morris', 'Scott',
                    'Bergeron', 'Clarke', 'Graham', 'Reid', 'Morgan', 'Gill', 'O\'Neill', 'Murray', 'Russell', 'Evans',
                    'Ouellet', 'Simard', 'Caron', 'Kennedy', 'Cox', 'Kelly', 'Fraser', 'Poirier', 'Martel', 'Girard',
                    'Bennett', 'Murphy', 'Richard', 'Phillips', 'Cunningham', 'Hamilton', 'Zhang', 'Foster', 'Lévesque', 'Dion',
                    'Beaulieu', 'Reid', 'Gill', 'Watson', 'Nelson', 'Turcotte', 'Lessard', 'Cameron', 'Gordon', 'Park'
                ]
            },
            female: {
                first: [
                    'Emma', 'Olivia', 'Charlotte', 'Ava', 'Sophia', 'Amelia', 'Isabella', 'Mia', 'Aria', 'Chloe',
                    'Emily', 'Abigail', 'Ella', 'Sofia', 'Avery', 'Lily', 'Zoe', 'Hannah', 'Mila', 'Scarlett',
                    'Evelyn', 'Nora', 'Leah', 'Riley', 'Elizabeth', 'Violet', 'Victoria', 'Grace', 'Layla', 'Aurora',
                    'Anna', 'Sophie', 'Alice', 'Lucy', 'Naomi', 'Hazel', 'Claire', 'Brielle', 'Clara', 'Ellie',
                    'Aubrey', 'Audrey', 'Julia', 'Eva', 'Sarah', 'Maya', 'Madelyn', 'Zoey', 'Adeline', 'Autumn',
                    'Stella', 'Madison', 'Kinsley', 'Eleanor', 'Emilia', 'Willow', 'Ariana', 'Vivian', 'Ruby', 'Nova',
                    'Addison', 'Penelope', 'Lillian', 'Eliana', 'Samantha', 'Natalie', 'Alexa', 'Caroline', 'Arianna', 'Gabriella',
                    'Quinn', 'Rose', 'Kennedy', 'Paisley', 'Ivy', 'Harper', 'Everly', 'Lauren', 'Isabelle', 'Elise',
                    'Sadie', 'Josephine', 'Alexandra', 'Ada', 'Léa', 'Lila', 'Juliette', 'Isla', 'Maria', 'Georgia',
                    'Jade', 'Amaya', 'Valentina', 'Camille', 'Brooklyn', 'Lana', 'Delilah', 'Brooklynn', 'Alyssa', 'Luna'
                ],
                last: [
                    'Smith', 'Brown', 'Tremblay', 'Martin', 'Roy', 'Wilson', 'Johnson', 'MacDonald', 'Gagnon', 'Lee',
                    'Williams', 'Taylor', 'Jones', 'Singh', 'Wong', 'Anderson', 'Côté', 'Campbell', 'Chan', 'Leblanc',
                    'White', 'Thompson', 'Bouchard', 'Gauthier', 'Davis', 'Miller', 'Bélanger', 'Moore', 'Morin', 'Clark',
                    'Thomas', 'Lefebvre', 'Young', 'King', 'Robinson', 'Lavoie', 'Walker', 'Stewart', 'Patel', 'Green',
                    'Fortin', 'Mitchell', 'Roberts', 'Wright', 'Hall', 'Li', 'Pelletier', 'Baker', 'Ross', 'Chen',
                    'Johnston', 'Dubois', 'Lewis', 'Wang', 'Harris', 'Adams', 'Allen', 'Kim', 'Morris', 'Scott',
                    'Bergeron', 'Clarke', 'Graham', 'Reid', 'Morgan', 'Gill', 'O\'Neill', 'Murray', 'Russell', 'Evans',
                    'Ouellet', 'Simard', 'Caron', 'Kennedy', 'Cox', 'Kelly', 'Fraser', 'Poirier', 'Martel', 'Girard',
                    'Bennett', 'Murphy', 'Richard', 'Phillips', 'Cunningham', 'Hamilton', 'Zhang', 'Foster', 'Lévesque', 'Dion',
                    'Beaulieu', 'Reid', 'Gill', 'Watson', 'Nelson', 'Turcotte', 'Lessard', 'Cameron', 'Gordon', 'Park'
                ]
            }
        },
        Australia: {
            male: {
                first: [
                    'Oliver', 'William', 'Jack', 'Noah', 'Thomas', 'Henry', 'Lucas', 'James', 'Ethan', 'Leo',
                    'Liam', 'Charlie', 'Alexander', 'Mason', 'Oscar', 'Archie', 'Max', 'Isaac', 'Harrison', 'Cooper',
                    'Samuel', 'Benjamin', 'Levi', 'Hudson', 'Elijah', 'Daniel', 'Joshua', 'Jackson', 'Hunter', 'Lachlan',
                    'Jacob', 'Hugo', 'Harry', 'Edward', 'Angus', 'Xavier', 'Theodore', 'Finn', 'Austin', 'Logan',
                    'George', 'Hamish', 'Joseph', 'Ryder', 'Lincoln', 'Archer', 'Arthur', 'Jasper', 'Sonny', 'Flynn',
                    'Felix', 'Michael', 'Patrick', 'Ryan', 'Sebastian', 'Toby', 'Matthew', 'Zachary', 'Eli', 'Lewis',
                    'Spencer', 'Fletcher', 'Maxwell', 'Parker', 'Charles', 'Beau', 'Harvey', 'Riley', 'Lennox', 'Marcus',
                    'Christian', 'Caleb', 'Luke', 'Jordan', 'Arlo', 'Ashton', 'Ezra', 'Hayden', 'Jake', 'Jude',
                    'Samuel', 'Blake', 'Anthony', 'Dylan', 'Aiden', 'Nicholas', 'Cameron', 'Jaxon', 'Gabriel', 'Kai',
                    'Tyler', 'Owen', 'Grayson', 'Asher', 'Carter', 'Dominic', 'Tate', 'Miles', 'Elliot', 'Darcy'
                ],
                last: [
                    'Smith', 'Jones', 'Williams', 'Brown', 'Wilson', 'Taylor', 'Johnson', 'White', 'Martin', 'Anderson',
                    'Thompson', 'Nguyen', 'Thomas', 'Walker', 'Harris', 'Lee', 'Ryan', 'Robinson', 'Kelly', 'King',
                    'Davis', 'Wright', 'Thompson', 'Evans', 'Johnston', 'Moore', 'Campbell', 'Clark', 'Roberts', 'Allen',
                    'Young', 'Mitchell', 'Scott', 'Morris', 'Hill', 'Lewis', 'Hall', 'Baker', 'Green', 'Adams',
                    'Wang', 'Chen', 'Wong', 'Bell', 'Patel', 'Edwards', 'Collins', 'Stewart', 'Nelson', 'Bailey',
                    'Murphy', 'Cook', 'Cooper', 'Richardson', 'Cox', 'Howard', 'Ward', 'Morgan', 'Foster', 'Webb',
                    'Gray', 'Chapman', 'Hughes', 'Powell', 'Rogers', 'Hunter', 'Wood', 'Ross', 'Russell', 'Mason',
                    'Webb', 'Gordon', 'Miller', 'Parker', 'Cameron', 'Graham', 'Singh', 'Zhang', 'Ali', 'Knight',
                    'Watson', 'Robertson', 'Kennedy', 'McDonald', 'Harrison', 'Reid', 'Murray', 'O\'Brien', 'Fisher', 'Stevens',
                    'Marshall', 'Phillips', 'McCarthy', 'Hamilton', 'Ferguson', 'Burns', 'Palmer', 'Gibson', 'Simpson', 'Grant'
                ]
            },
            female: {
                first: [
                    'Charlotte', 'Olivia', 'Ava', 'Amelia', 'Mia', 'Isla', 'Grace', 'Ella', 'Sophie', 'Chloe',
                    'Harper', 'Ruby', 'Willow', 'Isabella', 'Evie', 'Ivy', 'Matilda', 'Zoe', 'Lily', 'Aria',
                    'Sophia', 'Scarlett', 'Evelyn', 'Lucy', 'Emma', 'Hazel', 'Audrey', 'Maya', 'Layla', 'Georgia',
                    'Alice', 'Frankie', 'Ellie', 'Hannah', 'Sofia', 'Mila', 'Emily', 'Sienna', 'Mackenzie', 'Ayla',
                    'Abigail', 'Harriet', 'Violet', 'Eleanor', 'Elizabeth', 'Florence', 'Piper', 'Aurora', 'Poppy', 'Stella',
                    'Elsie', 'Bonnie', 'Daisy', 'Eloise', 'Luna', 'Maddison', 'Isabelle', 'Holly', 'Imogen', 'Indiana',
                    'Phoebe', 'Billie', 'Ariana', 'Eden', 'Savannah', 'Lara', 'Freya', 'Hallie', 'Jasmine', 'Rose',
                    'Millie', 'Summer', 'Penelope', 'Eva', 'Addison', 'Olive', 'Claire', 'Quinn', 'Molly', 'Thea',
                    'Heidi', 'Peyton', 'Pippa', 'Zara', 'Victoria', 'Alexandra', 'Sadie', 'Lilly', 'Rosie', 'Annabelle',
                    'Alyssa', 'Leah', 'Maggie', 'Harlow', 'Mabel', 'Sarah', 'Lola', 'Chelsea', 'Paige', 'Madeline'
                ],
                last: [
                    'Smith', 'Jones', 'Williams', 'Brown', 'Wilson', 'Taylor', 'Johnson', 'White', 'Martin', 'Anderson',
                    'Thompson', 'Nguyen', 'Thomas', 'Walker', 'Harris', 'Lee', 'Ryan', 'Robinson', 'Kelly', 'King',
                    'Davis', 'Wright', 'Thompson', 'Evans', 'Johnston', 'Moore', 'Campbell', 'Clark', 'Roberts', 'Allen',
                    'Young', 'Mitchell', 'Scott', 'Morris', 'Hill', 'Lewis', 'Hall', 'Baker', 'Green', 'Adams',
                    'Wang', 'Chen', 'Wong', 'Bell', 'Patel', 'Edwards', 'Collins', 'Stewart', 'Nelson', 'Bailey',
                    'Murphy', 'Cook', 'Cooper', 'Richardson', 'Cox', 'Howard', 'Ward', 'Morgan', 'Foster', 'Webb',
                    'Gray', 'Chapman', 'Hughes', 'Powell', 'Rogers', 'Hunter', 'Wood', 'Ross', 'Russell', 'Mason',
                    'Webb', 'Gordon', 'Miller', 'Parker', 'Cameron', 'Graham', 'Singh', 'Zhang', 'Ali', 'Knight',
                    'Watson', 'Robertson', 'Kennedy', 'McDonald', 'Harrison', 'Reid', 'Murray', 'O\'Brien', 'Fisher', 'Stevens',
                    'Marshall', 'Phillips', 'McCarthy', 'Hamilton', 'Ferguson', 'Burns', 'Palmer', 'Gibson', 'Simpson', 'Grant'
                ]
            }
        },
        France: {
            male: {
                first: [
                    'Gabriel', 'Louis', 'Raphaël', 'Jules', 'Adam', 'Lucas', 'Léo', 'Hugo', 'Arthur', 'Nathan',
                    'Liam', 'Ethan', 'Maël', 'Paul', 'Tom', 'Aaron', 'Noé', 'Théo', 'Noah', 'Tiago',
                    'Mathis', 'Axel', 'Victor', 'Mohamed', 'Timéo', 'Nolan', 'Éden', 'Gabin', 'Naël', 'Sacha',
                    'Martin', 'Mathéo', 'Rayan', 'Valentin', 'Noa', 'Thomas', 'Antoine', 'Maxime', 'Gaspard', 'Yanis',
                    'Augustin', 'Samuel', 'Ibrahim', 'Amir', 'Maxence', 'Simon', 'Baptiste', 'Côme', 'Imran', 'Malo',
                    'Eliott', 'Jean', 'Sohan', 'Isaac', 'Kaïs', 'Marius', 'Soan', 'Alexandre', 'Clément', 'Ayden',
                    'Marceau', 'William', 'Léon', 'Ismaël', 'Youssef', 'Adem', 'Lyam', 'Gustave', 'Ayoub', 'Robin',
                    'Ryan', 'Ali', 'Mathys', 'Evan', 'Ilyan', 'Théodore', 'David', 'Hamza', 'Noam', 'Sandro',
                    'Charly', 'Basile', 'Charles', 'Joseph', 'Élie', 'Esteban', 'Oscar', 'Joshua', 'Nathanaël', 'Alexis',
                    'Wassim', 'Adrien', 'Amine', 'Milo', 'Lenny', 'Lorenzo', 'Elio', 'Romain', 'Louka', 'Enzo'
                ],
                last: [
                    'Martin', 'Bernard', 'Dubois', 'Thomas', 'Robert', 'Richard', 'Petit', 'Durand', 'Leroy', 'Moreau',
                    'Simon', 'Laurent', 'Lefebvre', 'Michel', 'Garcia', 'David', 'Bertrand', 'Roux', 'Vincent', 'Fournier',
                    'Morel', 'Girard', 'André', 'Mercier', 'Dupont', 'Lambert', 'Bonnet', 'François', 'Martinez', 'Legrand',
                    'Garnier', 'Faure', 'Rousseau', 'Blanc', 'Guerin', 'Muller', 'Henry', 'Roussel', 'Nicolas', 'Perrin',
                    'Morin', 'Mathieu', 'Clement', 'Gauthier', 'Dumont', 'Lopez', 'Fontaine', 'Chevalier', 'Robin', 'Masson',
                    'Sanchez', 'Gerard', 'Nguyen', 'Boyer', 'Denis', 'Lemaire', 'Duval', 'Joly', 'Gautier', 'Roger',
                    'Marie', 'Marchand', 'Dufour', 'Brunet', 'Meyer', 'Blanchard', 'Barbier', 'Lucas', 'Leroux', 'Schmitt',
                    'Roy', 'Jean', 'Rolland', 'Picard', 'Gaillard', 'Arnaud', 'Giraud', 'Menard', 'Brun', 'Dumas',
                    'Caron', 'Jacob', 'Aubry', 'Renard', 'Guyot', 'Hubert', 'Colin', 'Vidal', 'Gonzalez', 'Lemoine',
                    'Adam', 'Rodriguez', 'Aubert', 'Bailly', 'Fleury', 'Leclerc', 'Lacroix', 'Renaud', 'Olivier', 'Philippe'
                ]
            },
            female: {
                first: [
                    'Emma', 'Jade', 'Louise', 'Alice', 'Chloé', 'Léa', 'Manon', 'Rose', 'Anna', 'Inès',
                    'Camille', 'Lina', 'Léna', 'Mila', 'Ambre', 'Julia', 'Lou', 'Agathe', 'Juliette', 'Zoé',
                    'Clara', 'Eva', 'Jeanne', 'Louna', 'Nina', 'Victoire', 'Romane', 'Sofia', 'Lola', 'Mia',
                    'Romy', 'Charlotte', 'Sarah', 'Adèle', 'Lucie', 'Iris', 'Giulia', 'Olivia', 'Margaux', 'Victoria',
                    'Luna', 'Capucine', 'Léonie', 'Aya', 'Emy', 'Yasmine', 'Margot', 'Clémence', 'Anaïs', 'Lilou',
                    'Elise', 'Noémie', 'Gabrielle', 'Lana', 'Zélie', 'Lya', 'Alicia', 'Maya', 'Elsa', 'Valentine',
                    'Constance', 'Raphaëlle', 'Roxane', 'Clotilde', 'Lise', 'Marie', 'Laura', 'Elisa', 'Charlie', 'Maëlys',
                    'Célia', 'Apolline', 'Océane', 'Enora', 'Manelle', 'Amelia', 'Manel', 'Céleste', 'Lily', 'Lyana',
                    'Chloé', 'Mathilde', 'Marine', 'Pauline', 'Morgane', 'Lisa', 'Sophia', 'Maëlle', 'Angèle', 'Ines',
                    'Eden', 'Candice', 'Cassandra', 'Emmy', 'Ella', 'Nour', 'Salomé', 'Ninon', 'Joséphine', 'Albane'
                ],
                last: [
                    'Martin', 'Bernard', 'Dubois', 'Thomas', 'Robert', 'Richard', 'Petit', 'Durand', 'Leroy', 'Moreau',
                    'Simon', 'Laurent', 'Lefebvre', 'Michel', 'Garcia', 'David', 'Bertrand', 'Roux', 'Vincent', 'Fournier',
                    'Morel', 'Girard', 'André', 'Mercier', 'Dupont', 'Lambert', 'Bonnet', 'François', 'Martinez', 'Legrand',
                    'Garnier', 'Faure', 'Rousseau', 'Blanc', 'Guerin', 'Muller', 'Henry', 'Roussel', 'Nicolas', 'Perrin',
                    'Morin', 'Mathieu', 'Clement', 'Gauthier', 'Dumont', 'Lopez', 'Fontaine', 'Chevalier', 'Robin', 'Masson',
                    'Sanchez', 'Gerard', 'Nguyen', 'Boyer', 'Denis', 'Lemaire', 'Duval', 'Joly', 'Gautier', 'Roger',
                    'Marie', 'Marchand', 'Dufour', 'Brunet', 'Meyer', 'Blanchard', 'Barbier', 'Lucas', 'Leroux', 'Schmitt',
                    'Roy', 'Jean', 'Rolland', 'Picard', 'Gaillard', 'Arnaud', 'Giraud', 'Menard', 'Brun', 'Dumas',
                    'Caron', 'Jacob', 'Aubry', 'Renard', 'Guyot', 'Hubert', 'Colin', 'Vidal', 'Gonzalez', 'Lemoine',
                    'Adam', 'Rodriguez', 'Aubert', 'Bailly', 'Fleury', 'Leclerc', 'Lacroix', 'Renaud', 'Olivier', 'Philippe'
                ]
            }
        },
        Germany: {
            male: {
                first: [
                    'Ben', 'Paul', 'Leon', 'Finn', 'Jonas', 'Noah', 'Elias', 'Luis', 'Felix', 'Lukas',
                    'Henry', 'Luca', 'Emil', 'Maximilian', 'Anton', 'Jakob', 'Leo', 'Moritz', 'Oskar', 'Niklas',
                    'David', 'Julian', 'Philipp', 'Alexander', 'Matteo', 'Samuel', 'Liam', 'Theo', 'Mats', 'Johann',
                    'Jan', 'Linus', 'Jonathan', 'Tim', 'Karl', 'Nils', 'Jona', 'Lenny', 'Valentin', 'Milan',
                    'Max', 'Tobias', 'Adam', 'Florian', 'Aaron', 'Simon', 'Lennard', 'Erik', 'Sebastian', 'Johannes',
                    'Daniel', 'Jannik', 'Gabriel', 'Levi', 'Fabian', 'Till', 'Ole', 'Lennox', 'Vincent', 'Louis',
                    'Konrad', 'Rafael', 'Janosch', 'Benedikt', 'Julius', 'Michael', 'Justus', 'Adrian', 'Tom', 'Nicolas',
                    'Leonard', 'Constantin', 'Frederik', 'Mika', 'Pepe', 'Timo', 'Mattis', 'Henning', 'Marlon', 'Ben',
                    'Fritz', 'Bruno', 'Toni', 'Levin', 'Mohammed', 'Hannes', 'Christian', 'Kilian', 'Wilhelm', 'Marco',
                    'Franz', 'Benno', 'Jonah', 'Damian', 'Martin', 'Malte', 'Joshua', 'Dominik', 'Lian', 'Robin'
                ],
                last: [
                    'Müller', 'Schmidt', 'Schneider', 'Fischer', 'Weber', 'Meyer', 'Wagner', 'Becker', 'Schulz', 'Hoffmann',
                    'Schäfer', 'Koch', 'Bauer', 'Richter', 'Klein', 'Wolf', 'Schröder', 'Neumann', 'Schwarz', 'Zimmermann',
                    'Braun', 'Krüger', 'Hofmann', 'Hartmann', 'Lange', 'Schmitt', 'Werner', 'Schmitz', 'Krause', 'Meier',
                    'Lehmann', 'Schmid', 'Schulze', 'Maier', 'Köhler', 'Herrmann', 'König', 'Walter', 'Mayer', 'Huber',
                    'Kaiser', 'Fuchs', 'Peters', 'Lang', 'Scholz', 'Möller', 'Weiß', 'Jung', 'Hahn', 'Schubert',
                    'Vogel', 'Friedrich', 'Keller', 'Günther', 'Frank', 'Berger', 'Roth', 'Beck', 'Lorenz', 'Baumann',
                    'Franke', 'Albrecht', 'Schuster', 'Simon', 'Ludwig', 'Böhm', 'Winter', 'Kraus', 'Martin', 'Schumacher',
                    'Krämer', 'Vogt', 'Stein', 'Jäger', 'Otto', 'Sommer', 'Groß', 'Seidel', 'Heinrich', 'Brandt',
                    'Haas', 'Schreiber', 'Graf', 'Schulte', 'Dietrich', 'Ziegler', 'Kuhn', 'Kühn', 'Pohl', 'Engel',
                    'Horn', 'Busch', 'Bergmann', 'Thomas', 'Voigt', 'Sauer', 'Arnold', 'Wolff', 'Pfeiffer', 'Ernst'
                ]
            },
            female: {
                first: [
                    'Emilia', 'Hannah', 'Emma', 'Sofia', 'Mia', 'Lina', 'Mila', 'Marie', 'Lena', 'Anna',
                    'Ida', 'Lea', 'Laura', 'Charlotte', 'Lilly', 'Clara', 'Sophie', 'Leonie', 'Luisa', 'Mathilda',
                    'Ella', 'Victoria', 'Johanna', 'Amelie', 'Maja', 'Julia', 'Isabella', 'Frieda', 'Zoe', 'Lia',
                    'Klara', 'Paula', 'Sarah', 'Liv', 'Melina', 'Maria', 'Pia', 'Matilda', 'Alina', 'Elisabeth',
                    'Elena', 'Emily', 'Nora', 'Helena', 'Marlene', 'Luna', 'Theresa', 'Magdalena', 'Josephine', 'Pauline',
                    'Lotta', 'Antonia', 'Stella', 'Amy', 'Katharina', 'Martha', 'Elisa', 'Elif', 'Valentina', 'Emely',
                    'Finja', 'Juna', 'Romy', 'Eva', 'Mira', 'Alicia', 'Jana', 'Malea', 'Leni', 'Hanna',
                    'Hailey', 'Luise', 'Tilda', 'Alma', 'Rosalie', 'Annika', 'Malina', 'Nina', 'Elina', 'Jule',
                    'Jasmin', 'Melissa', 'Milena', 'Amalia', 'Nele', 'Carlotta', 'Lucia', 'Felia', 'Lotte', 'Caroline',
                    'Thea', 'Selina', 'Helene', 'Aurelia', 'Amira', 'Aurora', 'Linda', 'Elise', 'Liana', 'Giulia'
                ],
                last: [
                    'Müller', 'Schmidt', 'Schneider', 'Fischer', 'Weber', 'Meyer', 'Wagner', 'Becker', 'Schulz', 'Hoffmann',
                    'Schäfer', 'Koch', 'Bauer', 'Richter', 'Klein', 'Wolf', 'Schröder', 'Neumann', 'Schwarz', 'Zimmermann',
                    'Braun', 'Krüger', 'Hofmann', 'Hartmann', 'Lange', 'Schmitt', 'Werner', 'Schmitz', 'Krause', 'Meier',
                    'Lehmann', 'Schmid', 'Schulze', 'Maier', 'Köhler', 'Herrmann', 'König', 'Walter', 'Mayer', 'Huber',
                    'Kaiser', 'Fuchs', 'Peters', 'Lang', 'Scholz', 'Möller', 'Weiß', 'Jung', 'Hahn', 'Schubert',
                    'Vogel', 'Friedrich', 'Keller', 'Günther', 'Frank', 'Berger', 'Roth', 'Beck', 'Lorenz', 'Baumann',
                    'Franke', 'Albrecht', 'Schuster', 'Simon', 'Ludwig', 'Böhm', 'Winter', 'Kraus', 'Martin', 'Schumacher',
                    'Krämer', 'Vogt', 'Stein', 'Jäger', 'Otto', 'Sommer', 'Groß', 'Seidel', 'Heinrich', 'Brandt',
                    'Haas', 'Schreiber', 'Graf', 'Schulte', 'Dietrich', 'Ziegler', 'Kuhn', 'Kühn', 'Pohl', 'Engel',
                    'Horn', 'Busch', 'Bergmann', 'Thomas', 'Voigt', 'Sauer', 'Arnold', 'Wolff', 'Pfeiffer', 'Ernst'
                ]
            }
        },
        Japan: {
            male: {
                first: [
                    'Haruto', 'Sota', 'Yuto', 'Sosuke', 'Riku', 'Ren', 'Haru', 'Keita', 'Takumi', 'Yamato',
                    'Yuki', 'Tatsuki', 'Sora', 'Kota', 'Shota', 'Daiki', 'Kaito', 'Minato', 'Yusei', 'Koki',
                    'Ryusei', 'Kaito', 'Kouki', 'Kazuki', 'Sho', 'Hiroto', 'Ryota', 'Hayato', 'Kenta', 'Shun',
                    'Yuito', 'Ryuki', 'Daichi', 'Shoma', 'Eita', 'Asahi', 'Yuma', 'Souta', 'Taisei', 'Yudai',
                    'Tsubasa', 'Kenshin', 'Kouta', 'Kosuke', 'Tomoya', 'Taiga', 'Seiya', 'Toma', 'Yuta', 'Yuya',
                    'Ryousuke', 'Takeru', 'Shintaro', 'Ryoga', 'Ibuki', 'Kaede', 'Nagisa', 'Hinata', 'Taichi', 'Kohei',
                    'Akira', 'Jun', 'Soma', 'Makoto', 'Tatsuya', 'Yuusei', 'Kousuke', 'Rikuto', 'Kento', 'Raito',
                    'Yuzuki', 'Itsuki', 'Junya', 'Takehiro', 'Shinji', 'Yuusuke', 'Masaki', 'Kazuma', 'Satoshi', 'Naoki',
                    'Hikaru', 'Wataru', 'Naoto', 'Fumiya', 'Tetsuya', 'Osamu', 'Kengo', 'Masaya', 'Yosuke', 'Daisuke',
                    'Kenzo', 'Mitsuki', 'Ryoma', 'Shigeru', 'Issei', 'Keisuke', 'Taro', 'Kenichi', 'Akio', 'Tadashi'
                ],
                last: [
                    'Sato', 'Suzuki', 'Takahashi', 'Tanaka', 'Watanabe', 'Ito', 'Yamamoto', 'Nakamura', 'Kobayashi', 'Kato',
                    'Yoshida', 'Yamada', 'Sasaki', 'Yamaguchi', 'Matsumoto', 'Inoue', 'Kimura', 'Hayashi', 'Shimizu', 'Saito',
                    'Nakajima', 'Ikeda', 'Mori', 'Hashimoto', 'Ishikawa', 'Ogawa', 'Maeda', 'Fujita', 'Okada', 'Goto',
                    'Hasegawa', 'Murakami', 'Kojima', 'Abe', 'Kondo', 'Ishii', 'Sakamoto', 'Aoki', 'Fujii', 'Nishimura',
                    'Fukuda', 'Ota', 'Miura', 'Fujiwara', 'Okamoto', 'Matsui', 'Nakagawa', 'Nakano', 'Kaneko', 'Watanabe',
                    'Ishida', 'Endo', 'Saito', 'Arai', 'Shibata', 'Kudo', 'Yokoyama', 'Miyazaki', 'Ueda', 'Takagi',
                    'Uchida', 'Takada', 'Taniguchi', 'Furuya', 'Yoshimura', 'Nagai', 'Fujimoto', 'Takeda', 'Nomura', 'Tamura',
                    'Yamashita', 'Morita', 'Sugawara', 'Sugiyama', 'Murata', 'Hirano', 'Otsuka', 'Maruyama', 'Hirata', 'Chiba',
                    'Kikuchi', 'Ueno', 'Takeuchi', 'Imai', 'Kawano', 'Eguchi', 'Tanabe', 'Kubo', 'Matsuda', 'Iwasaki',
                    'Sekiguchi', 'Mochizuki', 'Wada', 'Igarashi', 'Takemoto', 'Kuroda', 'Koyama', 'Noguchi', 'Tokuda', 'Kawamura'
                ]
            },
            female: {
                first: [
                    'Yui', 'Aoi', 'Hina', 'Yuna', 'Rio', 'Koharu', 'Yume', 'Akari', 'Sakura', 'Himari',
                    'Ichika', 'Saki', 'Mei', 'Sara', 'Miyu', 'Honoka', 'Rin', 'Mio', 'Kokona', 'Hiyori',
                    'Misaki', 'Nao', 'Hinata', 'Yuka', 'Nanami', 'Haruka', 'Riko', 'Yui', 'Ayaka', 'Momoka',
                    'Nana', 'Sana', 'Miku', 'Rika', 'Shiori', 'Ayane', 'Ayano', 'Hana', 'Yua', 'Risa',
                    'Mana', 'Akane', 'Rina', 'Kaho', 'Mizuki', 'Ayumi', 'Aya', 'Natsuki', 'Reina', 'Noa',
                    'Karin', 'Ai', 'Mirei', 'Saya', 'Suzu', 'Haruna', 'Chihiro', 'Runa', 'Mayu', 'Airi',
                    'Kanon', 'Chisato', 'Asuka', 'Hiroka', 'Aki', 'Minami', 'Kotone', 'Erika', 'Moe', 'Yu',
                    'Aika', 'Kaori', 'Megumi', 'Sayaka', 'Fuka', 'Mikoto', 'Remi', 'Narumi', 'Kana', 'Yumi',
                    'Reika', 'Izumi', 'Tomomi', 'Sawako', 'Emiri', 'Yoko', 'Shizuka', 'Serika', 'Kaori', 'Chiaki',
                    'Michiru', 'Hitomi', 'Miki', 'Nozomi', 'Rumi', 'Seira', 'Kurumi', 'Yuria', 'Chika', 'Sumire'
                ],
                last: [
                    'Sato', 'Suzuki', 'Takahashi', 'Tanaka', 'Watanabe', 'Ito', 'Yamamoto', 'Nakamura', 'Kobayashi', 'Kato',
                    'Yoshida', 'Yamada', 'Sasaki', 'Yamaguchi', 'Matsumoto', 'Inoue', 'Kimura', 'Hayashi', 'Shimizu', 'Saito',
                    'Nakajima', 'Ikeda', 'Mori', 'Hashimoto', 'Ishikawa', 'Ogawa', 'Maeda', 'Fujita', 'Okada', 'Goto',
                    'Hasegawa', 'Murakami', 'Kojima', 'Abe', 'Kondo', 'Ishii', 'Sakamoto', 'Aoki', 'Fujii', 'Nishimura',
                    'Fukuda', 'Ota', 'Miura', 'Fujiwara', 'Okamoto', 'Matsui', 'Nakagawa', 'Nakano', 'Kaneko', 'Watanabe',
                    'Ishida', 'Endo', 'Saito', 'Arai', 'Shibata', 'Kudo', 'Yokoyama', 'Miyazaki', 'Ueda', 'Takagi',
                    'Uchida', 'Takada', 'Taniguchi', 'Furuya', 'Yoshimura', 'Nagai', 'Fujimoto', 'Takeda', 'Nomura', 'Tamura',
                    'Yamashita', 'Morita', 'Sugawara', 'Sugiyama', 'Murata', 'Hirano', 'Otsuka', 'Maruyama', 'Hirata', 'Chiba',
                    'Kikuchi', 'Ueno', 'Takeuchi', 'Imai', 'Kawano', 'Eguchi', 'Tanabe', 'Kubo', 'Matsuda', 'Iwasaki',
                    'Sekiguchi', 'Mochizuki', 'Wada', 'Igarashi', 'Takemoto', 'Kuroda', 'Koyama', 'Noguchi', 'Tokuda', 'Kawamura'
                ]
            }
        },
        India: {
            male: {
                first: [
                    'Aarav', 'Vivaan', 'Aditya', 'Vihaan', 'Arjun', 'Reyansh', 'Muhammad', 'Ayaan', 'Krishna', 'Ishaan',
                    'Shaurya', 'Atharva', 'Advik', 'Pranav', 'Advaith', 'Aryan', 'Dhruv', 'Kabir', 'Ritvik', 'Aarush',
                    'Kayaan', 'Darsh', 'Veer', 'Samar', 'Shivansh', 'Jayesh', 'Ronith', 'Anay', 'Dev', 'Vihaan',
                    'Shivay', 'Viraj', 'Rudra', 'Divyansh', 'Aadesh', 'Samrath', 'Kiaan', 'Madhav', 'Kian', 'Rajveer',
                    'Parth', 'Arnav', 'Neel', 'Rayan', 'Shamik', 'Amay', 'Rishaan', 'Sachit', 'Hrithik', 'Shivam',
                    'Ameya', 'Vivek', 'Aayush', 'Anant', 'Vivan', 'Anish', 'Vikas', 'Abheer', 'Agastya', 'Chaitanya',
                    'Raghav', 'Radhav', 'Soumya', 'Siddharth', 'Sahil', 'Vishwas', 'Diya', 'Arush', 'Dhruvan', 'Ishan',
                    'Omkar', 'Akash', 'Rachit', 'Abhimanyu', 'Rohan', 'Ankit', 'Abhijeet', 'Jatin', 'Vinay', 'Yash',
                    'Sachin', 'Ajay', 'Sunil', 'Rahul', 'Amit', 'Vijay', 'Sanjay', 'Ashok', 'Vikram', 'Kishan',
                    'Nitin', 'Sushil', 'Mahesh', 'Rajnish', 'Arun', 'Rajat', 'Deepak', 'Gaurav', 'Karan', 'Himanshu'
                ],
                last: [
                    'Sharma', 'Patel', 'Kumar', 'Singh', 'Agarwal', 'Mehta', 'Joshi', 'Shah', 'Verma', 'Gupta',
                    'Mishra', 'Yadav', 'Pandey', 'Shukla', 'Thakur', 'Roy', 'Chatterjee', 'Banerjee', 'Das', 'Bose',
                    'Reddy', 'Patil', 'Kapoor', 'Chopra', 'Malhotra', 'Saxena', 'Trivedi', 'Srivastava', 'Bhatt', 'Murthy',
                    'Chauhan', 'Bhattacharya', 'Deshpande', 'Shetty', 'Nair', 'Menon', 'Pillai', 'Garg', 'Puri', 'Bajaj',
                    'Anand', 'Malik', 'Khan', 'Jain', 'Nayak', 'Goswami', 'Tiwari', 'Chawla', 'Mehra', 'Khanna',
                    'Mahajan', 'Wadhwa', 'Goel', 'Mani', 'Pandit', 'Kaul', 'Dhawan', 'Negi', 'Arora', 'Rangaswamy',
                    'Venkatesh', 'Rao', 'Babu', 'Naidu', 'Srinivasan', 'Rajan', 'Menon', 'Joseph', 'Thomas', 'Mathew',
                    'Kulkarni', 'Iyer', 'Acharya', 'Rathore', 'Sengupta', 'Chandra', 'Basu', 'Ghosh', 'Mukherjee', 'Ray',
                    'Hegde', 'Chakraborty', 'Rajput', 'Seth', 'Bhat', 'Dutta', 'Mistry', 'Khosla', 'Gowda', 'Borkar',
                    'Kulshreshtha', 'Mittal', 'Bajpai', 'Tripathi', 'Prajapati', 'Desai', 'Piramal', 'Bhatia', 'Gandhi', 'Ojha'
                ]
            },
            female: {
                first: [
                    'Aanya', 'Aadhya', 'Aaradhya', 'Ananya', 'Saanvi', 'Pari', 'Myra', 'Sara', 'Dia', 'Siya',
                    'Diya', 'Kiara', 'Avni', 'Eva', 'Anika', 'Riya', 'Aarohi', 'Anvi', 'Tara', 'Angel',
                    'Kyra', 'Mahika', 'Vanya', 'Aditi', 'Ahana', 'Aarna', 'Anushka', 'Ishika', 'Mishka', 'Trisha',
                    'Naisha', 'Nitara', 'Navya', 'Khushi', 'Suhaani', 'Shreeya', 'Shanaya', 'Ira', 'Isha', 'Krisha',
                    'Neha', 'Meera', 'Aahana', 'Ayesha', 'Zara', 'Kavya', 'Khushi', 'Prisha', 'Mehak', 'Rhea',
                    'Jhanvi', 'Mannat', 'Anaya', 'Nyra', 'Reeva', 'Shreya', 'Tanvi', 'Zoya', 'Maria', 'Radhika',
                    'Anaisha', 'Lavanya', 'Amaira', 'Alisha', 'Yazhini', 'Reet', 'Sia', 'Sana', 'Naina', 'Netra',
                    'Dhriti', 'Sneha', 'Suhana', 'Pihu', 'Manya', 'Mahi', 'Mehar', 'Jasleen', 'Saira', 'Alia',
                    'Preeti', 'Anjali', 'Priyanka', 'Sunita', 'Sonia', 'Kumari', 'Lakshmi', 'Durga', 'Pooja', 'Swati',
                    'Payal', 'Kiran', 'Arti', 'Manju', 'Kamala', 'Savita', 'Shruti', 'Jyoti', 'Lalita', 'Tejaswini'
                ],
                last: [
                    'Sharma', 'Patel', 'Kumar', 'Singh', 'Agarwal', 'Mehta', 'Joshi', 'Shah', 'Verma', 'Gupta',
                    'Mishra', 'Yadav', 'Pandey', 'Shukla', 'Thakur', 'Roy', 'Chatterjee', 'Banerjee', 'Das', 'Bose',
                    'Reddy', 'Patil', 'Kapoor', 'Chopra', 'Malhotra', 'Saxena', 'Trivedi', 'Srivastava', 'Bhatt', 'Murthy',
                    'Chauhan', 'Bhattacharya', 'Deshpande', 'Shetty', 'Nair', 'Menon', 'Pillai', 'Garg', 'Puri', 'Bajaj',
                    'Anand', 'Malik', 'Khan', 'Jain', 'Nayak', 'Goswami', 'Tiwari', 'Chawla', 'Mehra', 'Khanna',
                    'Mahajan', 'Wadhwa', 'Goel', 'Mani', 'Pandit', 'Kaul', 'Dhawan', 'Negi', 'Arora', 'Rangaswamy',
                    'Venkatesh', 'Rao', 'Babu', 'Naidu', 'Srinivasan', 'Rajan', 'Menon', 'Joseph', 'Thomas', 'Mathew',
                    'Kulkarni', 'Iyer', 'Acharya', 'Rathore', 'Sengupta', 'Chandra', 'Basu', 'Ghosh', 'Mukherjee', 'Ray',
                    'Hegde', 'Chakraborty', 'Rajput', 'Seth', 'Bhat', 'Dutta', 'Mistry', 'Khosla', 'Gowda', 'Borkar',
                    'Kulshreshtha', 'Mittal', 'Bajpai', 'Tripathi', 'Prajapati', 'Desai', 'Piramal', 'Bhatia', 'Gandhi', 'Ojha'
                ]
            }
        },
        Bangladesh: {
            male: {
                first: [
                    'Mohammad', 'Abdullah', 'Rahman', 'Ahmed', 'Ali', 'Siam', 'Rayhan', 'Ahnaf', 'Sakib', 'Sabbir',
                    'Adnan', 'Aryan', 'Abir', 'Tanvir', 'Fahim', 'Nasir', 'Farhan', 'Rafsan', 'Mahir', 'Asif',
                    'Raiyan', 'Antar', 'Arian', 'Hasan', 'Rakib', 'Nafis', 'Alvi', 'Rahat', 'Shanto', 'Shahriar',
                    'Faisal', 'Raiyaan', 'Rafid', 'Arif', 'Mahin', 'Tamim', 'Rayan', 'Samir', 'Mehedi', 'Wasif',
                    'Tahsin', 'Ismail', 'Sami', 'Tofayel', 'Ruhul', 'Imran', 'Shihab', 'Wahid', 'Mehrab', 'Ehan',
                    'Safwan', 'Monir', 'Zubair', 'Shafin', 'Jawad', 'Anas', 'Najmus', 'Ashfaq', 'Towhid', 'Niloy',
                    'Maruf', 'Yousuf', 'Riaz', 'Ashik', 'Muid', 'Zahin', 'Shafiq', 'Ferdous', 'Bashar', 'Sinan',
                    'Rifat', 'Rezwan', 'Karim', 'Zaman', 'Safin', 'Marzan', 'Minhaz', 'Junaid', 'Tanzid', 'Mushfiq',
                    'Sadman', 'Shaon', 'Taki', 'Nahid', 'Noman', 'Akash', 'Rehan', 'Sanjid', 'Shoumik', 'Sanjar',
                    'Sajid', 'Mohsin', 'Shahed', 'Tafhim', 'Ramim', 'Likhon', 'Tahmid', 'Murad', 'Mizan', 'Salman'
                ],
                last: [
                    'Islam', 'Khan', 'Ahmed', 'Hossain', 'Rahman', 'Ali', 'Sheikh', 'Uddin', 'Chowdhury', 'Miah',
                    'Sarkar', 'Molla', 'Chaudhuri', 'Siddique', 'Talukder', 'Rashid', 'Kazi', 'Mazumder', 'Majumdar', 'Aktar',
                    'Jahan', 'Zaman', 'Begum', 'Mahmud', 'Mia', 'Karim', 'Akter', 'Choudhury', 'Saha', 'Alam',
                    'Haque', 'Huq', 'Bhuiyan', 'Bhuiya', 'Das', 'Biswas', 'Ghosh', 'Roy', 'Datta', 'Nath',
                    'Dey', 'Sikder', 'Howlader', 'Siddiqui', 'Iqbal', 'Shahid', 'Khatun', 'Kabir', 'Rasheed', 'Matin',
                    'Malek', 'Aziz', 'Akhter', 'Sharif', 'Hasan', 'Haidar', 'Razzak', 'Reza', 'Shekh', 'Rana',
                    'Saleh', 'Bhuyian', 'Mojumder', 'Akbar', 'Anwar', 'Hye', 'Salehin', 'Hoque', 'Rahim', 'Mannan',
                    'Latif', 'Shamim', 'Rashed', 'Haidar', 'Habib', 'Sabuj', 'Rafi', 'Robbani', 'Wahab', 'Wahid',
                    'Mondol', 'Mondal', 'Mridha', 'Haider', 'Hayder', 'Nahar', 'Bari', 'Talukdar', 'Harun', 'Khondokar',
                    'Huda', 'Kamal', 'Monir', 'Firoz', 'Muktar', 'Munsi', 'Patwari', 'Momin', 'Kashem', 'Zahir'
                ]
            },
            female: {
                first: [
                    'Fatima', 'Mim', 'Riya', 'Sumaiya', 'Tabassum', 'Jannatul', 'Nusrat', 'Moriom', 'Sadia', 'Nusaiba',
                    'Ayesha', 'Raisa', 'Ishrat', 'Lamia', 'Israt', 'Anika', 'Jannat', 'Nabila', 'Tasnim', 'Mahima',
                    'Nishat', 'Rafa', 'Samia', 'Momena', 'Sumona', 'Afsana', 'Fariha', 'Habiba', 'Samira', 'Nawrin',
                    'Nazia', 'Muna', 'Mahiya', 'Shifa', 'Nafisa', 'Naima', 'Amatullah', 'Nusayba', 'Rumana', 'Sanjida',
                    'Afsara', 'Mahmuda', 'Maisha', 'Arina', 'Shamima', 'Farjana', 'Farhana', 'Tanha', 'Arisha', 'Tamanna',
                    'Sruti', 'Tasfia', 'Nazia', 'Fabiha', 'Khadija', 'Sabrina', 'Marzana', 'Tazrin', 'Faiza', 'Safa',
                    'Shanjida', 'Nasima', 'Labiba', 'Tahura', 'Romana', 'Safina', 'Humayra', 'Sharmin', 'Amina', 'Samina',
                    'Shabnam', 'Sharmila', 'Nargis', 'Shathi', 'Suhana', 'Shahida', 'Nahida', 'Bithi', 'Tanisha', 'Sultana',
                    'Rabeya', 'Trishna', 'Nishita', 'Prova', 'Tithi', 'Ritu', 'Mukta', 'Kakoli', 'Munmun', 'Shohana',
                    'Bristy', 'Safa', 'Tumpa', 'Mithila', 'Laboni', 'Lipi', 'Keya', 'Shova', 'Mahbuba', 'Shanta'
                ],
                last: [
                    'Islam', 'Khan', 'Ahmed', 'Hossain', 'Rahman', 'Ali', 'Sheikh', 'Uddin', 'Chowdhury', 'Miah',
                    'Sarkar', 'Molla', 'Chaudhuri', 'Siddique', 'Talukder', 'Rashid', 'Kazi', 'Mazumder', 'Majumdar', 'Aktar',
                    'Jahan', 'Zaman', 'Begum', 'Mahmud', 'Mia', 'Karim', 'Akter', 'Choudhury', 'Saha', 'Alam',
                    'Haque', 'Huq', 'Bhuiyan', 'Bhuiya', 'Das', 'Biswas', 'Ghosh', 'Roy', 'Datta', 'Nath',
                    'Dey', 'Sikder', 'Howlader', 'Siddiqui', 'Iqbal', 'Shahid', 'Khatun', 'Kabir', 'Rasheed', 'Matin',
                    'Malek', 'Aziz', 'Akhter', 'Sharif', 'Hasan', 'Haidar', 'Razzak', 'Reza', 'Shekh', 'Rana',
                    'Saleh', 'Bhuyian', 'Mojumder', 'Akbar', 'Anwar', 'Hye', 'Salehin', 'Hoque', 'Rahim', 'Mannan',
                    'Latif', 'Shamim', 'Rashed', 'Haidar', 'Habib', 'Sabuj', 'Rafi', 'Robbani', 'Wahab', 'Wahid',
                    'Mondol', 'Mondal', 'Mridha', 'Haider', 'Hayder', 'Nahar', 'Bari', 'Talukdar', 'Harun', 'Khondokar',
                    'Huda', 'Kamal', 'Monir', 'Firoz', 'Muktar', 'Munsi', 'Patwari', 'Momin', 'Kashem', 'Zahir'
                ]
            }
        }
    };
    
    // Phone number formats by country
    const phoneFormats = {
        USA: '+1 ###-###-####',
        UK: '+44 ## #### ####',
        Canada: '+1 ###-###-####',
        Australia: '+61 # #### ####',
        France: '+33 # ## ## ## ##',
        Germany: '+49 ### ####### ',
        Japan: '+81 ## #### ####',
        India: '+91 #####-#####',
        Bangladesh: '+880 1###-######'
    };
    
    // Vibrate if the device supports it
    function vibrateIfAvailable(duration) {
        if (navigator.vibrate) {
            navigator.vibrate(duration);
        }
    }
    
    // Generate random name based on country and gender
    function generateName(country, gender) {
        const countryData = nameData[country] || nameData.USA;
        const genderData = countryData[gender] || countryData.male;
        
        const firstName = genderData.first[Math.floor(Math.random() * genderData.first.length)];
        const lastName = genderData.last[Math.floor(Math.random() * genderData.last.length)];
        
        return `${firstName} ${lastName}`;
    }
    
    // Generate random phone number based on country format
    function generatePhoneNumber(country) {
        const format = phoneFormats[country] || phoneFormats.USA;
        return format.replace(/#/g, () => Math.floor(Math.random() * 10));
    }
    
    // Generate strong password
    function generatePassword() {
        const nameBase = fullNameEl.textContent.split(' ')[0] || 'User';
        const numbers = Math.floor(Math.random() * 90 + 10); // Random 2 digit number
        const symbols = ['@', '#', '$', '%', '&', '!'][Math.floor(Math.random() * 6)];
        
        return `${nameBase}${symbols}${numbers}`;
    }
    
    // Show generation animation
    function showGenerationAnimation() {
        infoCard.style.opacity = '0.5';
        
        setTimeout(() => {
            infoCard.style.opacity = '1';
            infoCard.classList.add('pulse-animation');
            
            setTimeout(() => {
                infoCard.classList.remove('pulse-animation');
            }, 500);
        }, 300);
    }
    
    // Add touch feedback for buttons
    function addTouchFeedback() {
        const buttons = document.querySelectorAll('button, .copy-btn');
        
        buttons.forEach(button => {
            button.addEventListener('touchstart', () => {
                button.classList.add('touch-active');
                vibrateIfAvailable(50); // Short vibration for feedback
            });
            
            button.addEventListener('touchend', () => {
                button.classList.remove('touch-active');
            });
        });
    }
    
    // Handle generate button click
    generateBtn.addEventListener('click', () => {
        const country = countrySelect.value;
        const gender = genderSelect.value;
        
        // Show animation
        showGenerationAnimation();
        
        // Provide tactile feedback
        vibrateIfAvailable(100);
        
        // Generate and display user info
        fullNameEl.textContent = generateName(country, gender);
        phoneNumberEl.textContent = generatePhoneNumber(country);
        passwordEl.textContent = generatePassword();
    });
    
    // Handle copy buttons
    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const textToCopy = document.getElementById(targetId).textContent;
            
            // Copy to clipboard
            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    // Provide tactile feedback
                    vibrateIfAvailable(50);
                    
                    // Visual feedback
                    button.classList.add('copy-success');
                    
                    // Change icon temporarily
                    const icon = button.querySelector('i');
                    const originalClass = icon.className;
                    icon.className = 'fas fa-check';
                    
                    setTimeout(() => {
                        button.classList.remove('copy-success');
                        icon.className = originalClass;
                    }, 1000);
                })
                .catch(err => {
                    console.error('Failed to copy text: ', err);
                    
                    // Error vibration pattern
                    vibrateIfAvailable([100, 50, 100]);
                    
                    // Visual error feedback
                    button.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
                    button.style.color = '#ff5252';
                    
                    setTimeout(() => {
                        button.style.backgroundColor = '';
                        button.style.color = '';
                    }, 1000);
                });
        });
    });
    
    // Initialize with random data and add mobile enhancements
    addTouchFeedback();
    generateBtn.click(); // Generate initial user data
}); 
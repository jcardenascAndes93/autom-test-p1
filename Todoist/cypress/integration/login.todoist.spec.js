context('Sign in and Sign up Tests', () => {

    it('Blank password', () => {
        // Gets to the login page and tries to login with a blank password
        cy.visit('https://todoist.com/')
        cy.wait(1000)
            // Search login button
        cy.get('a[href*="/users/showlogin"]').click();
        cy.wait(1500)
        cy.get('.input_email').type('habitica@uniandes.edu.co');
        cy.get('.submit_btn').click()
        cy.wait(1000);
        cy.contains('Blank password.').should('be.visible');

    });

    it('Invalid email', () => {
        // Gets to the login page and tries to login with an invalid email format
        cy.visit('https://todoist.com/')
        cy.wait(1000)
            // Search login button
        cy.get('a[href*="/users/showlogin"]').click();
        cy.wait(1500)
        cy.get('.input_email').type('algunCorreo');
        cy.get('input[type="password"]').type('Algunpassword2020');
        cy.get('.submit_btn').click();
        cy.wait(1000);
        cy.contains('Invalid email address.').should('be.visible');

    });

    it('Failed credentials login', () => {
        // Gets to the login page and tries to login with wrong credentials
        cy.visit('https://todoist.com/')
        cy.wait(1000)
            // Search login button
        cy.get('a[href*="/users/showlogin"]').click();
        cy.wait(1500)
        cy.get('.input_email').type('habitica@uniandes.edu.co');
        cy.get('input[type="password"]').type('Algunpassword2020');
        cy.get('.submit_btn').click();
        cy.wait(1000);
        cy.contains('Wrong email or password.').should('be.visible');

    });

    it('Successful login', () => {
        // Gets to the login page and makes a correct login
        cy.visit('https://todoist.com/')
        cy.wait(1000)
            // Search login button
        cy.get('a[href*="/users/showlogin"]').click();
        cy.wait(1500)
        cy.get('.input_email').type('j.cardenasc@uniandes.edu.co');
        cy.get('input[type="password"]').type('Miso2020*');
        cy.get('.submit_btn').click();
        cy.wait(4500);
        cy.contains('Today').should('be.visible');

    });

    it('Failed sign up with existing email', () => {
        // Gets to the signup page and makes an  incorrect signup with a repeated email
        cy.visit('https://todoist.com/')
        cy.wait(1000)
            // Search SignUp button
        cy.get('a[href*="/users/showregister"]').first().click();
        cy.wait(1500)
            // Type an existing associated email
        cy.get('.input_email').type('j.cardenasc@uniandes.edu.co');
        cy.get('#step_one_submit').click();
        cy.wait(500)
        cy.contains('Your email is already registered with us').should('be.visible');

    });

    it('Failed sign up with short password', () => {
        // Gets to the signup page and makes an  incorrect signup with a repeated email
        cy.visit('https://todoist.com/')
        cy.wait(1000)
            // Search SignUp button
        cy.get('a[href*="/users/showregister"]').first().click();
        cy.wait(1500)
            // Register with new email
        cy.get('.input_email').type('testing93@example.com');
        // Next to the second registration step
        cy.get('#step_one_submit').click();
        cy.wait(500)
        cy.get('.input_name').type('Victor Bonilla');
        cy.get('#pwd').type('pass12');
        cy.get('#step_two_submit').click();
        cy.contains('Password must be at least 8 characters long').should('be.visible');

    });

    it('Correct sign up', () => {
        // Gets to the signup page and makes an  incorrect signup with a repeated email
        cy.visit('https://todoist.com/')
        cy.wait(1000)
            // Search SignUp button
        cy.get('a[href*="/users/showregister"]').first().click();
        cy.wait(1500)
            // Register with new email
        cy.get('.input_email').type('testing93@example.com');
        // Next to the second registration step
        cy.get('#step_one_submit').click();
        cy.wait(500)
            // Completes submit
        cy.get('.input_name').type('Victor Bonilla');
        cy.get('#pwd').type('pass12345678');
        cy.get('#step_two_submit').click();
        cy.wait(3000);
        // Already signin
        cy.contains("Let's go").should('be.visible');

    });

});
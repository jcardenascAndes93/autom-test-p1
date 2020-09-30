context('Tasks CRUD test', () => {
    before(() => {
        cy.visit('https://todoist.com/');
        login();
    })

    function login() {
        // Gets to the login page and makes a correct login
        cy.visit('https://todoist.com/')
        cy.wait(1000)
            // Search login button
        cy.get('a[href*="/users/showlogin"]').click();
        cy.wait(1500)
        cy.get('.input_email').type('j.cardenasc@uniandes.edu.co');
        cy.get('input[type="password"]').type('Miso2020*');
        cy.get('.submit_btn').click();
    }

    it('Add a task', () => {
        // Search and then click in the plus button
        cy.wait(1500);
        // Search plus button
        cy.get('button[class="plus_add_button"]').first().click();
        cy.wait(500);
        // Add task
        cy.get('.richtextinput').type('Tarea importante');
        cy.get('button[type="submit"]').click();
        cy.contains('Tarea importante').should('be.visible');
        cy.get('button[class="cancel"]').click();
    });

    it('Cancel add a task', () => {
        // Search and then click in the plus button
        cy.wait(1500);
        // Search plus button
        cy.get('button[class="plus_add_button"]').first().click();
        cy.wait(500);
        // Add task
        cy.get('.richtextinput').type('Otra tarea importante');
        cy.get('button[class="cancel"]').click();
        cy.contains('Otra tarea importante').should('not.be.visible');
    });


    it('Mark tasks as done', () => {
        // Mark task as done
        cy.get('button[role="checkbox"]').eq(1).click();
        cy.contains('Undo').should('be.visible');
    });

    it('Undo task done', () => {
        // Mark task as done
        cy.get('button[role="checkbox"]').eq(1).click();
        // Undo done tasks
        cy.get('button').contains('Undo').click();
        // Checks tasks length
        cy.get('.task_content').should('have.length', 2);

    });

});
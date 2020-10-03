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
        cy.get('.task_actions .plus_add_button').click()
        cy.wait(500);
        // Add task
        cy.get('.richtextinput').type('Tarea importante');
        cy.get('button[type="submit"]').click();
        cy.contains('Tarea importante').should('be.visible');
    });

    it('Cancel add a task', () => {
        // Add task
        cy.get('.richtextinput').type('Otra tarea importante');
        cy.get('button[class="cancel"]').click();
        cy.contains('Otra tarea importante').should('not.be.visible');
    });


    it('Mark tasks as done', () => {
        // Mark task as done
        cy.get('button[role="checkbox"]').eq(0).click();
        cy.contains('Undo').should('be.visible');
    });

    it('Undo task done', () => {
        // Undo done tasks
        cy.get('button').contains('Undo').click();
        // Checks tasks length
        cy.contains('Tarea importante').should('be.visible');

    });
	
	it('Edit task click task description', () => {
		cy.wait(1500);
        cy.contains("Tarea importante").click({force:true});
		cy.get('.item_actions_more').click();
		cy.get('.icon_menu_item__content').eq(0).click();
        // Edit task
		cy.get('.richtextinput').type(' editada');
        cy.get('button[type="submit"]').click();
		cy.get('.item_detail_close').click();
		cy.contains('Tarea importante editada').should('be.visible');

    });
	
	it('Delete task ', () => {
		cy.wait(1500);
        cy.contains("Tarea importante editada").click({force:true});
		cy.get('.item_actions_more').click();
		// Delete task
		cy.get('.icon_menu_item__content').eq(4).click();
        
		//Confirm delete
        cy.get('button[type="submit"]').click();
		cy.contains('Tarea importante editada').should('not.be.visible');

    });

});
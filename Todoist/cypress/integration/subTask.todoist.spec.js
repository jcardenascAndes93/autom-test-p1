context('Section CRUD test', () => {
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
		
		//Add task
		// Search and then click in the plus button
        cy.wait(1500);
        // Search plus button
        cy.get('.task_actions .plus_add_button').click()
        cy.wait(500);
        // Add task
        cy.get('.richtextinput').type('Tarea con sub-tareas');
        cy.get('button[type="submit"]').click();
		cy.get('button[class="cancel"]').click();
    }

    it('Add a sub-taks', () => {
		cy.wait(1500);
        cy.get('.root_item_list .task_list_item').eq(0).click();
		cy.wait(500);
		// Add sub-task
		cy.get('.actions .plus_add_button').click();
		
        // Add name sub-task
		cy.get('.richtextinput').type('primera sub-task');
		// Save sub-task
        cy.get('button[type="submit"]').click();
		cy.get('.item_detail_close').click();
		cy.get('button[aria-label="expand"]').eq(0).click();
		cy.contains('primera sub-task').should('be.visible');
    });

	
	it('Edit sub-task click task description', () => {
		cy.wait(1500);
        cy.get('.task_list_item__body .task_list_item__content').eq(0).click();
		cy.wait(500);
		cy.get('.reactist_modal_box__body .task_list_item__content__content_wrapper').click();
		cy.get('.item_overview_content').click();
        // Edit sub-task
		cy.get('.richtextinput').type(' editada');
        cy.get('button[type="submit"]').click();
		cy.get('.item_detail_close').click();
		cy.contains('primera sub-task editada').should('be.visible');

    });
	
	it('Delete sub-task ', () => {
		cy.wait(1500);
        cy.get('.task_list_item__body .task_list_item__content').eq(0).click();
		cy.wait(500);
		cy.get('.reactist_modal_box__body .task_list_item__content__content_wrapper').click();
        cy.get('.item_actions_more').click();
		// Delete task
		cy.get('.icon_menu_item__content').eq(4).click();
		
		//Confirm delete
        cy.get('button[type="submit"]').click();
		cy.contains('primera sub-task editada').should('not.be.visible');

    });

});
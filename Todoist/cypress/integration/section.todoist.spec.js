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
		cy.wait(1500);
        // Search plus button
		cy.contains("Add Project").click({force:true});
        cy.wait(500);
        // Add project
        cy.get('input[name="name"]').type('Proyecto con secciones');
        cy.get('button[type="submit"]').click();
    }

    it('Add a section', () => {
        cy.wait(500);
		cy.get('button[class="gear_icon icon"]').click();
        // Click Add section
        cy.get('.icon_menu_item__icon').eq(2).click();
		// Add name section
		cy.get('input[class="name"]').type('Backlog');
		//Save section
		cy.get('button[type="submit"]').click();
        cy.contains('Backlog').should('be.visible');
    });
	
	it('Cancel add a section', () => {
        cy.wait(500);
		cy.get('button[class="gear_icon icon"]').click();
        // Click Add section
        cy.get('.icon_menu_item__icon').eq(2).click();
		// Add name section
		cy.get('input[class="name"]').type('To do');
		cy.get('button[class="cancel_link"]').click();
        cy.contains('To do').should('not.be.visible');
    });

	
	it('Edit section', () => {
		cy.wait(1500);
        cy.get('button[class="section_head_menu"]').click();		
        // Edit name section
		cy.get('.icon_menu_item__content').eq(0).click();
		// Edit name section
		cy.get('input[class="name"]').type(' editado');
        cy.get('button[type="submit"]').click();
		cy.contains('Backlog editado').should('be.visible');

    });
	
	it('Delete section', () => {
		cy.wait(1500);
        cy.get('button[class="section_head_menu"]').click();		
        // Delete section clik
		cy.get('.icon_menu_item__content').eq(4).click();
		// Confirm Delete
		cy.get('button[type="submit"]').click();
		cy.contains('Backlog editado').should('not.be.visible');

    });

});
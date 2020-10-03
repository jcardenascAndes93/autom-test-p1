context('Project CRUD test', () => {
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

    it('Add a project', () => {
        // Search and then click in the plus button
        cy.wait(1500);
        // Search plus button
        cy.contains("Add Project").click({force:true});
        cy.wait(500);
        // Add project
        cy.get('input[name="name"]').type('Proyecto importante');
        cy.get('button[type="submit"]').click();
        cy.contains('Proyecto importante').should('be.visible');
    });

    it('Cancel add a project', () => {
        cy.wait(500);
		cy.contains("Add Project").click({force:true});
        cy.wait(500);
        // Add name project
        cy.get('input[name="name"]').type('Otro proyecto importante');
		cy.get('.ist_button').eq(0).click()
        cy.contains('Otro proyecto importante').should('not.be.visible');
    });

	
	it('Edit project click description', () => {
		cy.wait(1500);
        cy.get('.view_header__content .editable').click();
        // Edit name project
		cy.get('.view_header__input').type(' editado');
        cy.get('button[type="submit"]').click();
		cy.contains('editado').should('be.visible');

    });
	
	it('Edit project more options', () => {
		cy.wait(1500);
		cy.get('.view_header__actions .gear_icon').click();
		cy.get('.icon_menu_item__content').eq(0).click();
        // Edit name project
		cy.get('input[name="name"]').type(' mas opciones');
        cy.get('button[type="submit"]').click();
		cy.contains('mas opciones').should('be.visible');

    });
	
	it('Delete project ', () => {
		cy.wait(1500);
		cy.get('.view_header__actions .gear_icon').click();
		// Delete project
		cy.get('.icon_menu_item__content').eq(12).click();        
		//Confirm delete
        cy.get('button[type="submit"]').click();
		cy.contains('Proyecto importante editado mas opciones').should('not.be.visible');

    });

});
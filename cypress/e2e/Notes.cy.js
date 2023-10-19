describe('Notes view', () => {
	beforeEach(() => {
		cy.visit('/');
		cy.findByText(/login/i).should('exist');
		cy.findByText(/login/i).click().type('teacher@studybuddy.com');
		cy.findByText(/password/i)
			.click()
			.type('1234');
		cy.findByText(/sign in/i).should('exist');
		cy.findByText(/sign in/i).click();
	});

	it('It allows to create a new note and deletes it', () => {
		cy.visit('/notes');
		cy.findByText(/title/i).click().type('Cypress Note');
		cy.findByText(/content/i)
			.click()
			.type('Cypres impsum...');
		cy.findByText(/add/i).click();
		cy.findAllByText('Cypress Note').should('exist');
		cy.findAllByText('Cypres impsum...').should('exist');

		cy.findAllByText('Cypress Note')
			.first()
			.parent()
			.findByLabelText(/delete/i)
			.click();
        cy.findByText('Cypress Note').should('not.exist')
	});
});

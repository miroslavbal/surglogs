describe('TC2', () => {
  it('Fill-in created log', () => {
    cy.Login()

//Select log
cy.contains('Test log').click()
cy.get('[data-cy=log-detail-add-entry-button]').click()

//Fill-in log  
//Parameter1
cy.get('[data-cy=log-entry-edit-form-field-physical-true-checkbox]').click()

//Parameter2
cy.get('[name="items[1].valueSingle"]').type('Text of parameter2')

//Parameter3
cy.get('[data-cy="log-entry-edit-form-field-multichoice-checkbox"]').value="Choice1"
cy.contains('Choice1').click()

//Parameter4
cy.get('[data-cy=log-entry-edit-form-field-medication-count-value]').type('5')
cy.get('[data-cy=log-entry-edit-form-field-medication-expiration-date]').click()
cy.get('[aria-label="Choose Wednesday, May 20th, 2020"]').click()

//Parameter5
cy.get('[name="items[4].valueSingle"]').click()
cy.get('[aria-label="Choose Wednesday, May 20th, 2020"]').click()

//Parameter6
cy.get('[data-cy=signatures-add-signature-button]').click()
cy.get('[data-cy=signatures-add-signature-pad]').click(100,170).click(100,180)
		.trigger('mousedown', { x: 80, y: 201 }, {force: true}).wait(300)
		.trigger('mousemove', { x: 101, y: 201 })
        .trigger('mouseup', { x: 101, y: 201 }, {force: true})
cy.get('[data-cy=signatures-add-signature-pad-confirm-button]').click()

//Parameter7
//used "npm install --save-dev cypress-file-upload", https://www.npmjs.com/package/cypress-file-upload
const yourFixturePath = 'test.jpg';
cy.get('[type="file"]').attachFile(yourFixturePath, { subjectType: 'drag-n-drop' });

//Parameter9
cy.get('[data-cy=log-entry-edit-form-field-supply-count]').type('5')
cy.get('[data-cy=log-entry-edit-form-field-supply-lot]').type('3')

//Parameter10
cy.get('[data-cy=log-entry-edit-form-field-checkox]').click()

//Parameter11
cy.get('[data-cy=log-entry-edit-form-field_singlechoice]').click()

//Click on "Save" button
cy.get('[data-cy=log-entry-edit-form-save-button]').click()

  })
})
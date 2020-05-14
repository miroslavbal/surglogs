describe('TC1', () => {
  it('Create new log in module Surgical logs', () => {
    cy.Login()

//Create new Daily log	  
	cy.get('[data-cy=log-list-parameters-add-button]')  
	  .click()
	  
	cy.get('[data-cy=log-create-name]') 
	  .type('Test log')
	   
	cy.get('[data-cy=log-create-frequency]').click()
	  .contains('Daily').click()

//Parameter1:	  
cy.get('[name="param.params[0].name"]').type('Parameter1')  
cy.get('.Select-placeholder').click()
cy.get('#react-select-3--option-0').contains('Physical').click()

cy.get('#react-select-4--value > .Select-placeholder').click()
cy.get('#react-select-4--option-0').contains('Yes/No').click()
cy.get('[data-cy=add-button]').click()

//Parameter2:
cy.get('[name="param.params[1].name"]').type('Parameter2')
cy.get('#react-select-5--value > .Select-placeholder').click()
cy.get('#react-select-5--option-1').contains('Text').click()
cy.get('[data-cy=add-button]').click()

//Parameter3
cy.get('[name="param.params[2].name"]').type('Parameter3')
cy.get('#react-select-6--value > .Select-placeholder').click()
cy.get('#react-select-6--option-2').contains('Multichoice').click()

cy.get('[name="param.params[2].choices[0].choice"]').type('Choice1')
cy.contains('+ Add another choice').click()
cy.get('[name="param.params[2].choices[1].choice"]').type('Choice2')
cy.get('[data-cy=add-button]').click()

//Parameter4
cy.get('[name="param.params[3].name"]').type('Parameter4')
cy.get('#react-select-7--value > .Select-placeholder').click()
cy.get('#react-select-7--option-3').contains('Medication').click()
cy.get('[name="param.params[3].lot"]').click({force: true})
cy.get('[name="param.params[3].range.min_range"]').type('3')
cy.get('[data-cy=add-button]').click()

//Parameter5
cy.get('[name="param.params[4].name"]').type('Parameter5')
cy.get('#react-select-8--value > .Select-placeholder').click()
cy.get('#react-select-8--option-4').contains('Date').click()
cy.get('[data-cy=add-button]').click()

//Parameter6
cy.get('[name="param.params[5].name"]').type('Parameter6')
cy.get('#react-select-9--value > .Select-placeholder').click()
cy.get('#react-select-9--option-5').contains('Signature').click()
cy.get('[data-cy=add-button]').click()

//Parameter7
cy.get('[name="param.params[6].name"]').type('Parameter7')
cy.get('#react-select-10--value > .Select-placeholder').click()
cy.get('#react-select-10--option-6').contains('File').click()
cy.get('[data-cy=add-button]').click()

//Parameter8
cy.get('[name="param.params[7].name"]').type('Parameter8')
cy.get('#react-select-11--value > .Select-placeholder').click()
cy.get('#react-select-11--option-7').contains('Label').click()
cy.get('[data-cy=add-button]').click()

//Parameter9
cy.get('[name="param.params[8].name"]').type('Parameter9')
cy.get('#react-select-12--value > .Select-placeholder').click()
cy.get('#react-select-12--option-8').contains('Supply').click()
cy.get('[name="param.params[8].lot"]').click({force: true})
cy.get('[name="param.params[8].range.min_range"]').type('20')
cy.get('[data-cy=add-button]').click()

//Parameter10
cy.get('[name="param.params[9].name"]').type('Parameter10')
cy.get('#react-select-13--value > .Select-placeholder').click()
cy.get('#react-select-13--option-9').contains('Checkbox').click()
cy.get('[name="param.params[9].choices[0].choice"]').type('Check it')
cy.get('[data-cy=add-button]').click()

//Parameter11
cy.get('[name="param.params[10].name"]').type('Parameter11')
cy.get('#react-select-14--value > .Select-placeholder').click()
cy.get('#react-select-14--option-10').contains('Single Select').click()
cy.get('[name="param.params[10].choices[0].choice"]').type('ABC')
cy.get('#react-select-15--value-item').click()
cy.get('#react-select-15--option-1').contains('Yes').click()

//save log
cy.get('[data-cy=log-create-save-button]').click()

  })
})
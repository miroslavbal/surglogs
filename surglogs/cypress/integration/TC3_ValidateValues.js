describe('TC3', () => {
  it('Chec filled values', () => {
    cy.Login()

cy.contains('Test log').click()

//CHECK THE LOG
cy.contains('Loading...', {timeout: 10000}).should('not.exist')
cy.wait(5000)
//Parameter1
cy.contains('Parameter1').parent().parent().parent().contains('Yes')
//Parameter2
cy.contains('Parameter2').parent().parent().parent().contains('Text of parameter2')
//Parameter3
cy.get('[data-for="tooltip-17"]').should('have.attr','data-tip','true')
//Parameter4
cy.contains('Parameter4').parent().parent().parent().contains('05/20/20')
cy.contains('Parameter4').parent().parent().parent().contains('5')
//Parameter5
cy.contains('Parameter5').parent().parent().parent().contains('05/20/20')
//Parameter6
cy.contains('Parameter6').parent().parent().parent().contains('SIGNATURE')
//Parameter7
cy.contains('Parameter7').parent().parent().parent().contains('test.jpg')
//Parameter8
cy.contains('Parameter8')
//Parameter9
cy.contains('Parameter9').parent().parent().parent().contains('5')
cy.contains('Parameter9').parent().parent().parent().contains('3')
//Parameter10
cy.contains('Parameter10').parent().parent().parent().contains('Check it')
//Parameter11
cy.contains('Parameter11')

  })
})
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import 'cypress-file-upload';

Cypress.Commands.add('Login',() => {
//Open Surglogs page
    cy.visit('www.surglogs.com')
    cy.contains('Log In').click()
    cy.url().should('include', '/login/signin')

//Login
    cy.get('[data-cy=login-form-email]')
      .type('miroslavbal@gmail.com')
      .should('have.value', 'miroslavbal@gmail.com')

    cy.get('[data-cy=login-form-password]')
      .type('miro1234')
      .should('have.value', 'miro1234')
	  
    cy.get('[data-cy=login-form-submit]')
      .contains('Sign in')
	  .click()

	cy.get('[data-cy-active="true"] > [data-cy=dashboard-module-name]',{timeout: 10000})
      .contains('Surgical Logs')
      .click()
})
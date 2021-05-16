import { Then, And, When } from "cypress-cucumber-preprocessor/steps";

When ('I click exchange button', () => {
    cy.get('.new-stepper-button').should('be.visible').click()
})

When ('I fill my recipient wallet', () => {
    cy.get('#recipientWallet').should('be.visible').type('0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B')
    cy.get('.new-stepper-field__icon-success').should('be.visible')
})

And ('I click Next button', () => {
    cy.get('.now-button').should('be.visible').click()
})

When ('I click Confirm button', () => {
    cy.get('.now-button__green').should('be.visible').click()
})

Then('I see {string}', (text) => {
    cy.get('.exchange-stepper--attention-title').should('to.contain', text)
})

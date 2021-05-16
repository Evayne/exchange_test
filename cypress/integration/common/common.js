import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given('I open {string} url', (url) => {
    cy.visit(url)
})

Then('I see {string} in title', (title) => {
    cy.title().should('include', title)
})

Then('I click {string} button', (name) => {
    cy.contains(name).click()
})
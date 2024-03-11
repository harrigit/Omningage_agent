Cypress.Commands.add("Logout",()=>{
    cy.get("#profile").click();
    cy.wait(1000);
    cy.get('.logout > .mat-focus-indicator').click();

    cy.wait(1000);
    cy.get('.mood > :nth-child(2) > .material-icons').click();
    cy.wait(5000);
})
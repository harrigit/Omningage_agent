Cypress.Commands.add("Search_fav",()=>{
    cy.get('.search-agent').click().type("Hamza");

})
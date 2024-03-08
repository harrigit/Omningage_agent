
describe("Login",()=>{
  
    it('Verify the Search Field And favorites Button on Dashboard ', () => {
        cy.LoginPage();
        cy.wait(5000);
        cy.Search_fav();
    });

})

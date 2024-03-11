describe("Logout",()=>{
  
    it('Verify that the Logout Functionality of Omningage ', () => {
        cy.LoginPage();
        cy.wait(5000);
        cy.Logout();
    });

})

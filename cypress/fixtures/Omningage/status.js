
describe("Login",()=>{
    it('user must go to Dashboard page', () => {
        cy.LoginPage();
        
    });
    it('User must change the status of the agent side to "Available" from any status that the agent currently has', () => {
        cy.LoginPage();
        cy.wait(3000);
        cy.Status();
    });
  
})

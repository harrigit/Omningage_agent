//const { describe } = require("mocha");

describe("Login",()=>{
    it('user must go to login page', () => {
        cy.LoginPage();
    });
})

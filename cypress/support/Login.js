Cypress.Commands.add("LoginPage", () => {
    // Set the viewport size to 1600x850
    cy.viewport(1450, 800);

    // Visit the website with the specified URL
    cy.visit("https://qa2.omningage.click/#/");

    // Click on the login button with a short delay to allow Cypress to set up interception
    cy.wait(1000); 
    cy.get('[type="submit"]').click();

    // Intercept any network request matching the URL pattern provided
    cy.intercept("https://omningage-qa.awsapps.com/auth/**").as("popupUrl");

    // Wait for the intercepted network request to the popup URL with a longer timeout
    cy.wait("@popupUrl", { timeout: 20000 }).then((interception) => {
        // Get the intercepted request object
        const request = interception.request;

        // Open the popup URL on the same website page
        cy.visit(request.url, { qs: request.query });

        // Wrap commands targeting the popup domain within cy.origin() to ensure they run in the context of the popup
        cy.origin("https://omningage-qa.awsapps.com", () => {
            // Type the username into the username field
            cy.get("#wdc_username").type("asif.rana");

            // Type the password into the password field
            cy.get("#wdc_password").type("A12dadf125");

            // Click on the login button inside the popup
            cy.get("#wdc_login_button").click();

            // Wait for the URL to include a specific substring indicating successful login
            cy.url().should("include", "omningage-qa.my.connect.aws");

           
            cy.wait(20000);

            // After login, return back to the original website
            cy.visit("https://qa2.omningage.click/#/");

            
            cy.wait(2000);
        });
    });

    // Click again on the login button to ensure the popup is not triggered again
    cy.get('[type="submit"]').click();

    // Wait for the redirection to the QA website
    cy.url().should("include", "qa2.omningage.click");
    cy.wait(20000);
});
// Cypress.Commands.add("LoginPage", () => {
//     // Set the viewport size to 1600x850
//     cy.viewport(1450, 800);

//     // Visit the website with the specified URL
//     cy.visit("https://qa2.omningage.click/#/");

//     // Click on the login button with a short delay to allow Cypress to set up interception
//     cy.wait(1000); 
//     cy.get('[type="submit"]').click();

//     // Intercept any network request matching the URL pattern provided
//     cy.intercept("https://omningage-qa.awsapps.com/auth/**").as("popupUrl");

//     // Wait for the intercepted network request to the popup URL with a longer timeout
//     cy.wait("@popupUrl", { timeout: 15000 }).then((interception) => {
//         // Get the intercepted request object
//         const request = interception.request;

//         // Open the popup URL on the same website page
//         cy.visit(request.url, { qs: request.query });

//         // Wrap commands targeting the popup domain within cy.origin() to ensure they run in the context of the popup
//         cy.origin("https://omningage-qa.awsapps.com", () => {
//             // Type the username into the username field
//             cy.get("#wdc_username").type("asif.rana");

//             // Type the password into the password field
//             cy.get("#wdc_password").type("A12dadf125");

//             // Click on the login button inside the popup
//             cy.get("#wdc_login_button").click();

//             // Wait for the URL to include a specific substring indicating successful login
//             cy.url().should("include", "omningage-qa.my.connect.aws");
//         });
//     });

//     // After login, return back to the original website
//     cy.visit("https://qa2.omningage.click/#/");

//     // Click again on the login button to ensure the popup is not triggered again
//     cy.get('[type="submit"]').click();

//     // Wait for the redirection to the QA website
//     cy.url().should("include", "qa2.omningage.click");
// });

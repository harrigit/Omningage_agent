Cypress.Commands.add("Status", () => {
    // Wait for the status element to be visible
    cy.get('.stateValue', { timeout: 10000 }).should('be.visible').then(($statusElement) => {
        const statusText = $statusElement.text().trim();
        cy.log('Current status:', statusText);
        cy.log(typeof(statusText));

        // Depending on the status, perform different actions
        if (statusText === "Not Ready") {
            // Change status to "Available"
            cy.get("#status").click();
            cy.get(':nth-child(2) > .mat-focus-indicator').click().wait(2000);
        } else if (statusText === 'Available') {
            // Change status to "Not ready"
            cy.get("#status").click();
            cy.get(':nth-child(3) > .mat-focus-indicator').click().wait(2000);
            cy.get("#status").click();
            cy.get(':nth-child(2) > .mat-focus-indicator').click().wait(2000);
        } else if (statusText === 'Social State' || statusText === 'NR.  Meeting' ||
                   statusText === 'NR. Calling' || statusText === 'Not-Ready lunch break for QA' ||
                   statusText === 'NR. Short Break' || statusText === 'NR. Tea Break' ||
                   statusText === 'Busy' || statusText === 'CONNECTING') {
            // Handle various statuses with similar actions
            cy.get("#status").click();
            cy.get(':nth-child(3) > .mat-focus-indicator').click().wait(2000);
            cy.get("#status").click();
            cy.get(':nth-child(2) > .mat-focus-indicator').click().wait(2000);
        } else {
            // Unexpected status
            cy.log('Unexpected status:', statusText);
        }
    });
});

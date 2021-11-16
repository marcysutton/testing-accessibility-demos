describe("Client-side routing", () => {
    beforeEach(() => {
        cy.visit('http://0.0.0.0:1234/workshop2-automated-testing/')

        cy.get("#header")
    })
    xit('should have title changes', () => {
        // This test requires changes with React Helmet
        cy.title().should('eq', 'Camp Spots')

        cy.visit('http://0.0.0.0:1234/workshop2-automated-testing/about')

        // test for title change
        cy.title().should('eq', 'About Camp Spots')
    })
    xit('should move focus on a user-initiated page change', () => {
        // this test will require more work with routing

        // open meganav
        cy.get('[data-testid="megamenu-section1"]').focus().click()

        // tab into nav
        cy.realPress('Tab')

        // click first nav item for /listings page
        cy.focused().click()
        
        cy.focused().then(($el) => {
            console.log($el)
        })
    })
})
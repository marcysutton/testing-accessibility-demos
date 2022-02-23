describe('HomePage', () => {
    beforeEach(() => {
        cy.visit('http://localhost:1234/workshop2-automated-testing/')
        
        cy.injectAxe()
    })
    xit('should have no accessibility violations on load', () => {
        cy.checkA11y()
    })
    it('should have a Header', () => {
        cy.get('#header').contains('CampSpots')
    })
})
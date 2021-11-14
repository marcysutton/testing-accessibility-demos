import React from "react"

describe('HomePage', () => {
    beforeEach(() => {
        cy.visit('http://0.0.0.0:1234/workshop2-automated-testing/')
    })
    it('should have a Header', () => {
        cy.get('#header').contains('CampSpots')
    })
})
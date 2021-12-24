import * as React from 'react'
import { mount } from '@cypress/react'

import MegaNav from 'workshop2-components/meganav'

describe('MegaNav', () => {
    beforeEach(() => {
        mount(<MegaNav />)

        cy.injectAxe()
    })

    it('should operate with the keyboard via toggle buttons', () => {
        cy.get('button[data-testid="megamenu-section1"]').focus().click()

        cy.focused().should('have.attr', 'aria-expanded', 'true')
    })
    it('submenus should not be reachable when closed', () => {
        cy.get('button[data-testid="megamenu-section1"]').focus().realPress('Tab')

        cy.focused().should('not.have.attr', '[data-testid="link-0"]')
        cy.focused().then(($el) => {
            expect($el).to.have.attr('data-testid', 'megamenu-section2')
        })

    })
    it('should reach open submenu items with the keyboard', () => {
        cy.get('button[data-testid="megamenu-section2"]').focus().click()

        cy.focused().realPress('Tab')

        cy.focused().then(($el) => {
            expect($el).to.have.attr('data-testid', 'link-0')
        })
    })

    it('should have no accessibility issues when open', () => {
        cy.get('button[data-testid="megamenu-section1"]').click()

        cy.checkA11y(null, {
            runOnly: {
                type: 'rule',
                values: ['color-contrast']
            }
        })
    })
})
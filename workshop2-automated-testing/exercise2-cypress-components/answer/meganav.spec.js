import * as React from 'react'
import { mount } from '@cypress/react'
import MegaNav from 'components/meganav/index'

describe('MegaNav', () => {
  beforeEach(() => {
    mount(<MegaNav />)
  })

  it('should operate with the keyboard via toggle buttons', () => {
    cy.get('button[data-testid="megamenu-section1"]').focus().click()

    cy.focused().should('have.attr', 'aria-expanded', 'true')

    cy.focused().type('{esc}').should('have.attr', 'aria-expanded', 'false')
  })

  it('submenus should not be reachable when closed', () => {
    cy.get('button[data-testid="megamenu-section1"]').focus().realPress('Tab')

    cy.focused().should('not.have.attr', '[data-testid="link-0"]')
    cy.focused().then(($el) => {
      expect($el).to.have.attr('data-testid', 'megamenu-section2')
    })
  })

  it('should operate submenus with the keyboard', () => {
    cy.get('button[data-testid="megamenu-section2"]').focus().click()

    cy.focused().realPress('Tab')

    cy.focused().then(($el) => {
      expect($el).to.have.attr('data-testid', 'link-0')
    })
  })
})

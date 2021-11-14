import * as React from 'react'
import { mount } from '@cypress/react'
import SubNavButton from 'components/meganav/subnav-button'

it('SubNavButton', () => {
  mount(<SubNavButton buttonName="Hamburgers" onClick={(event) => { console.log('a thing')}} />)
  cy.get('button').contains('Hamburgers').click()
})

/**
 * @jest-environment jsdom
 */
import React from 'react'
import {render, screen, getByText} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import SubNavButton  from '../subnav-button'

describe('SubNavButton', () => {
    it('labels the dropdown button', () => {
        const textFixture = "Hamburgers"
        const { getByText } = render(<SubNavButton buttonName={textFixture} onClick={()=>{console.log('do stuff')}} />)

        const buttonText = getByText(textFixture)

        expect(buttonText).toBeInTheDocument()
    })
})
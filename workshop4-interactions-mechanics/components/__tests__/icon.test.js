/**
 * @jest-environment jsdom
 */

 import React from 'react'
 import { render, getByRole, getByLabelText } from '@testing-library/react'
 import '@testing-library/jest-dom'
 import userEvent from '@testing-library/user-event'
 
 import Icon from "../../components/icon"
 
 describe('Icon', () =>{
     it('labels the icon', () => {
        const nameFixture = "dock"
        const { getByLabelText } = render(<Icon name={nameFixture} />)

        const iconText = getByLabelText(nameFixture)

        expect(iconText).toBeInTheDocument()
     })
     it('has an image role', () => {
        const {getByRole} = render(<Icon name="wifi" />)

        const icon = getByRole('img')

     })
})
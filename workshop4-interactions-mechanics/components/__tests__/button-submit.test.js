/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen, fireEvent, getByText, getByLabelText } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import ButtonSubmit from "../../components/button-submit"

describe('ButtonSubmit', () =>{
    it('labels the button', () => {
        const textFixture = "Send it!"
        const { getByLabelText } = render(<ButtonSubmit buttonName={textFixture} />)

        const buttonText = getByLabelText(textFixture)

        expect(buttonText).toBeInTheDocument()
    })
    it('can be reached with the keyboard', () => {
        render(<ButtonSubmit buttonName="Chuck it" />)
        const button = screen.getByTestId('btn-submit')

        userEvent.tab()
        expect(button).toHaveFocus()
    })
    it('can be operated with the keyboard and assistive tech', () => {
        let clicked = false
        render(<ButtonSubmit buttonName="Fling it" onClick={()=> { clicked = true }} />)

        const button = screen.getByRole('button')

        button.focus()

        userEvent.keyboard('{enter}')

        expect(clicked).toBe(true)
    })
})

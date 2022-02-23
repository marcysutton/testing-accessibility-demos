import React, { useState, useRef } from "react"
import BodyClassName from "react-body-classname"
import {Helmet} from "react-helmet"
import HeaderPortal from "workshop4-components/header-portal"

import "workshop4-components/styles/page-submit-listing.scss"

const SubmitListingPage = () => {
    const inputRefs = useRef([])
    let [isFormDirty, setIsFormDirty] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [formState, setFormState] = useState({
        'sitename': '',
        'location': '',
        'fee': 0,
        'legalToCamp': true,
        'submittername': '',
        'email': '',
        'notes': ''
    })

    const submitFunc = (event) => {
        event.preventDefault()

        let firstEmptyElementIndex = null
        const formElements = Array.from(event.target.elements)
        formElements.map((element, index) => {
            switch (element.type) {
                // ignore the checkbox and submit button
                case 'submit':
                    return
                break

                default:
                    // set form state for aria-invalid
                    setIsFormDirty(true)

                    if (element.value.trim().length === 0) {
                        // focus on first empty input when submitted
                        if (firstEmptyElementIndex === null) {
                            firstEmptyElementIndex = index
                            inputRefs.current[index].focus()
                        }
                        setErrorMessage('Required fields cannot be empty.')
                    }
                break
            }
        })
    }
    const handleChange = (event) => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const id = target.id

        setIsFormDirty(false)
        setFormState(prevState => {
            return {...prevState, ...{
                [id]: value
            }};
        })
    }

    return (
        <BodyClassName className="header-overlap page-submit-listing">
            <>
                <HeaderPortal>
                    <h1 className="visually-hidden">CampSpots</h1>
                </HeaderPortal>
                <section aria-labelledby="heading-about-1">
                    <header className="page-header">
                        <div className="page-header-content layout">
                            <h2 className="primary-heading h1-style" id="heading-about-1">Submit Your Spot</h2>
                        </div>
                    </header>
                    <article className="form-wrap">
                        <div className="layout">
                            <h3>Got a camping spot our community would enjoy? Tell us about it!</h3>
                            <form
                                action=""
                                aria-describedby="key"
                                className={isFormDirty ? `dirty` : ``}
                                onSubmit={submitFunc}
                            >
                                <p className="error" role="alert" aria-relevant="all">
                                    {isFormDirty ? errorMessage : '' }
                                </p>
                                <div className="two-parts-50-50">
                                    <div className="form-field">
                                        <label htmlFor="submittername">Your name <span className="asterisk" aria-label="required">*</span></label>
                                        <input
                                            aria-invalid={
                                                isFormDirty && formState.submittername.length === 0 ? 'true' : null
                                            }
                                            id="submittername"
                                            onChange={handleChange}
                                            ref={inputRef => {inputRefs.current.push(inputRef)}}
                                            type="text"
                                        />
                                    </div>
                                    <div className="form-field">
                                        <label htmlFor="email">Your email address <span className="asterisk" aria-label="required">*</span></label>
                                        <input
                                            aria-invalid={
                                                isFormDirty && formState.email.length === 0 ? 'true' : null
                                            }
                                            id="email"
                                            onChange={handleChange}
                                            pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                                            ref={inputRef => {inputRefs.current.push(inputRef)}}
                                            type="email"
                                        />
                                    </div>
                                </div>
                                <div className="two-parts-50-50">
                                    <div className="form-field">
                                        <label htmlFor="sitename">Site Name <span className="asterisk" aria-label="required">*</span></label>
                                        <input
                                            aria-invalid={
                                                isFormDirty && formState.sitename.length === 0 ? 'true' : null
                                            }
                                            id="sitename"
                                            onChange={handleChange}
                                            ref={inputRef => {inputRefs.current.push(inputRef)}}
                                            type="text"
                                        />
                                    </div>
                                    <div className="form-field">
                                        <label htmlFor="location">Location <span className="asterisk" aria-label="required">*</span></label>
                                        <input
                                            aria-invalid={
                                                isFormDirty && formState.location.length === 0 ? 'true' : null
                                            }
                                            id="location"
                                            onChange={handleChange}
                                            ref={inputRef => {inputRefs.current.push(inputRef)}}
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div className="two-parts-50-50">
                                    <div className="form-field">
                                        <label htmlFor="fee">Nightly fee</label>
                                        <input
                                            id="fee"
                                            onChange={handleChange}
                                            placeholder="$"
                                            type="number"
                                        />
                                    </div>
                                    <div className="form-field">
                                        <label htmlFor="legalToCamp">
                                            Can the public legally camp here? <span className="asterisk" aria-label="required">*</span>
                                        </label>
                                        <input
                                            checked
                                            id="legalToCamp"
                                            name="legalToCamp"
                                            onChange={handleChange}
                                            type="checkbox"
                                            value="Owned" 
                                        />
                                    </div>
                                </div>
                                <div className="form-field">
                                    <label htmlFor="notes">Notes</label>
                                    <textarea onChange={handleChange} id="notes"></textarea>
                                </div>
                                <p id="key" className="asterisk">* Fields are required.</p>
                                <div className="form-submit">
                                    <button className="btn-submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </article>
                </section>
            </>
        </BodyClassName>
    )
}

export default SubmitListingPage
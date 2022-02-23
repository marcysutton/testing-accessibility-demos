import React, {useRef, useState, useEffect} from "react"

import HeaderPortal from "workshop4-components/header-portal"
import "./component-sandbox.scss"

const DemoSandbox = () => {
    let [currentCSSClass, setCurrentCSSClass] = useState(null)
    let [dialogActive, setDialogActive] = useState(false)
    const cssTargetBtnRef = useRef(null)
    const modalLaunchBtnRef = useRef(null)
    const dialogHeadingRef = useRef(null)
    const confirmDialogRef = useRef(null)

    const handleChange = (event) => {
        setCurrentCSSClass(event.target.id)
    }
    const launchModal = () => {
        setDialogActive(true)
    }
    const hideModal = () => {
        setDialogActive(false)
    }
    const handleKey = (event) => {
        if (event.key === 'Escape') {
            setDialogActive(false)
        }
    }
    useEffect(()=> {
        if (dialogActive) {
            // Note: inert requires a polyfill to work in non-Chrome browsers
            document.getElementById('app-root').setAttribute('inert', 'inert')
            dialogHeadingRef.current.focus()
        } else {
            document.getElementById('app-root').removeAttribute('inert')
            modalLaunchBtnRef.current.focus()
        }
    }, [dialogActive])
    return (
        <>
            <div className="layout component-sandbox">
                <h1>Component Sandbox</h1>

                <section aria-labelledby="header1">
                    <h2 className="h3-style" id="header1">CSS Visibility Techniques</h2>
                    <button className={currentCSSClass} id="target-button" ref={cssTargetBtnRef}>
                        Reserve
                    </button>
                    <fieldset>
                        <legend>Button class controls</legend>
                        <label>
                            Visually-hidden
                            <input onChange={handleChange} type="radio" name="radios" id="visuallyHidden" />
                        </label>
                        <label>
                            Opacity
                            <input onChange={handleChange} type="radio" name="radios" id="opacityNone" />
                        </label>
                        <label>
                            Display
                            <input onChange={handleChange} type="radio" name="radios" id="displayNone" />
                        </label>
                        <label>
                            Visibility
                            <input onChange={handleChange} type="radio" name="radios" id="visibilityHidden" />
                        </label>
                        <label>
                            None
                            <input onChange={handleChange} type="radio" name="radios" id="none" />
                        </label>
                    </fieldset>
                </section>

                <section>
                    <h2 className="h3-style" id="header2">Modal Dialog</h2>
                    <button onClick={launchModal} ref={modalLaunchBtnRef}>Launch modal</button>
                </section>
            </div>

            <HeaderPortal>
                <dialog
                    aria-labelledby="dialogHeading"
                    aria-modal={dialogActive ? 'true' : 'false'}
                    open={dialogActive ? 'open' : null}
                    onKeyUp={handleKey}
                    ref={confirmDialogRef}
                >
                    <h1 id="dialogHeading" ref={dialogHeadingRef} tabIndex="-1">Confirm selection</h1>
                    <p>You have selected these dates:</p>
                    <ul>
                        <li>2022-04-17</li>
                        <li>2022-04-18</li>
                    </ul>
                    <button onClick={hideModal}>Cool</button>
                </dialog>
            </HeaderPortal>
        </>
    )
}

export default DemoSandbox
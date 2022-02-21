import React, { useState } from "react"
import BodyClassName from "react-body-classname"
import {Helmet} from "react-helmet"
import HeadingPortal from "workshop4-components/heading-portal"

import "workshop4-components/styles/page-submit-listing.scss"

const SubmitListingPage = () => {
    const [errorMessage, setErrorMessage] = useState('')

    return (
        <BodyClassName className="header-overlap page-submit-listing">
            <>
                <HeadingPortal>
                    <h1 className="visually-hidden">CampSpots</h1>
                </HeadingPortal>  
                <section aria-labelledby="heading-about-1">
                    <header className="page-header">
                        <div className="page-header-content layout">
                            <h2 className="primary-heading h1-style" id="heading-about-1">Submit Your Spot</h2>
                        </div>
                    </header>
                    <article className="form-wrap">
                        <div className="layout">
                            <h3>Got a camping spot our community would enjoy? Tell us about it!</h3>
                            <form className="form" action="">
                                <p id="errors" role="alert" aria-atomic="true">{errorMessage}</p>
                                <div className="two-parts-50-50">
                                    <div className="form-field">
                                        <label htmlFor="sitename">Site Name (required)</label>
                                        <input type="text" id="sitename" required />
                                    </div>
                                    <div className="form-field">
                                        <label htmlFor="location">Location (required)</label>
                                        <input type="text" id="location" required />
                                    </div>
                                </div>
                                <div className="two-parts-50-50">
                                    <div className="form-field">
                                        <label htmlFor="fee">Nightly fee</label>
                                        <input type="number" id="fee" placeholder="$" />
                                    </div>
                                    <div className="form-field">
                                        <label htmlFor="ownership">
                                            Can the public legally camp here?
                                        </label>
                                        <input type="checkbox" id="ownership" name="ownership" value="Owned" />
                                    </div>
                                </div>
                                <div className="form-field">
                                    <label htmlFor="notes">Notes</label>
                                    <textarea id="notes"></textarea>
                                </div>
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
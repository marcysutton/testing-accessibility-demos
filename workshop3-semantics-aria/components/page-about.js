import React from "react"
import BodyClassName from "react-body-classname"
import {Helmet} from "react-helmet"

import "./styles/page-about.scss"
import imgAbout from "images/about-image.jpg"

const AboutPage = () => {
    return (
        <BodyClassName className="page-about">
            <>
                <section className="intro layout two-parts-50-50" aria-labelledby="heading-about-1">
                    <div className="content-block">
                        <h1 id="heading-about-1">About CampSpots</h1>
                        <p>We know you need a break. Get out of town, or stay and play. Taking rest and time away from the daily grind of life is essential for maintaining balance and positive well-being.</p>
                        <p>At CampSpots, we can help connect you to your next adventure. Create memories you’ll remember fondly well into the future.</p> 
                        <p>By researching places, accomodations, and activities that match your lifestyle, you can have the time of your life.</p>
                    </div>
                    <img src={imgAbout} alt="A woman working with her laptop and phone at a beach-front bar" />
                </section>
                <section className="form-wrap" aria-labelledby="header-about-2">
                    <div className="layout two-parts-60-40">
                        <div>
                            <h2 id="header-about-2">Contact</h2>
                            <form className="form">
                                <div className="form-field">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" placeholder="Type your message here..."></textarea>
                                </div>
                                <div className="form-submit">
                                    <button className="btn-send">Send<span className="icon-arrow"></span></button>
                                </div>
                            </form>
                        </div>
                        <div>
                            <div className="content-block">
                                <h3>Email</h3>
                                <address className="contact"><span className="icon-at">@</span> <a href="#">team@campspots.com</a></address>
                                <h3>Address</h3>
                                <address className="contact"><span className="icon-house"></span> 6006 Mountain Drive<br />Acme, WA</address>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </BodyClassName>
    )
}

export default AboutPage
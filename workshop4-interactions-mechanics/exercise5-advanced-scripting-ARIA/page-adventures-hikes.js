import React, { useState } from "react"
import BodyClassName from "react-body-classname"
import {Helmet} from "react-helmet"

import HeaderPortal from "workshop4-components/header-portal"
import Slideshow from "./slideshow"

import "workshop4-components/styles/page-adventure-ideas.scss"
import * as imageURLs from "../../images/adventure-ideas/hikes/*.{png,jpg}"

const HikesPage = () => {
    const images = [{
        "src": "img1.jpg",
        "alt": "",
        "caption": "Late afternoon sun over Skyline Divide"
    },{
        "src": "img2.jpg",
        "alt": "",
        "caption": "Sunset from Olympic National Park"
    },{
        "src": "img3.jpg",
        "alt": "",
        "caption": "Wildflowers on Washington Highway 20"
    },{
        "src": "img4.jpg",
        "alt": "",
        "caption": "Hiking the North Cascades with a slice of berry pie"
    }]
    return (
        <BodyClassName className="header-overlap page-adventure-ideas">
            <>
                <HeaderPortal>
                    <h1 className="visually-hidden">CampSpots</h1>
                </HeaderPortal>
                <section aria-labelledby="heading-about-1">
                    <header className="page-header">
                        <div className="page-header-content layout">
                            <h2 className="primary-heading h1-style" id="heading-about-1">Adventure Ideas: Hikes</h2>
                        </div>
                    </header>
                    <article className="layout">
                        <div className="inspiration-slideshow">
                            <h3>Inspiration Gallery</h3>
                            <Slideshow images={images} imageURLs={imageURLs} />
                        </div>
                    </article>
                </section>
            </>
        </BodyClassName>
    )
}

export default HikesPage
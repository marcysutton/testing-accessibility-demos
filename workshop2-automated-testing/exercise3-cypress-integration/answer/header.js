import React from "react"
import "./styles/header.scss"

import CampSpotsLogo from "images/icons/camp-spots-logo.svg"
import MegaNav from "./meganav/"

const Header = () => {
    return (
        <header id="header">
            <div id="header-nav">
                <div id="header-logo">
                    <h1>
                        <a href="/workshop2-automated-testing/" className="header-main-item" data-testid="logo-link">
                            <span className="logo-img">
                                <img src={CampSpotsLogo} alt="" />
                            </span>
                            <span className="logo-text">CampSpots</span>
                        </a>
                    </h1>
                </div>
                <MegaNav />
                <div id="header-login">
                    <a href="#">Login</a>
                </div>
            </div>
        </header>
    )
}

export default Header
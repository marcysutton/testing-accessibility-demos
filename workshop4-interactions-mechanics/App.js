import React from "react"
import { Router } from "@reach/router"
import "./variables.scss"
import "./styles.scss"
import Header from "workshop4-components/header"
import HomePage from "workshop4-components/page-home"
import AboutPage from "workshop4-components/page-about"
import ListingsPage from "workshop4-components/page-listings"
import Listing from "workshop4-components/page-listing-detail"
import KeyboardExercise from "./exercise2-focus-management-js/page-listing-detail"
import ScreenReaderExercise from "./exercise3-screen-reader-overlap/page-listing-detail"
import SkipLinks from "workshop4-components/skip-links"

import imgFooterLogo from "/images/icons/footer-logo.svg"

export function App() {
	return <>
		<Header />
		<main id="main">
			<Router>
				<HomePage path="/workshop4-interactions-mechanics/" />
				<AboutPage path="/workshop4-interactions-mechanics/about" />
				<ListingsPage path="/workshop4-interactions-mechanics/listings" />
				<Listing path="/workshop4-interactions-mechanics/listing/:id" />
				<KeyboardExercise path="/workshop4-interactions-mechanics/exercise2/:id" />
				<ScreenReaderExercise path="/workshop4-interactions-mechanics/exercise3/:id" />
			</Router>
		</main>
		<footer id="footer">
			<SkipLinks variant="footer">
                <li><a href="#header">Skip to Top</a></li>
            </SkipLinks>
			<div className="layout">
				<div id="footer-logo">
					<img src={imgFooterLogo} alt="CampSpots" />
				</div>
			</div>
		</footer>
	</>
}

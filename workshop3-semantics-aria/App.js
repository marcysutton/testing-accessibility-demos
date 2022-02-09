import React from "react"
import { Router } from "@reach/router"
import "./variables.scss"
import "./styles.scss"
import Header from "workshop3-components/header"
import HomePage from "workshop3-components/page-home"
import AboutPage from "workshop3-components/page-about"
import ListingsPage from "workshop3-components/page-listings"
import Listing from "workshop3-components/page-listing"

import imgFooterLogo from "/images/icons/footer-logo.svg"

export function App() {
	return <>
		<Header />
		<main id="main">
			<Router>
				<HomePage path="/workshop3-semantics-aria/" />
				<AboutPage path="/workshop3-semantics-aria/about" />
				<ListingsPage path="/workshop3-semantics-aria/listings" />
				<Listing path="/workshop3-semantics-aria/listing/:id" />
			</Router>
		</main>
		<footer id="footer">
			<div className="layout">
				<div id="footer-logo">
					<img src={imgFooterLogo} alt="CampSpots" />
				</div>
			</div>
		</footer>
	</>
}

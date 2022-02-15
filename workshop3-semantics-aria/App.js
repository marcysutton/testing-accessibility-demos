import React from "react"
import { Router } from "@reach/router"
import "./variables.scss"
import "./styles.scss"
import Header from "workshop3-components/header"
import HomePage from "workshop3-components/page-home"
import AboutPage from "workshop3-components/page-about"
import ListingsPage from "workshop3-components/page-listings"
import Listing from "workshop3-components/page-listing-detail"
import SemanticsExercise from "./exercise1-headings-landmarks/page-listing-detail"
import ARIAExercise from "./exercise2-what-is-aria/page-listing-detail"
import A11yNamingExercise from "./exercise3-accessible-names/page-listing-detail"
import A11yNamingExerciseListings from "./exercise3-accessible-names/page-listings"
import ProgrammaticA11yExercise from "./exercise4-programmatic-a11y-info/page-listing-detail"

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
				<SemanticsExercise path="/workshop3-semantics-aria/exercise1/:id" />
				<ARIAExercise path="/workshop3-semantics-aria/exercise2/:id" />
				<A11yNamingExercise path="/workshop3-semantics-aria/exercise3/:id" />
				<A11yNamingExerciseListings path="/workshop3-semantics-aria/exercise3/listings" />
				<ProgrammaticA11yExercise path="/workshop3-semantics-aria/exercise4/:id" />
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

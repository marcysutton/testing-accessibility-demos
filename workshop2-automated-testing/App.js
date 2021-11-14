import React, {useRef} from 'react'
import { Router } from "@reach/router"
import './styles.scss'
import Header from "./components/header"
import HomePage from "./components/page-home"
import AboutPage from "./components/page-about"

import imgFooterLogo from "/images/icons/footer-logo.svg"

export function App() {

	return <>
		<Header />
		<main id="main">
			<Router>
				<HomePage path="/workshop2-automated-testing/" />
				<AboutPage path="/workshop2-automated-testing/about" />
			</Router>
		</main>
		<div id="footer">
			<div className="section">
				<div id="footer-logo">
					<img src={imgFooterLogo} />
				</div>
			</div>
		</div>
	</>
}

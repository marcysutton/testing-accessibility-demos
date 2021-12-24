import React from "react"
import BodyClassName from "react-body-classname"
import {Helmet} from "react-helmet"
import LoadedImageUrl from "./utils/loaded-image-url"

import "./styles/page-listings.scss"

import ListingsData from "workshop3-data/listings.json"

import * as imageURLs from '../../images/listings/*.{png,jpg}';

const Listing = props => {
    const data = ListingsData.listings[props.id]
    return (
        <BodyClassName className="page-listing">
            <>
                <div className="wide-layout listing-header">
                    <h1>{data.listingName}</h1>
                    <p>{data.location}</p>
                </div>
                <div className="listings-list">
                    <section className="wide-layout">
                        <h2>Description</h2>
                        <p>{data.excerpt}</p>
                    </section>
                </div>
            </>
        </BodyClassName>
    )
}

export default Listing
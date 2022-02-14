import React from "react"
import BodyClassName from "react-body-classname"
import {Helmet} from "react-helmet"
import LoadedImageUrl from "./utils/loaded-image-url"

import "./styles/page-listings.scss"

import HeadingPortal from "workshop3-components/heading-portal"
import ListingsData from "workshop3-data/listings.json"
import ListingExcerpt from "workshop3-components/listing-excerpt"
import DropdownList from "workshop3-components/dropdown-list"

import * as imageURLs from "../../images/listings/*.{png,jpg}"

const ListingsPage = () =>  {
    return (
        <BodyClassName className="page-listings">
            <>
                <HeadingPortal>
                    <h1 className="visually-hidden">Camp Spots</h1>
                </HeadingPortal>
                <div className="wide-layout listings-header">
                    <h2>Listings</h2>
                    <DropdownList defaultItemText="All site types" items={["Campgrounds", "State Parks", "Tent sites", "National Parks"]} />
                </div>
                <div className="listings-list">
                    <section className="wide-layout">
                    {
                    Object.entries(ListingsData.listings).map((listing, index) => {
                        const imageUrl = LoadedImageUrl(imageURLs, listing[1].excerptImageSrc)
                        return (
                            <ListingExcerpt id={listing[0]} data={listing[1]} image={imageUrl} key={index} />
                        )
                    })
                    }
                    </section>
                </div>
            </>
        </BodyClassName>
    )
}

export default ListingsPage
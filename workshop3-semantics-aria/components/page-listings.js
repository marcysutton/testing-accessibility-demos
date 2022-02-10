import React from "react"
import BodyClassName from "react-body-classname"
import {Helmet} from "react-helmet"
import LoadedImageUrl from "./utils/loaded-image-url"

import "./styles/page-listings.scss"

import ListingsData from "workshop3-data/listings.json"
import ListingExcerpt from "workshop3-components/listing-excerpt"
import DropdownList from "workshop3-components/dropdown-list"

import * as imageURLs from '../../images/listings/*.{png,jpg}';

const ListingsPage = () =>  {
    return (
        <BodyClassName className="page-listings">
            <>
                <div className="wide-layout listings-header">
                    <h1>Listings</h1>
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
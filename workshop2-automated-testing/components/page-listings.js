import React from "react"
import BodyClassName from "react-body-classname"
import LoadedImageUrl from "./utils/loaded-image-url"

import './styles/page-listings.scss'

import ListingsData from "data/listings.json"
import ListingExcerpt from "components/listing-excerpt"
import DropdownList from "components/dropdown-list"

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
                    {ListingsData.listings.map((listing, index) => {
                        const imageUrl = LoadedImageUrl(imageURLs, listing.imageSrc)
                        return <ListingExcerpt data={listing} image={imageUrl} key={index} />
                    })}
                    </section>
                </div>
            </>
        </BodyClassName>
    )
}

export default ListingsPage
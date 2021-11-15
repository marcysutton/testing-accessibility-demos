import React from "react"
import BodyClassName from "react-body-classname"

import './styles/page-listings.scss'

import ListingsData from "data/listings.json"
import ListingExcerpt from "components/listing-excerpt"

const ListingsPage = () =>  {
    return (
        <BodyClassName className="page-listings">
            <>
                <div className="wide-section listings-header">
                    <h1>Listings</h1>
                    <select>
                        <option>All site types</option>
                        <option>Campgrounds</option>
                        <option>Tent sites</option>
                        <option>State parks</option>
                        <option>National parks</option>
                    </select>
                </div>
                <div className="listings-list">
                    <section className="wide-section">
                    {ListingsData.listings.map((listing, index) => {
                        return <ListingExcerpt data={listing} key={index} />
                    })}
                    </section>
                </div>
            </>
        </BodyClassName>
    )
}

export default ListingsPage
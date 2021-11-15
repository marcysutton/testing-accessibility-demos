import React from "react"
import PropTypes from "prop-types"

import './styles/listing.scss'
import './styles/icons.scss'

const ListingExcerpt = ({data, image}) => {
    const { listingName = '', location = '', listingType = '', excerpt = '', amenities = [] } = data
    return (
        <article className="listing-excerpt">
            <img src={image} alt="" />
            <div>
                <header>
                    <div>
                        <h2>{listingName}</h2>
                        <p>{location} • {listingType}</p>
                    </div>
                    <ul className="amenity-icons">
                        {amenities.map((amenity, index) => {
                            return <li key={index}><span className={`icon-${amenity}`}></span></li>
                        })}
                    </ul>
                </header>
                <div>
                    <p>{excerpt}</p>
                    <p><a href="">Read more</a></p>
                </div>
            </div>
        </article>    
    )
}

ListingExcerpt.propTypes = {
    data: PropTypes.shape({
        listingName: PropTypes.string,
        location: PropTypes.string,
        listingType: PropTypes.string,
        imageSrc: PropTypes.string,
        excerpt: PropTypes.string
    })
}

export default ListingExcerpt
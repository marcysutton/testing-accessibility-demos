import React from "react"
import BodyClassName from "react-body-classname"
import sanitizeHtml from "sanitize-html"
import {Helmet} from "react-helmet"
import LoadedImageUrl from "./utils/loaded-image-url"

import "./styles/page-listings.scss"

import Icon from "workshop3-components/icon"
import ListingsData from "workshop3-data/listings.json"
import DatePicker from "workshop3-components/date-picker/date-picker"

import * as imageURLs from "../../images/listings/*.{png,jpg}"

const Listing = props => {
    const data = ListingsData.listings[props.id]
    const headerImageUrl = LoadedImageUrl(imageURLs, data.detailHeaderImageSrc)
    return (
        <BodyClassName className="header-overlap page-listing-detail">
            <>
                <div>
                    <div
                        className="page-header"
                        style={{backgroundImage: `url(${headerImageUrl}`}}
                    >
                        <div className="page-header-content wide-layout">
                            <div className="listing-name">{data.listingName}</div>
                            <p className="location">{data.location}</p>
                        </div>
                    </div>
                    <div className="wide-layout two-parts-70-30">
                        <div>
                            <div>Description</div>
                            <div className="description-text" dangerouslySetInnerHTML={{__html: sanitizeHtml(data.description)}} />

                            Amenities
                            <div className="amenity-icons grid">
                            {data.amenities.map((amenity, index) => {
                                return <div key={index}>
                                    <Icon name={amenity} showText={true} />
                                </div>
                            })}
                            </div>
                        </div>
                        <div>
                            Calendar
                            <DatePicker />
                        </div>
                    </div>
                    <div className="wide-layout">
                        <div className="detail-images">
                            {data.detailImages.map((image, index) => {
                                let detailImageUrl = LoadedImageUrl(imageURLs, image.imageSrc)
                                return <img
                                    key={index}
                                    src={detailImageUrl}
                                    alt={image.imageAlt}
                                />
                            })}
                        </div>
                    </div>
                </div>
            </>
        </BodyClassName>
    )
}

export default Listing
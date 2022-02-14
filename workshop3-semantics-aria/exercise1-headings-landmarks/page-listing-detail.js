import React from "react"
import BodyClassName from "react-body-classname"
import sanitizeHtml from 'sanitize-html'
import {Helmet} from "react-helmet"
import LoadedImageUrl from "workshop3-components/utils/loaded-image-url"

import "workshop3-components/styles/page-listings.scss"

import Icon from 'workshop3-components/icon'
import ListingsData from "workshop3-data/listings.json"
import DatePicker from '../exercise2-what-is-aria/date-picker'

import * as imageURLs from '../../images/listings/*.{png,jpg}';

const SemanticsExercise = props => {
    const data = ListingsData.listings[props.id]
    const headerImageUrl = LoadedImageUrl(imageURLs, data.detailHeaderImageSrc)
    return (
        <BodyClassName className="header-overlap page-listing-detail">
            <>
                <article>
                    <header
                        className="page-header"
                        style={{backgroundImage: `url(${headerImageUrl}`}}
                    >
                        <div className="page-header-content wide-layout">
                            <h1 className="listing-name">{data.listingName}</h1>
                            <p className="location">{data.location}</p>
                        </div>
                    </header>
                    <section className="wide-layout two-parts-70-30" aria-label="Site description and booking calendar">
                        <div>
                            <h2>Description</h2>
                            <div className="description-text" dangerouslySetInnerHTML={{__html: sanitizeHtml(data.description)}} />

                            <h2>Amenities</h2>
                            <ul className="amenity-icons grid">
                            {data.amenities.map((amenity, index) => {
                                return <li key={index}>
                                    <Icon name={amenity} showText={true} />
                                </li>
                            })}
                            </ul>
                        </div>
                        <div>
                            <h2>Calendar</h2>
                            <DatePicker />
                        </div>
                    </section>
                    <section className="wide-layout" aria-label="Image gallery">
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
                    </section>
                </article>
            </>
        </BodyClassName>
    )
}

export default SemanticsExercise
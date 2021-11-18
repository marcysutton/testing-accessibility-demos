import React from "react"
import BodyClassName from "react-body-classname"
import {Helmet} from "react-helmet"
import HeadingPortal from "components/heading-portal"

import "./styles/page-home.scss"
import SearchForm from "components/search-form"
import imgTents from "images/tents.jpg"
import iconTag from "images/icons/icon-treetag.svg"
import iconBackpack from "images/icons/icon-backpack.svg"
import iconKayak from "images/icons/icon-kayak.svg"

const HomePage = () => {
    return (
        <BodyClassName className="page-home">
            <>
                <HeadingPortal>
                    <h1 className="visually-hidden">Camp Spots</h1>
                </HeadingPortal>
                <SearchForm />
                <div className="wide-layout two-part-overlap">
                    <div className="content-block-wrap">
                        <img src={imgTents} />
                        <div className="content-block">
                            <h3>Rest and relaxation is a part of life</h3>
                            <div>We know you need a break. Get out of town, or stay and play. Taking rest and time away from the daily grind of life is essential for maintaining balance and positive well-being.</div>

                            <div>At CampSpots, we can help connect you to your next adventure. Create memories you’ll remember fondly well into the future.</div>
                                
                            <div>By researching places, accomodations, and activities that match your lifestyle, you can have the time of your life.</div>
                        </div>
                    </div>
                    <div className="link-block">
                        <h4>Places to visit</h4>
                        <div className="link-list">
                            <div>
                                <a href="#">New York</a>
                                <a href="#">Texas</a>
                                <a href="#">Utah</a>
                            </div>
                            <div>
                                <a href="#">Oregon</a>
                                <a href="#">Alaska</a>
                                <a href="#">Hawaii</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="layout three-parts">
                    <div className="item green">
                        <img src={iconTag} alt="" />
                        <div className="header">Find your next adventure</div>
                        <p>Vel rutrum est pharetra. Suspendisse eu mattis mi. Mauris vitae ornare urna, et ornare felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="item yellow">
                        <img src={iconBackpack} alt="" />
                        <div className="header">Know what to pack and what to leave at home</div>
                        <p>Vel rutrum est pharetra. Suspendisse eu mattis mi. Mauris vitae ornare urna, et ornare felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="item blue">
                        <img src={iconKayak} alt="" />
                        <div className="header">Arrange the best activities</div>
                        <p>Vel rutrum est pharetra. Suspendisse eu mattis mi. Mauris vitae ornare urna, et ornare felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </>
        </BodyClassName>
    )
}

export default HomePage
import React from "react"
import BodyClassName from "react-body-classname"
import {Helmet} from "react-helmet"
import HeaderPortal from "workshop4-components/header-portal"

import "./styles/page-home.scss"
import SearchForm from "workshop4-components/search-form"
import imgTents from "images/tents.jpg"
import iconTag from "images/icons/icon-treetag.svg"
import iconBackpack from "images/icons/icon-backpack.svg"
import iconKayak from "images/icons/icon-kayak.svg"

const HomePage = () => {
    return (
        <BodyClassName className="page-home">
            <>
                <HeaderPortal>
                    <h1 className="visually-hidden">Camp Spots</h1>
                </HeaderPortal>
                <SearchForm />
                <section aria-label="Site information">
                    <div className="wide-layout two-part-overlap">
                        <div className="content-block-wrap">
                            <img src={imgTents} alt="A festival of tents at sunset" />
                            <div className="content-block">
                                <h2 className="h3-style">Rest and relaxation is a part of life</h2>
                                <p>We know you need a break. Get out of town, or stay and play. Taking rest and time away from the daily grind of life is essential for maintaining balance and positive well-being.</p>

                                <p>At CampSpots, we can help connect you to your next adventure. Create memories you’ll remember fondly well into the future.</p>
                                    
                                <p>By researching places, accomodations, and activities that match your lifestyle, you can have the time of your life.</p>
                            </div>
                        </div>
                        <div className="link-block">
                            <h3 className="h4-style">Places to visit</h3>
                            <ul className="link-list">
                                <li><a href="#"><span aria-hidden="true"></span>New York</a></li>
                                <li><a href="#"><span aria-hidden="true"></span>Texas</a></li>
                                <li><a href="#"><span aria-hidden="true"></span>Utah</a></li>
                                <li><a href="#"><span aria-hidden="true"></span>Oregon</a></li>
                                <li><a href="#"><span aria-hidden="true"></span>Alaska</a></li>
                                <li><a href="#"><span aria-hidden="true"></span>Hawaii</a></li>
                            </ul>
                        </div>
                    </div>
                    <ul className="layout three-parts">
                        <li className="item green">
                            <img src={iconTag} alt="" />
                            <h3 className="header">Find your next adventure</h3>
                            <p>Vel rutrum est pharetra. Suspendisse eu mattis mi. Mauris vitae ornare urna, et ornare felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </li>
                        <li className="item yellow">
                            <img src={iconBackpack} alt="" />
                            <h3 className="header">Know what to pack and what to leave at home</h3>
                            <p>Vel rutrum est pharetra. Suspendisse eu mattis mi. Mauris vitae ornare urna, et ornare felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </li>
                        <li className="item blue">
                            <img src={iconKayak} alt="" />
                            <h3 className="header">Arrange the best activities</h3>
                            <p>Vel rutrum est pharetra. Suspendisse eu mattis mi. Mauris vitae ornare urna, et ornare felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </li>
                    </ul>
                </section>
            </>
        </BodyClassName>
    )
}

export default HomePage
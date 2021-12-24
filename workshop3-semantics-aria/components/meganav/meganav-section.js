import React from "react"
import LoadedImageUrl from "../utils/loaded-image-url"

import navMap from "workshop3-data/nav-map.json"
import * as imageMap from "../../../images/meganav/*.{jpg,svg}"

import SubNavButton from './subnav-button'
import SubNavLinkGroup from './subnav-link-group'
import SubNavImageBlock from './subnav-image-block'

const MegaNavSection = React.forwardRef((props, ref) => {
    const linkGroups = navMap[props.id].linkGroups
    let imageLinkBlocks
    if (navMap[props.id].imageLinkBlocks) {
        imageLinkBlocks = navMap[props.id].imageLinkBlocks
    }
    return (
        <div
            className={`
                megamenu-section
                ${props.activeMenu === ref ? 'active' : ''}
            `}
        >
            <SubNavButton
                aria-expanded={props.activeMenu === ref}
                buttonName={props.buttonName}
                className="megamenu-navitem header-main-item" 
                idRef={props.id}
                onClick={(ref) => { props.onClick(ref) }}
                ref={ref}
            >
            </SubNavButton>

            <div className="megamenu-submenu" role="region" aria-labelledby={props.id}>
                {linkGroups.map((group, index) => {
                    return <SubNavLinkGroup key={index} headerText={group.headerText} items={group.items} logoLinkRef={props.logoLinkRef} />
                })}
                {imageLinkBlocks && imageLinkBlocks.map((block, index) => {
                    const imageUrl = LoadedImageUrl(imageMap, block.imgSrc)
                    const iconUrl = LoadedImageUrl(imageMap, block.iconSrc)
                    return <SubNavImageBlock key={index} imgSrc={imageUrl} iconSrc={iconUrl} linkText={block.linkText} url={block.url} />
                })}
            </div>
        </div>
    )
})

export default MegaNavSection
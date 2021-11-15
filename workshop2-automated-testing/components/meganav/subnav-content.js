import React from "react"
import PropTypes from 'prop-types'
import LoadedImageUrl from "../utils/loaded-image-url"

import SubNavGroup from './subnav-group'
import SubNavImageBlock from './subnav-image-block'

const SubNavContent = ({data = {}, imageMap = {}}) => {
    const linkGroups = data.linkGroups
    let imageLinkBlocks
    if (data.imageLinkBlocks) {
        imageLinkBlocks = data.imageLinkBlocks
    }
    return (
        <div className="megamenu-submenu">
            {linkGroups.map((group, index) => {
                return <SubNavGroup key={index} headerText={group.headerText} items={group.items} />
            })}
            {imageLinkBlocks && imageLinkBlocks.map((block, index) => {
                const imageUrl = LoadedImageUrl(imageMap, block.imgSrc)
                const iconUrl = LoadedImageUrl(imageMap, block.iconSrc)
                return <SubNavImageBlock key={index} imgSrc={imageUrl} iconSrc={iconUrl} linkText={block.linkText} url={block.url} />
            })}
        </div>
    )
}

SubNavContent.propTypes = {
    data: PropTypes.object,
}

SubNavContent.defaultProps = {
    data: null,
}

export default SubNavContent
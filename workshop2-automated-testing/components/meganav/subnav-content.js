import React from "react"
import PropTypes from 'prop-types'

import SubNavGroup from './subnav-group'
import SubNavImageBlock from './subnav-image-block'

const SubNavContent = ({data = {}}) => {
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
                return <SubNavImageBlock key={index} imgSrc={block.imgSrc} iconSrc={block.iconSrc} linkText={block.linkText} url={block.url} />
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
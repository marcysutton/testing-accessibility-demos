import React from "react"
import PropTypes from 'prop-types'

const SubNavImageBlock = ({imgSrc = '', url = '#', iconSrc = '', linkText = ''}) => (
    <div className="megamenu-submenu-image-block">
        <img src={imgSrc} alt="" />
        <a href={url} className="megamenu-submenu-linkblock">
            <img src={iconSrc} alt="" />
            {linkText}
        </a>
    </div>
)

SubNavImageBlock.propTypes = {
    imgSrc: PropTypes.string,
    url: PropTypes.string,
    iconSrc: PropTypes.string,
    linkText: PropTypes.string,
}

SubNavImageBlock.defaultProps = {
    imgSrc: '',
    url: '#',
    iconSrc: '',
    linkText: '',
}

export default SubNavImageBlock
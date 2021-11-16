import React from "react"
import PropTypes from 'prop-types'

const SubNavGroup = ({headerText = '', items = []}) => {
    return (
        <div className="megamenu-submenu-group">
            <div className="megamenu-submenu-header">
                {headerText}
            </div>
            {items.map((item, index) => (
                <div className="megamenu-submenu-link" key={index}>
                    <a href={item.url} data-testid={`link-${index}`}>{item.name}</a>
                </div>
            ))}
        </div>
    )
}

SubNavGroup.propTypes = {
    headerText: PropTypes.string,
    items: PropTypes.array
}

SubNavGroup.defaultProps = {
    headerText: '',
    items: []
}

export default SubNavGroup
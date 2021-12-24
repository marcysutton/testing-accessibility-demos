import React from "react"
import PropTypes from "prop-types"

import { Link } from "@reach/router"

const SubNavLinkGroup = ({headerText = '', items = []}) => {
    return (
        <div className="megamenu-submenu-group">
            <h3 className="megamenu-submenu-header">
                {headerText}
            </h3>
            <ul>
            {items.map((item, index) => (
                <li className="megamenu-submenu-link" key={index}>
                    <a
                        className="nav-link"
                        data-testid={`link-${index}`}
                        href={item.url}
                    >
                        {item.name}
                    </a>
                </li>
            ))}
            </ul>
        </div>
    )
}

SubNavLinkGroup.propTypes = {
    headerText: PropTypes.string,
    items: PropTypes.array
}

SubNavLinkGroup.defaultProps = {
    headerText: '',
    items: []
}

export default SubNavLinkGroup
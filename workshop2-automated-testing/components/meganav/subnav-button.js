import React from "react"
import PropTypes from 'prop-types'

const SubNavButton = (props) => {
    return (
        <button
            aria-expanded={props['aria-expanded']}
            className="megamenu-navitem header-main-item" 
            id={props.idRef}
            data-testid={props.idRef}
            onClick={(event) => { props.onClick(event) }}
        >
            {props.buttonName}
        </button>
    )
}

SubNavButton.propTypes = {
    buttonName: PropTypes.string,
    idRef: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default SubNavButton
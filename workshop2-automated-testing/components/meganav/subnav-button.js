import React from "react"
import PropTypes from 'prop-types'

const SubNavButton = React.forwardRef((props, ref) => (
    <h2>
        <button
            aria-expanded={props['aria-expanded']}
            className="megamenu-navitem header-main-item" 
            id={props.idRef}
            data-testid={props.idRef}
            onClick={(event) => { props.onClick(event) }}
            ref={ref}
        >
            {props.buttonName}
        </button>
    </h2>
))

SubNavButton.propTypes = {
    buttonName: PropTypes.string,
    idRef: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default SubNavButton
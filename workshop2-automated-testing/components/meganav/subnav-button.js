import React from "react"
import PropTypes from 'prop-types'

const SubNavButton = ({buttonName = 'Nav Item', idRef, onClick}) => {
    return (
        <button
            className="megamenu-navitem header-main-item" 
            id={idRef}
            onClick={(event) => { onClick(event) }}
        >
            {buttonName}
        </button>
    )
}

SubNavButton.propTypes = {
    buttonName: PropTypes.string,
    idRef: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default SubNavButton
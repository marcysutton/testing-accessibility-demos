import React from "react"

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
export default SubNavButton
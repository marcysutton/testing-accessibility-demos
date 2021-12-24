import React from "react"

const ButtonSubmit = ({buttonName, onClick}) => {
    return (
        <button
            aria-label={buttonName}
            className="btn-submit btn-lookingglass"
            data-testid="btn-submit"
            onClick={(event) => { onClick(event)}}
        >
            <span className="icon-lookingglass-white"></span>
        </button>
    )
}

export default ButtonSubmit
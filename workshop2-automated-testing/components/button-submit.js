import React from "react"

const ButtonSubmit = ({buttonName, onClick}) => {
    return (
        <div
            className="btn-submit btn-lookingglass"
            data-testid="btn-submit"
            onClick={(event) => { onClick(event)}}
        >
            <span className="icon-lookingglass-white"></span>
        </div>
    )
}

export default ButtonSubmit
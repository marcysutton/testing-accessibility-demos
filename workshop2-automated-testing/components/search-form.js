import React from "react"

const SearchForm = () => (
    <div className="form-wrap layout">
        <div className="form-field">
            <span className="label">Where to?</span>
            <div className="custom-input">
                <span className="icon-lookingglass"></span>
                <input type="text" placeholder="Try Oregon, Colorado..." />
            </div>
        </div>
        <div className="form-field">
            <span className="label">Dates</span>
            <div className="custom-input">
                <span className="icon-calendar"></span>
                <input type="text" placeholder="Enter dates" />
            </div>
        </div>
        <div className="form-field form-submit">
            <button className="btn-submit btn-lookingglass" onClick={() => {alert('Submitted!')}}>
                <span className="icon-lookingglass-white"></span>
            </button>
        </div>
    </div>
)
export default SearchForm
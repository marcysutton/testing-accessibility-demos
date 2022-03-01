import React from "react"

import ButtonSubmit from "workshop2-components/button-submit"

const SearchForm = () => (
    <div className="main-search form-wrap layout">
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
            <ButtonSubmit onClick={()=> { console.log('Submit my stuff!') }} />
        </div>
    </div>
)
export default SearchForm
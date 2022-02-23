import React, {useEffect, useRef, useState} from "react"
import PropTypes from "prop-types"

import "./styles/dropdown-list.scss"

const DropdownList = ({defaultItemText = '', items = []}) => {
    const [active, setActive] = useState(false)
    const dropdownRef = useRef()

    const clickOutside = (event) => {
        if (!dropdownRef.current.contains(event.target)) {
            setActive()
        }
    }
    useEffect(() => {
        if (active) {
            document.addEventListener('mouseup', clickOutside)
        } else {
            document.removeEventListener('mouseup', clickOutside)
        }
        return () => {
            document.removeEventListener('mouseup', clickOutside)
        }
    }, [active])

    return (
        <div
            className={`${active === true ? 'active' : ''} dropdown-list`}
            ref={dropdownRef}
        >
            <div
                className="dropdown-btn"
                onClick={()=>{ setActive(!active) }}
            >
                {defaultItemText}
            </div>
            <ul>
                {items.map((item, index) => {
                    const url = item.split(' ').join('-')
                    return <li key={index}>
                        <a href={`#${url}`}>{item}</a>
                    </li>
                })}
            </ul>
        </div>
    )
}

DropdownList.propTypes = {
    items: PropTypes.array
}
export default DropdownList
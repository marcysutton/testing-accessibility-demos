import React, { useEffect, useRef, useState } from "react"
import "./meganav.scss"
import SubNavButton from "./subnav-button"
import SubNavContent from "./subnav-content"
import navMap from "data/nav-map.json"

import * as navImageMap from "../../../images/meganav/*.{jpg,svg}"

const MegaNav = () => {
    const [activeMenu, setActiveMenu] = useState()
    const navRef = useRef()
    const menu1 = useRef()
    const menu2 = useRef()
    const menu3 = useRef()

    useEffect(() => {
        if (activeMenu) {
            document.addEventListener('mouseup', clickOutside)
        } else {
            document.removeEventListener('mouseup', clickOutside)
        }
        return () => {
            document.removeEventListener('mouseup', clickOutside)
        }
    }, [activeMenu])
    
    const clickOutside = (event) => {
        if (!navRef.current.contains(event.target)) {
            setActiveMenu()
        }
    }
    const handleEscape = (event) => {
        if (event.key === 'Escape' && activeMenu) {
            setActiveMenu()
        }
    }
    const navItemClick = (event, menuId) => {
        if (activeMenu === menuId) {
            setActiveMenu(false)
        } else {
            setActiveMenu(menuId)
        }
    }
    return (
        <nav id="header-megamenu" ref={navRef}>
            <div
                className={`megamenu-section ${activeMenu === menu1 ? 'active' : ''}`}
                onKeyUp={(event) => { handleEscape(event) }}
                ref={menu1}
            >
                <SubNavButton
                    buttonName="Plan Your Trip" 
                    idRef="megamenu-item1"
                    onClick={(event) => { navItemClick(event, menu1) }}
                />
                <SubNavContent data={navMap.submenu1} imageMap={navImageMap} />
            </div>
            <div
                className={`megamenu-section ${activeMenu === menu2 ? 'active' : ''}`}
                onKeyUp={(event) => { handleEscape(event) }}
                ref={menu2}
            >
                <SubNavButton
                    buttonName="Ways to Stay" 
                    idRef="megamenu-item2"
                    onClick={(event) => { navItemClick(event, menu2) }}
                />
                <SubNavContent data={navMap.submenu2} imageMap={navImageMap} />
            </div>
            <div
                className={`megamenu-section ${activeMenu === menu3 ? 'active' : ''}`}
                onKeyUp={(event) => { handleEscape(event) }}
                ref={menu3}
            >
                <SubNavButton
                    buttonName="Resources" 
                    idRef="megamenu-item3"
                    onClick={(event) => { navItemClick(event, menu3) }}
                />
                <SubNavContent data={navMap.submenu3} imageMap={navImageMap} />
            </div>
        </nav>
    )
}

export default MegaNav
import React, { useEffect, useRef, useState } from "react"

import "./meganav.scss"
import MegaNavSection from "./meganav-section"


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
    const navItemClick = (menuRef) => {
        if (activeMenu === menuRef) {
            setActiveMenu()
        } else {
            setActiveMenu(menuRef)
        }
    }
    return (
        <nav
            id="header-megamenu"
            onKeyUp={(event) => { handleEscape(event) }}
            ref={navRef}
        >
            <MegaNavSection
                activeMenu={activeMenu}
                id="megamenu-section1"
                buttonName="Plan Your Trip"
                ref={menu1}
                onClick={() => { navItemClick(menu1) }}
            />
            <MegaNavSection
                activeMenu={activeMenu}
                id="megamenu-section2"
                buttonName="Ways to Stay"
                ref={menu2}
                onClick={() => { navItemClick(menu2) }}
            />
            <MegaNavSection
                activeMenu={activeMenu}
                id="megamenu-section3"
                buttonName="Resources"
                ref={menu3}
                onClick={() => { navItemClick(menu3) }}
            />
        </nav>
    )
}
export default MegaNav

import React from "react"

export const SubNavGroup = ({headerText = '', items = []}) => {
    return (
        <div className="megamenu-submenu-group">
            <div className="megamenu-submenu-header">
                {headerText}
            </div>
            {items.map((item, index) => (
                <div className="megamenu-submenu-link" key={index}>
                    <a href={item.url}>{item.name}</a>
                </div>
            ))}
        </div>
    )
}

export const SubNavImageBlock = ({imgSrc = '', url = '#', iconSrc = '', linkText = ''}) => (
    <div className="megamenu-submenu-image-block">
        <img src={imgSrc} />
        <a href={url} className="megamenu-submenu-linkblock">
            <img src={iconSrc} />
            {linkText}
        </a>
    </div>
)

const SubNavContent = ({data = {}}) => {
    const linkGroups = data.linkGroups
    let imageLinkBlocks
    if (data.imageLinkBlocks) {
        imageLinkBlocks = data.imageLinkBlocks
    }
    return (
        <div className="megamenu-submenu">
            {linkGroups.map((group, index) => {
                return <SubNavGroup key={index} headerText={group.headerText} items={group.items} />
            })}
            {imageLinkBlocks && imageLinkBlocks.map((block, index) => {
                return <SubNavImageBlock key={index} imgSrc={block.imgSrc} iconSrc={block.iconSrc} linkText={block.linkText} url={block.url} />
            })}
        </div>
    )
}

export default SubNavContent
import React, {useState} from "react"
import 'workshop3-components/styles/icons.scss'

const Icon = ({name, showText = false}) => {
    const StaticOrInteractive = showText ? `span` : `button`
    const tooltip = showText ? false : true
    const [tooltipActive, setTooltipActive] = useState(false)
    const showTooltip = () => {
        setTooltipActive(true)
    }
    const hideTooltip = () => {
        setTooltipActive(false)
    }
    return (
        <StaticOrInteractive
            className={tooltip ? 'icon-btn' : 'wrap-icon-text'}
            onMouseOver={tooltip ? showTooltip : null}
            onMouseOut={tooltip ? hideTooltip : null}
            onBlur={tooltip ? hideTooltip : null}
            onFocus={tooltip ? showTooltip : null}
        >
            <span
                aria-label={name}
                className={`icon-${name}`}
                role="img"
            >
            </span>
            { showText ? <span className="text">{name}</span> : null }
            { tooltip ?
                <span
                    aria-hidden="true"
                    className={
                        `tooltip ${!showText && tooltipActive ? `active` : `` }`}
                >
                    {name}
                </span>
            : null }
        </StaticOrInteractive>
    )
}

export default Icon
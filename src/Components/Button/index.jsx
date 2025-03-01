import { useState } from "react"
import "./style.css"

function Button({ title, Icon, active, isHover = true, secondaryBtn = false, style = "", containerStyle = "", activeStyle = "", deactiveStyle = "", onClick, type = "button" }) {
    const [activeState, setActiveState] = useState(active)

    return <div className={secondaryBtn ? `sec-inactive-button-bg ${containerStyle}` : containerStyle}>
        <button type={type} className={active || (isHover && activeState) ? `primary-btn primary-btn-active ${style} ${activeStyle}` : `primary-btn ${style} ${deactiveStyle}`} onClick={onClick} onMouseEnter={() => isHover && setActiveState(true)} onMouseLeave={() => isHover && setActiveState(false)}>
            {Icon && <Icon dark={!(active || (isHover && activeState))} />}
            {title && <span>{title}</span>}
        </button>
    </div>
}

export default Button
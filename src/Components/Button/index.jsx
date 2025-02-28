import { useState } from "react"
import "./style.css"

function Button({ title, Icon, active, isHover = true, secondaryBtn = false, style = "", activeStyle = "", deactiveStyle = "", onClick, width }) {
    const [activeState, setActiveState] = useState(active)
    const w = width === "full" ? "w-full" : !width ? "" : `w-[${width}px]`
    return <div className={secondaryBtn ? `sec-inactive-button-bg ${w}` : w}>
        <button className={active || (isHover && activeState) ? `primary-btn primary-btn-active ${style} ${activeStyle} ${w}` : `primary-btn ${style} ${deactiveStyle} ${w}`} onClick={onClick} onMouseEnter={() => isHover && setActiveState(true)} onMouseLeave={() => isHover && setActiveState(false)}>
            {Icon && <Icon dark={!(active || (isHover && activeState))} />}
            <span>{title}</span>
        </button>
    </div>
}

export default Button
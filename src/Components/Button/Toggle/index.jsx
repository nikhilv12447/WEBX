import { useState } from "react"
import "./style.css"
function ToggleButton({ toggleBetween, onToggle, style }) {
    const [buttonState, setButtonState] = useState(0)

    function handleOnClick(event) {
        const state = parseInt(event.target.getAttribute("data-state"))
        setButtonState(state)
        onToggle && onToggle(state, toggleBetween[state])
    }

    const [btn1, btn2] = toggleBetween
    return <div className={`cursor-pointer flex rounded-[56px] bg-color p-[5px] ${style}`} onClick={handleOnClick}>
        <div className={buttonState === 0 ? "btn active" : "btn"} data-state="0">{btn1}</div>
        <div className={buttonState === 1 ? "btn active" : "btn"} data-state="1">{btn2}</div>
    </div>
}

export default ToggleButton

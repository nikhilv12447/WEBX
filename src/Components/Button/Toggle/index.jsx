import { useState } from "react"
import "./style.css"
function ToggleButton({ toggleBetween = [], onToggle, defaultValue = 0, style }) {
    const [buttonState, setButtonState] = useState(defaultValue)

    function handleOnClick(event) {
        const state = parseInt(event.target.getAttribute("data-state"))
        if (!isNaN(state)) {
            setButtonState(state)
            onToggle && onToggle(state, toggleBetween[state])
        }
    }

    return <div className={`cursor-pointer flex rounded-[56px] bg-color p-[5px] w-fit ${style}`} onClick={handleOnClick}>
        {
            toggleBetween.map((btn, index) => <div className={buttonState === index ? "btn active" : "btn"} data-state={index}>{btn}</div>)
        }
    </div>
}

export default ToggleButton

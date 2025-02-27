import { useState } from "react"
import "./style.css"

function OnOff({ text }) {
    const [on, setOn] = useState(false)

    return <div className="flex items-center gap-2">
        <div className={`w-9 h-5 flex items-center rounded-full relative ${on ? "btn-on" : "btn-off"}`} onClick={() => setOn(!on)}>
            <div className={`circle absolute ${on ? "animate-btnOn" : ""}`} />

        </div>
        <span className="font-medium text-sm text-tertiary">{text}</span>
    </div>
}

export default OnOff
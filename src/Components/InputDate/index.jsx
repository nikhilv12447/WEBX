import "./style.css"
import Image from "../Image"
import calendarIcon from "./icons/calendar.svg"
import { useRef, useState } from "react"

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

function Input({ onChange, value = "", placeholder, style, id, info }) {
    const [selectedDate, setSelectedDate] = useState(value)
    const inputRef = useRef()

    function handleOnChange(e) {
        const date = new Date(e.target.value)
        setSelectedDate(date)
        onChange && onChange(date)
    }

    function getFormatedDate(date) {
        if (!date) return placeholder

        let day = date.getDate()
        let month = date.getMonth()
        let year = date.getFullYear()
        day = day < 10 ? "0" + day : day

        return `${months[month]} ${day}, ${year}`
    }

    return <div>
        <div className={`input-container ${style}`}>
            <div className="flex items-center gap-2" onClick={() => inputRef.current.click()}>
                <Image url={calendarIcon} />
                <span>{getFormatedDate(selectedDate)}</span>
            </div>
            <input ref={inputRef} id={id} className="input-date-style" type="date" onChange={handleOnChange} value={value} placeholder={placeholder} />
        </div>
        {info && <p className="mt-[6px] font-normal text-sm text-tertiary">{info}</p>}
    </div>
}

export default Input
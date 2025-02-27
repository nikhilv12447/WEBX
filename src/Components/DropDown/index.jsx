import "./style.css"
import Image from "../Image"
import downArrowIcon from "./icon/Icon.svg"
import { useRef, useState } from "react"

function DropDown({ options = [], onSelect, placeHolder, defaultValue, style }) {
    const [queryStr, setQueryStr] = useState(defaultValue)
    const [showDropdown, setShowDropdown] = useState(false)
    const inputRef = useRef()

    function handleOnClick(e) {
        const value = e.target.getAttribute("data-value")
        const text = e.target.getAttribute("data-text")

        if (!value || !text) return

        setQueryStr(text)
        setShowDropdown(false)
        onSelect && onSelect(value, text)

    }

    function handleOnChange(e) {
        setQueryStr(e.target.value)
    }

    function handleDropdown(isShow) {
        setShowDropdown(isShow)
        isShow && inputRef.current.focus()
    }

    function filterOptions(queryStr = "", options = []) {
        queryStr = queryStr.toLowerCase()
        if (!queryStr) return options

        return options.filter(({ text }) => text.toLowerCase().startsWith(queryStr))
    }

    function handleOnBlur() {
        setTimeout(() => setShowDropdown(false), 500)
    }

    return <div className={`border border-[#D0D5DD] rounded-lg relative bg-white ${style}`}>
        <div className="flex justify-between items-center py-[10px] pl-[14px] pr-[12px]" onClick={() => handleDropdown(true)}>
            <input ref={inputRef} className="font-normal text-base text-[#667085] w-full outline-none" placeholder={placeHolder} value={queryStr} onChange={handleOnChange} onBlur={handleOnBlur} />
            <button><Image url={downArrowIcon} style={showDropdown ? " down-arrow rotate-180" : "down-arrow"} /></button>
        </div>

        {
            showDropdown && <div className="absolute top-12 h-24 overflow-y-auto w-full z-[2] bg-white" onClick={handleOnClick}>
                {
                    filterOptions(queryStr, options).map(({ value, text }, index) => <div key={index} className="p-2 cursor-pointer" data-value={value} data-text={text}>{text}</div>)
                }
            </div>
        }
    </div>
}

export default DropDown
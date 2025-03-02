import "./style.css"
import Image from "../Image"
import downArrowIcon from "./icon/Icon.svg"
import { useEffect, useRef, useState } from "react"

function getValueByKey(options, value) {
    if (!value) return ""

    let option = options.find(option => option.value === value)
    return option ? option.text : ""
}

function DropDown({ options = [], onSelect, placeHolder, defaultValue, style }) {
    const [queryStr, setQueryStr] = useState(getValueByKey(options, defaultValue))
    const [showDropdown, setShowDropdown] = useState(false)
    const inputRef = useRef()

    useEffect(() => {
        setQueryStr(getValueByKey(options, defaultValue))
    }, [options])

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
            <input ref={inputRef} className="dropdown-input" placeholder={placeHolder} value={queryStr} onChange={handleOnChange} onBlur={handleOnBlur} />
            <button type="button"><Image url={downArrowIcon} style={showDropdown ? " down-arrow rotate-180" : "down-arrow"} /></button>
        </div>

        {
            showDropdown && <div className="absolute top-12 max-h-52 overflow-y-auto w-full z-[2] bg-white border border-borderSecondary rounded-lg shadow-[0_0_4px_0_#00000080]" onClick={handleOnClick}>
                {
                    filterOptions(queryStr, options).map(({ value, text }, index) => <div key={index} className="p-2 cursor-pointer border-b border-borderSecondary" data-value={value} data-text={text}>{text}</div>)
                }
            </div>
        }
    </div>
}

export default DropDown
import "./style.css"
import Image from "../Image"
import downArrowIcon from "./icon/Icon.svg"
import { useEffect, useRef, useState } from "react"

function getValueByKey(options, value) {
    if (!value) return ["", ""]

    let option = options.find(option => option.value === value)
    return [option ? option.text : "", option ? option.emoji : ""]
}

function DropDown({ options = [], onSelect, placeHolder, defaultValue, style }) {
    const [defaultText, defaultEmoji] = getValueByKey(options, defaultValue)
    const [queryStr, setQueryStr] = useState(defaultText)
    const [emoji, setEmoji] = useState(defaultEmoji)
    const [showDropdown, setShowDropdown] = useState(false)
    const inputRef = useRef()

    useEffect(() => {
        setQueryStr(defaultText)
        defaultEmoji && setEmoji(defaultEmoji)
    }, [options])

    function handleOnClick(e) {
        const value = e.target.getAttribute("data-value")
        const text = e.target.getAttribute("data-text")
        const emoji = e.target.getAttribute("data-emoji")

        if (!value || !text) return

        setQueryStr(text)
        setShowDropdown(false)
        emoji && setEmoji(emoji)
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
        <div className="flex gap-1 justify-between items-center py-[10px] pl-[14px] pr-[12px]" onClick={() => handleDropdown(true)}>
            {emoji && <span className="font-twemoji">{emoji}</span>}
            <input ref={inputRef} className="dropdown-input" placeholder={placeHolder} value={queryStr} onChange={handleOnChange} onBlur={handleOnBlur} />
            <button type="button"><Image url={downArrowIcon} style={showDropdown ? " down-arrow rotate-180" : "down-arrow"} /></button>
        </div>

        {
            showDropdown && <div className="absolute top-12 max-h-52 overflow-y-auto w-full z-[2] bg-white border border-borderSecondary rounded-lg shadow-[0_0_4px_0_#00000080]" onClick={handleOnClick}>
                {
                    filterOptions(queryStr, options).map(({ value, text, emoji }, index) =>
                        <div key={index} className="flex items-center gap-1 p-2 cursor-pointer border-b border-borderSecondary"
                            data-value={value}
                            data-text={text}
                            data-emoji={emoji}
                        >
                            {emoji && <span className="font-twemoji">{emoji}</span>}
                            {text}
                        </div>
                    )
                }
            </div>
        }
    </div>
}

export default DropDown
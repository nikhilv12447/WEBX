import "./style.css"
import noticeIcon from "./icon/notice-icon.svg"
import { useState } from "react"

function Notice({message}) {
    const [show, setShow] = useState(true)
    if (!show) return null

    return <div className="notice-board mb-5">
        <img src={noticeIcon} />
        <div className="w-full">
            <div className="flex justify-between">
                <strong className="font-medium text-sm text-[#344054]">Notice:</strong>
                <button onClick={() => setShow(false)}>X</button>
            </div>
            <p className="font-normal text-sm text-[#475467]">{message}</p>
        </div>
    </div>
}

export default Notice
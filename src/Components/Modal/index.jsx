import { useState } from "react"
import "./style.css"
import Image from "../Image"
import crossIcon from "./icon/x-close.svg"

function Modal({ title, children, onClose, style }) {
    const [show, setShow] = useState(true)

    function handleClose() {
        setShow(false)
        onClose && onClose()
    }
    if (!show) return null

    return <div className=" flex justify-center items-center fixed top-0 left-0 w-full h-full bg-[#0C111D]">
        <div className={`bg-white rounded-xl ${style}`}>
            <div className="flex justify-between pt-6 pb-5 px-6 rounded-xl border-b border-[#E4E7EC]">
                <span className="font-medium text-lg text-primaryText">{title}</span>
                <button onClick={handleClose}>
                    <Image url={crossIcon} />
                </button>
            </div>
            <div>
                {children}
            </div>
        </div>
    </div>
}

export default Modal
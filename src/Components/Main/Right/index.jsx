import "./style.css"
import Image from "../../Image"
import arrowIcon from "./icons/Icon.svg"
import { Outlet } from "react-router"

function RightSection({ open, onToggleOpen }) {
    return <div className={`right-container ${open ? "w-main" : "w-mainClose max-mob:w-full"} h-main overflow-y-scroll`}>
        <div className="w-full flex justify-start -ml-8 -mt-8">
            <button onClick={() => onToggleOpen(!open)} className="-mr-4">
                <Image url={arrowIcon} style={`${open ? "rotate-90 rounded-t-full" : "-rotate-90 rounded-b-full"} z-1 size-6 flex items-center justify-center bg-[#70e0001a] border border-borderSecondary`} />
            </button>
        </div>
        <Outlet />
    </div>
}

export default RightSection
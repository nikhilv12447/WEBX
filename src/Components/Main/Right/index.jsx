import "./style.css"
import { Outlet } from "react-router"

function RightSection() {
    return <div className="right-container fixed w-main h-main mt-mainTop ml-mainLeft overflow-y-scroll">
        <Outlet />
    </div>
}

export default RightSection
import "./style.css"
import { Outlet } from "react-router"

function RightSection({ open }) {
    return <div className={`right-container ${open ? "w-main" : "w-mainClose"} h-main overflow-y-scroll`}>
        <Outlet />
    </div>
}

export default RightSection
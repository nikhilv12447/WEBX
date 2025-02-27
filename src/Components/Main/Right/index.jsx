import "./style.css"
import { Outlet } from "react-router"

function RightSection() {
    return <div className="right-container overflow-y-scroll">
        <Outlet />
    </div>
}

export default RightSection
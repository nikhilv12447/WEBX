import "./style.css"
import data from "./data"
import Button from "../../Button"
import settingsIcon from "./icons/Settings"
import lifeBuoy from "./icons/LifeBuoy"
import ToggleButton from "../../Button/Toggle"
import Logout from "./icons/LogOut"
import { useNavigate, useParams, useLocation } from "react-router"

function LeftSection() {
    const nevigate = useNavigate()
    const params = useParams()
    const { pathname } = useLocation();

    return <div className="flex flex-col justify-between left-section-height p-4 border-r border-[#E4E7EC]">
        <div>
            <ul>
                {
                    data.map(({ icon, name, nevigate: url }, index) => <li key={index}>
                        <Button Icon={icon} title={name} deactiveStyle="py-2 px-3" activeStyle="active-btn" active={pathname === url} onClick={() => nevigate(url)} />
                    </li>)
                }
            </ul>
        </div>
        <div>
            <div>
                <Button Icon={lifeBuoy} title="Support" activeStyle="active-btn" active={pathname === "/support"} />
                <Button Icon={settingsIcon} title="Settings" activeStyle="active-btn" active={pathname === "/settings"} onClick={() => nevigate("/settings")} />
                <ToggleButton toggleBetween={["English", "العربية"]} onToggle={() => { }} style="mt-1 mb-6" />
            </div>
            <div className="flex border-t border-[#E4E7EC] pt-6 items-center gap-3 text-left">
                <div className="size-10 rounded-full border border-black"></div>
                <div className="flex flex-col">
                    <span>Afifa</span>
                    <span>afifa@ethneen.com</span>
                </div>
                <div className="cursor-pointer">
                    <Logout dark />
                </div>
            </div>
        </div>
    </div>
}

export default LeftSection
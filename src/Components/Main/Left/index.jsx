import "./style.css"
import data from "./data"
import Button from "../../Button"
import settingsIcon from "./icons/Settings"
import lifeBuoy from "./icons/LifeBuoy"
import ToggleButton from "../../Button/Toggle"
import Logout from "./icons/LogOut"
import { useNavigate, useLocation } from "react-router"
import { loginActions } from "../../../redux/actions"

function LeftSection() {
    const nevigate = useNavigate()
    const { pathname } = useLocation();
    const { setLogin } = loginActions

    function handleLogOut() {
        setLogin(false)
        nevigate("/home")
    }

    return <div className="flex flex-col fixed w-[268px] h-main mt-mainTop justify-between bg-white p-4 border-r border-[#E4E7EC] overflow-y-auto">
        <div className="h-full">
            <ul>
                {
                    data.map(({ icon, name, nevigate: url }, index) => <li key={index} className="mb-1">
                        <Button Icon={icon} title={name} deactiveStyle="py-2 px-3" activeStyle="active-btn" active={pathname === url} onClick={() => nevigate(url)} />
                    </li>)
                }
            </ul>
        </div>
        <div>
            <div>
                <Button Icon={lifeBuoy} title="Support" containerStyle="mb-1" activeStyle="active-btn" active={pathname === "/support"} />
                <Button Icon={settingsIcon} title="Settings" containerStyle="mb-1" activeStyle="active-btn" active={pathname === "/settings"} onClick={() => nevigate("/settings")} />
                <ToggleButton toggleBetween={["English", "العربية"]} onToggle={() => { }} style="mt-1 mb-6" />
            </div>
            <div className="flex border-t border-[#E4E7EC] pt-6 items-center gap-3 text-left">
                <div className="size-10 rounded-full border border-black"></div>
                <div className="flex flex-col">
                    <span>Afifa</span>
                    <span>afifa@ethneen.com</span>
                </div>
                <button onClick={handleLogOut}>
                    <Logout dark />
                </button>
            </div>
        </div>
    </div>
}

export default LeftSection
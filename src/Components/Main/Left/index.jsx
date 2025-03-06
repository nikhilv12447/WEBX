import "./style.css"
import data from "./data"
import Button from "../../Button"
import settingsIcon from "./icons/Settings"
import lifeBuoy from "./icons/LifeBuoy"
import ToggleButton from "../../Button/Toggle"
import Logout from "./icons/LogOut"
import Image from "../../Image"
import arrowIcon from "./icons/Icon.svg"
import { useNavigate, useLocation } from "react-router"
import { loginActions } from "../../../redux/actions"

function LeftSection({ open, onToggleOpen }) {
    const nevigate = useNavigate()
    const { pathname } = useLocation();
    const { setLogin } = loginActions

    function handleLogOut() {
        setLogin(false)
        nevigate("/home")
    }

    return <div className={`flex flex-col box-border ${open ? "w-[268px]" : "w-[90px]"} h-main justify-between bg-white p-4 border-r border-border3 overflow-y-auto`}>
        <div className="w-full flex justify-end">
            <button onClick={() => onToggleOpen(!open)} className="-mr-4">
                <Image url={arrowIcon} style={`${open ? "rotate-90 rounded-b-full" : "-rotate-90 rounded-t-full"} z-1 size-6 flex items-center justify-center bg-[#70e0001a] border border-borderSecondary`} />
            </button>
        </div>
        <div className="h-full">
            <ul>
                {
                    data.map(({ icon, name, nevigate: url }, index) => <li key={index} className="mb-1">
                        <Button Icon={icon} title={open && name} style={!open && "w-fit"} deactiveStyle="py-2 px-3" activeStyle="active-btn" active={pathname === url} onClick={() => nevigate(url)} />
                    </li>)
                }
            </ul>
        </div>
        <div>
            <div>
                <Button Icon={lifeBuoy} title={open && "Support"} style={!open && "w-fit"} containerStyle="mb-1" activeStyle="active-btn" active={pathname === "/support"} />
                <Button Icon={settingsIcon} title={open && "Settings"} style={!open && "w-fit"} containerStyle="mb-1" activeStyle="active-btn" active={pathname === "/settings"} onClick={() => nevigate("/settings")} isHover={false} />
                {open ? <ToggleButton toggleBetween={["English", "العربية"]} onToggle={() => { }} style="mt-1 mb-6" /> : null}
            </div>
            <div className="flex justify-center border-t border-[#E4E7EC] pt-6 items-center gap-3 text-left">
                {
                    open ? <>
                        <div className="size-10 rounded-full border border-black"></div>
                        <div className="flex flex-col">
                            <span>Afifa</span>
                            <span>afifa@ethneen.com</span>
                        </div>
                    </> : null
                }
                <button onClick={handleLogOut}>
                    <Logout dark />
                </button>
            </div>
        </div>
    </div>
}

export default LeftSection
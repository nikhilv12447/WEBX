import "./style.css"
import data from "./data"
import Button from "../../Button"
import settingsIcon from "./icons/Settings"
import lifeBuoy from "./icons/LifeBuoy"
import ToggleButton from "../../Button/Toggle"
import Logout from "./icons/LogOut"
import { useNavigate, useLocation } from "react-router"
import { loginActions } from "../../../redux/actions"
import isMobile from "is-mobile"

function LeftSection({ open, onToggleOpen }) {
    const nevigate = useNavigate()
    const { pathname } = useLocation();
    const { setLogin } = loginActions

    function handleLogOut() {
        setLogin(false)
        nevigate("/home")
    }

    function handleOnBtnClick(url) {
        isMobile() && onToggleOpen(false)
        nevigate(url)
    }

    return <div className={`flex flex-col box-border h-main justify-between bg-white border-r border-border3 overflow-y-auto ${open ? "side-sec-open" : "side-sec-close max-mob:mob-side-sec-close"}`}>
        <div className="h-full">
            <ul>
                {
                    data.map(({ icon, name, nevigate: url }, index) => <li key={index} className="mb-1">
                        <Button Icon={icon} title={open && name} style={!open && "w-fit"} deactiveStyle="py-2 px-3" activeStyle="active-btn" active={pathname === url} onClick={() => handleOnBtnClick(url)} isHover={!isMobile()} />
                    </li>)
                }
            </ul>
        </div>
        <div>
            <div>
                <Button Icon={lifeBuoy} title={open && "Support"} style={!open && "w-fit"} containerStyle="mb-1" activeStyle="active-btn" active={pathname === "/support"} isHover={!isMobile()} />
                <Button Icon={settingsIcon} title={open && "Settings"} style={!open && "w-fit"} containerStyle="mb-1" activeStyle="active-btn" active={pathname === "/settings"} onClick={() => handleOnBtnClick("/settings")} isHover={!isMobile()} />
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
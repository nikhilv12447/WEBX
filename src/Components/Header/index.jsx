import "./style.css"
import logo from "./icons/brandLogo.svg"
import search from "./icons/search.png"
import chat from "./icons/chat.svg"
import fav from "./icons/fav.svg"
import notification from "./icons/notification.svg"
import ToggleButton from "../Button/Toggle"
import Image from "../Image"
import Button from "../Button"

function Header({ isHome }) {

    if (isHome) return <HomeHeader />

    return <div className="border-b border-solid border-[#E4E7EC] flex items-center place-content-between px-[24px] h-[72px] fixed w-full top-0 bg-white">
        <div className="flex items-center">
            <img src={logo} />
            <ul className="flex pl-[48px]">
                <li className="list-item">Ethneen</li>
                <li className="list-item">Top Talent</li>
                <li className="list-item">Find Jobs</li>
                <li className="list-item">Community</li>
                <li className="list-item">Contact</li>
            </ul>
        </div>
        <div className="flex items-center">
            <ToggleButton toggleBetween={["Client", "Freelancer"]} onToggle={(index, data) => { console.log(index, data) }} />
            <div className="flex items-center">
                <img className="px-[10px]" src={search} />
                <img className="px-[10px]" src={chat} />
                <img className="px-[10px]" src={fav} />
                <img className="px-[10px]" src={notification} />
            </div>
            <div className="w-[40px] h-[40px] rounded-full border border-solid border-green-600"></div>
        </div>
    </div>
}

function HomeHeader() {

    return <div className="home-header">
        <Image url={logo} />
        <ul className="flex pl-[48px]">
            <li className="list-item">Ethneen</li>
            <li className="list-item">Top Talent</li>
            <li className="list-item">Categories</li>
            <li className="list-item">Find Projects</li>
            <li className="list-item">Contact</li>
        </ul>
        <div className="flex gap-[10px] items-center">
            <Button title="Sign In" secondaryBtn isHover={false} />
            <Button title="Post A Task" active isHover={false} />
        </div>
    </div>
}

export default Header
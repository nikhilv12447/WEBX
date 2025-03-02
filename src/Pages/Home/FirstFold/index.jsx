import "./style.css"
import Image from "../../../Components/Image"
import ethneenPhoneIcon from "./icons/ethneen-phone.svg"
import gearIcon from "./icons/gear-icon.svg"
import brokenCheckIcon from "./icons/check-circle-broken.svg"
import ToggleButton from "../../../Components/Button/Toggle"
import clientImage from "./icons/client.png"
import freelancerImage from "./icons/Freelancer.png"
import SearchByKeyword from "../../../Components/SearchByKeyword"
import { useState } from "react"
const imageArr = [
    {
        image: clientImage,
        points: ["Connect with top professionals", "Collect rewards and save money", "Easily manage your bookings"]
    },
    {
        image: freelancerImage,
        points: ["Smart Business Tools – Manage projects, contracts, and payments all in one place.", "Secure, Guaranteed Payments – No risks, just real opportunities.", "Early Adopter Badge – Stand Out & Build Trust Fast!"]
    }
]

function FirstFold() {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const { image, points } = imageArr[selectedIndex]

    return <div>
        <div className={`px-[100px] py-[60px] relative`}>
            <h1 className="font-mikado Bold DEMO font-bold text-[56px]/[75px] w-[638px] -tracking-[3px] text-[#002333]">Unlock the Potential of Your Team or Home with Skilled Professionals</h1>
            <p className="font-stolzl normal-16 text-[#627882CC] w-[460px] mb-[30px]">From online support to on-site expertise like plumbing, gardening, and more, we’ve got you covered.</p>
            <SearchByKeyword />
            <Image url={ethneenPhoneIcon} style="absolute top-10 right-32 z-[1]" />
        </div>
        <div className="pt-[60px] pb-[105px] relative bg-gradent3 text-center rounded-[48px]">
            <Image url={gearIcon} style="absolute top-0 left-0" />
            <p className="font-stolzl font-medium text-[56px]/[60px] text-white -tracking-[3px] pb-5 max-w-[996px] mx-auto">Ethneen <br /> is your all-in-one service hub</p>
            <p className="font-stolzl normal-20 text-[#FFFFFFCC] mb-8">Meeting the needs of both clients and freelancers</p>
            <ToggleButton toggleBetween={["I’m a client", "I’m a freelancer"]} style="toggle-btn-style normal-18 mb-8" onToggle={(state) => setSelectedIndex(state)} />
            <div className={"w-fit mx-auto relative"}>
                <Image url={image} style="max-w-[851px] mx-auto" />

                <Point text={points[0]} style="absolute top-[125px] -right-[227px]" />
                <Point text={points[1]} style="absolute -left-[179px] bottom-[80px]" />
                <Point text={points[2]} style="absolute right-[140px] -bottom-[45px]" />
            </div>
        </div>
    </div>
}

function Point({ text, style }) {
    return <div className={`p-6 bg-white w-[321px] rounded-[19px] shadow-[0_9px_20px_0_#0000001A] text-left ${style}`}>
        <Image url={brokenCheckIcon} />
        <span className="normal-18 text-[#111111] mt-3">{text}</span>
    </div>
}

export default FirstFold

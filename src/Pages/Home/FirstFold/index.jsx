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
        <div className={`container-style max-mob:mob-container-style`}>
            <h1 className="heading-style max-mob:mob-heading-style">Unlock the Potential of Your Team or Home with Skilled Professionals</h1>
            <p className="font-stolzl normal-16 text-[#627882CC] max-w-[460px] mb-[30px] max-mob:normal-12">From online support to on-site expertise like plumbing, gardening, and more, we’ve got you covered.</p>
            <SearchByKeyword />
            <Image url={ethneenPhoneIcon} style="absolute top-10 right-32 z-[1] max-tab:static max-mob:mob-phone-img-style" />
        </div>
        <div className="pt-[60px] pb-[105px] relative bg-gradent3 text-center rounded-[48px] max-mob:p-6">
            <Image url={gearIcon} style="absolute top-0 left-0 max-mob:w-[200px]" />
            <p className="font-stolzl font-medium text-[56px]/[60px] text-white -tracking-[3px] pb-5 max-w-[996px] mx-auto max-mob:text-3xl">Ethneen <br /> is your all-in-one service hub</p>
            <p className="font-stolzl normal-20 text-[#FFFFFFCC] mb-8 max-mob:normal-12">Meeting the needs of both clients and freelancers</p>
            <ToggleButton toggleBetween={["I’m a client", "I’m a freelancer"]} style="toggle-btn-style normal-18 mb-8 max-mob:mob-toggle-btn-style" onToggle={(state) => setSelectedIndex(state)} />
            <div className={"w-fit mx-auto relative"}>
                <Image url={image} style="max-w-[851px] mx-auto" />

                <Point text={points[0]} style="absolute top-[125px] -right-[227px] max-tab:static my-2" />
                <Point text={points[1]} style="absolute -left-[179px] bottom-[80px] max-tab:static mb-2" />
                <Point text={points[2]} style="absolute right-[140px] -bottom-[45px] max-tab:static mb-2" />
            </div>
        </div>
    </div>
}

function Point({ text, style }) {
    return <div className={`point-container-style max-mob:mob-point-container-style ${style}`}>
        <Image url={brokenCheckIcon} />
        <span className="normal-18 text-[#111111] mt-3">{text}</span>
    </div>
}

export default FirstFold

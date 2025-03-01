import "./style.css"
import Image from "../Image"
import DollarIcon from "./icons/DollarIcon"
import LocationIcon from "./icons/Location"
import verifiedTick from "./icons/Verified tick.svg"

function ExpertCard({ name, description, country, state, price, userIcon, active = false, style }) {

    return <div className={`border border-[#004B234D] rounded-2xl px-6 pb-6 pt-[74px] relative ${style} ${active ? "bg-secondaryGradent shadow-mainShadow" : "bg-white"}`}>
        <div className="absolute left-0 right-0 mx-auto -top-12">
            <div className="user-icon relative" style={{ "--user-icon": `url(${userIcon})` }}>
                <div className="size-24 absolute border-4 border-white rounded-full frame" />
                <Image url={verifiedTick} style="absolute right-1 bottom-1" />
            </div>
        </div>
        <h4 className={`font-semibold text-2xl mb-1 ${active ? "text-white" : "text-[#002333]"} `}>{name}</h4>
        <p className={`normal-16  mb-[18px] ${active ? "text-white" : "text-[#00233380]"}`}>{description}</p>

        <div className={`flex justify-between border-t border[#F6F6F6] pt-[18px] mb-5 text-left gap-[13px]`}>
            <div className="flex gap-1">
                <DollarIcon dark={!active} />
                <span className={`medium-14 text-nowrap ${active ? "text-white" : "text-primaryText"}`}>Design Advisory Charge</span>
            </div>
            <span className={`font-semibold text-base ${active ? "text-white" : "text-[#111111]"}`}>{price}</span>
        </div>
        <div className="flex justify-between text-left">
            <div className="flex gap-1">
                <LocationIcon dark={!active} />
                <span className={`medium-14 ${active ? "text-white" : "text-primaryText"}`}>{state}</span>
            </div>
            <span className={`font-semibold text-base ${active ? "text-white" : "text-[#111111]"}`}>{country}</span>
        </div>
    </div>
}

export default ExpertCard
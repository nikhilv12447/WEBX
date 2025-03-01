import "./style.css"
import Button from "../../../Components/Button"
import Image from "../../../Components/Image"
import robote from "./icons/Robote.png"
import gear from "./icons/gear.svg"

function NoorAi() {

    return <div className="py-[84.5px] bg-white relative">
        <div className="rounded-[48px] py-[68px] px-[100px] bg-gradent3 text-left">
            <p className="font-stolzl -tracking-[3px] font-semibold text-[56px]/[67px] text-white mb-5">Noor AI: It's not just <br /> fast —it's smart.</p>
            <p className="font-stolzl normal-16 text-[16px]/[19px] text-[#FFFFFFCC] mb-5 max-w-[578px]">Our AI algorithm quickly analyses your needs to match you with the most suitable providers. From finding a plumber to hiring a developer, Noor AI makes it fast and easy. It can even schedule appointments for you!</p>
            <Button title="Explore More" containerStyle="w-fit font-stolzl text-[#002333]" isHover={false} secondaryBtn />
        </div>
        <Image url={robote} style="absolute top-0 right-[164px]" />
        <Image url={gear} style="absolute top-[168px] right-0" />
    </div>
}

export default NoorAi
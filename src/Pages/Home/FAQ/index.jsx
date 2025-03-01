import "./style.css"
import Button from "../../../Components/Button"
import Image from "../../../Components/Image"
import crossIcon from "./icons/cross_svgrepo.svg"
import minusIcon from "./icons/minus_svgrepo.svg"
import gradentGear from "./icons/gear-gradent.svg"

function FAQs() {

    return <div className="py-[60px] relative">
        <p className="font-stolzl -tracking-[3px] font-semibold text-[56px]/[72px] text-[#002333] mb-[50px]">Frequently Asked <span className="text-gradent">Questions</span></p>

        <div className="max-w-[806px] mx-auto mb-[50px]">
            <div className="flex justify-between items-center rounded-2xl bg-secondaryGradent border border-[#004B234D] shadow-mainShadow p-6 text-left mb-[10px]">
                <div>
                    <p className="font-stolzl font-normal text-[24px]/[29px] text-[#FFFFFF] mb-1">How do I get started as a freelancer?</p>
                    <p className="font-stolzl font-normal text-[16px]/[19px] text-[#FFFFFFCC] max-w-[597px]">Sign up, complete your profile, and start browsing projects. Submit proposals and communicate with clients to get hired.</p>
                </div>
                <Image url={crossIcon} />
            </div>
            <div className="flex justify-between items-center rounded-2xl border border-[#1018284D] p-6 text-left mb-[10px]">
                    <p className="font-stolzl -tracking-[1px] font-semibold text-[24px]/[29px] text-primaryText">What types of projects can I find on Ethneen?</p>
                <Image url={minusIcon} />
            </div>
            <div className="flex justify-between items-center rounded-2xl border border-[#1018284D] p-6 text-left ">
                    <p className="font-stolzl -tracking-[1px] font-semibold text-[24px]/[29px] text-primaryText">How is payment handled on Ethneen?</p>
                <Image url={minusIcon} />
            </div>
        </div>
        <Button title="Contact our Team" activeStyle="w-fit mx-auto bg-secondaryGradent" isHover={false} active />
        <Image url={gradentGear} style="absolute left-0 top-[550px]"/>
    </div>
}

export default FAQs
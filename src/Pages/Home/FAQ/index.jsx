import "./style.css"
import Button from "../../../Components/Button"
import Image from "../../../Components/Image"
import crossIcon from "./icons/cross_svgrepo.svg"
import minusIcon from "./icons/minus_svgrepo.svg"
import gradentGear from "./icons/gear-gradent.svg"
import { useState } from "react"

const data = [
    {
        heading: "How do I get started as a freelancer?",
        description: "Sign up, complete your profile, and start browsing projects. Submit proposals and communicate with clients to get hired."
    },
    {
        heading: "What types of projects can I find on Ethneen?",
        description: "Sign up, complete your profile, and start browsing projects. Submit proposals and communicate with clients to get hired."
    },
    {
        heading: "How is payment handled on Ethneen?",
        description: "Sign up, complete your profile, and start browsing projects. Submit proposals and communicate with clients to get hired."
    }
]
function FAQs() {

    return <div className="py-[60px] relative max-mob:p-6">
        <p className="faq-heading-style max-mob:mob-faq-heading-style">Frequently Asked <span className="text-gradent">Questions</span></p>

        <div className="max-w-[806px] mx-auto mb-[50px]">
            {
                data.map(({ heading, description }, index) => {
                    return <FAQ key={index} heading={heading} description={description} />
                })
            }
        </div>
        <Button title="Contact our Team" activeStyle="w-fit mx-auto bg-secondaryGradent shadow-mainShadow" isHover={false} active />
        <Image url={gradentGear} style="absolute left-0 top-[550px] -z-[1]" />
    </div>
}

function FAQ({ heading, description }) {
    const [open, setOpen] = useState(false)

    if (open) {
        return <div className="flex justify-between items-center rounded-2xl bg-secondaryGradent border border-[#004B234D] shadow-mainShadow p-6 text-left mb-[10px]">
            <div>
                <p className="font-stolzl font-normal text-[24px]/[29px] text-[#FFFFFF] mb-1 max-mob:text-base">{heading}</p>
                <p className="font-stolzl font-normal text-[16px]/[19px] text-[#FFFFFFCC] max-w-[597px] max-mob:text-sm">{description}</p>
            </div>
            <button onClick={() => setOpen(false)}>
                <Image url={crossIcon} style="max-mob:w-[20px]"/>
            </button>
        </div>
    }
    return <div className="flex justify-between items-center rounded-2xl border border-[#1018284D] p-6 text-left mb-[10px]">
        <p className="font-stolzl -tracking-[1px] font-semibold text-[24px]/[29px] text-primaryText max-mob:text-base">{heading}</p>
        <button onClick={() => setOpen(true)}>
            <Image url={minusIcon} style="max-mob:w-[20px]"/>
        </button>
    </div>
}

export default FAQs
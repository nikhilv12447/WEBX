import "./style.css"
import gloob from "./icons/gloob.png"
import painPoint from "./icons/pain-point.png"
import pc from "./icons/pc.png"
import phone from "./icons/phone.png"
import seo from "./icons/seo.png"
import Link from "./icons/Link"
import Image from "../../../Components/Image"
import plumbing from "./icons/plumbing.png"
import gradening from "./icons/gardening.png"
import driveing from "./icons/driving.png"
import homeRepair from "./icons/home-repair.png"
import carWash from "./icons/car-wash.png"
import ToggleButton from "../../../Components/Button/Toggle"
import Button from "../../../Components/Button"
import { useState } from "react"

const onSiteServices = [
    {
        icon: plumbing,
        title: "Plumbing Services",
        description: "Skilled plumbers available for installations, repairs, and maintenance."
    },
    {
        icon: gradening,
        title: "Gardening & Landscaping",
        description: "Transform your outdoor spaces with our gardening and landscaping experts."
    },
    {
        icon: driveing,
        title: "Driver & Transportation",
        description: "Whether it's personal driving, delivery, or chauffeur services, ensuring safe and reliable journeys."
    },
    {
        icon: homeRepair,
        title: "Home Repairs & Maintenance",
        description: "Carpentry, electrical work, painting, and general maintenance to keep your space in top condition."
    },
    {
        icon: carWash,
        title: "Car Wash & Detailing",
        description: "All car washing and detailing solutions."
    }
]

const onlineServices = [
    {
        icon: painPoint,
        title: "Logo Design",
        description: "Creative logo designers crafting unique and memorable brand identities tailored to your business."
    },
    {
        icon: gloob,
        title: "Website Development",
        description: "Expert website developers building responsive, user-friendly, and visually stunning websites to elevate your online presence."
    },
    {
        icon: seo,
        title: "SEO",
        description: "Professional SEO specialists optimizing your website to boost rankings, drive traffic, and enhance online visibility."
    },
    {
        icon: phone,
        title: "Social Media Marketing",
        description: "Social media experts growing your brand and driving results."
    },
    {
        icon: pc,
        title: "Software Development",
        description: "Skilled developers delivering custom software solutions."
    }
]
const data = {
    "On-site Services": onSiteServices,
    "Online Services": onlineServices,
    "All": [...onSiteServices, ...onlineServices]
}

function Services() {
    const [selectedTab, setSelectedTab] = useState("On-site Services")
    const [activeIndex, setActiveIndex] = useState(0)

    return <>
        <div className="px-[100px] py-[60px]">
            <div className="text-center mb-8">
                <p className="font-stolzl -tracking-[3px] font-semibold text-[56px]/[72px] text-[#002333] mb-5">Your <span className="text-gradent">One-Stop Online</span> Services for <br /> Everything You Need</p>
                <p className="font-stolzl normal-16 text-[#002333] mb-5">Your premier online marketplace. Find quality products and services, connect <br /> with trusted sellers,and enjoy a seamless shopping experience today.</p>
                <ToggleButton toggleBetween={["On-site Services", "Online Services", "All"]} style="normal-18 mx-auto" onToggle={(index, tabName) => setSelectedTab(tabName)} />
            </div>
            <div>
                <div className="grid grid-cols-3 col-start gap-5">
                    {
                        data[selectedTab].map(({ icon, title, description }, index) => {
                            return <ServiceCard key={index} icon={icon} title={title} description={description} style={index === 1 ? "col-start-2 col-end-4" : ""} active={index === activeIndex} onClick={() => setActiveIndex(index)} />
                        })
                    }

                </div>
            </div>

        </div>
        <div className="bg-secondaryGradent py-[60px] rounded-[48px] text-center">
            <div className="max-w-[766px] mx-auto">
                <p className="font-stolzl -tracking-[3px] font-medium text-[56px]/[72px] text-[#FFFFFF] drop-shadow-primary [text-shadow:_0_4px_4px_#00000080] mb-5">Most Rigorously Screened Talent in the top 1%</p>
                <p className="font-stolzl normal-16 text-[#FFFFFF] [text-shadow:_0_4px_4px_#00000080] mb-5">Within the top 1%, discover elite talent meticulously vetted to uphold the highest standards, ensuring excellence and unparalleled expertise.</p>
                <Button title="Explore more Freelancers" deactiveStyle="bg-white font-stolzl text-[#002333]" containerStyle="w-fit rounded-[39px] normal-18 mx-auto shadow-[0_1px_2px_0_#1018280D]" isHover={false} secondaryBtn />
            </div>
        </div>
    </>
}

function ServiceCard({ icon, title, description, link = "#", active, style, onClick }) {
    return <div className={`cursor-pointer ${active ? "active-card " : "inactive-card"} ${style}`} onClick={onClick}>
        <div className="flex justify-between mb-10">
            <Image url={icon} />
            <a href={link}>
                <Link dark={!active} />
            </a>
        </div>
        <h4 className="title medium-28 mb-5">{title}</h4>
        <p className="w-">{description}</p>
    </div>
}

export default Services
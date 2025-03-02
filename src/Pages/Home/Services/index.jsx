import "./style.css"
import gloob from "./icons/gloob.png"
import painPoint from "./icons/pain-point.png"
import pc from "./icons/pc.png"
import phone from "./icons/phone.png"
import seo from "./icons/seo.png"
import Link from "./icons/Link"
import Image from "../../../Components/Image"
import ToggleButton from "../../../Components/Button/Toggle"
import Button from "../../../Components/Button"

function Services() {

    return <>
        <div className="px-[100px] py-[60px]">
            <div className="text-center mb-8">
                <p className="font-stolzl -tracking-[3px] font-semibold text-[56px]/[72px] text-[#002333] mb-5">Your <span className="text-gradent">One-Stop Online</span> Services for <br /> Everything You Need</p>
                <p className="font-stolzl normal-16 text-[#002333] mb-5">Your premier online marketplace. Find quality products and services, connect <br /> with trusted sellers,and enjoy a seamless shopping experience today.</p>
                <ToggleButton toggleBetween={["On-site Services", "Online Services", "All"]} style="normal-18 mx-auto" />
            </div>
            <div>
                <div className="flex gap-5 mb-5">
                    <ServiceCard icon={painPoint} title="Logo Design" description="Creative logo designers crafting unique and memorable brand identities tailored to your business." active style="basis-1/3" />
                    <ServiceCard icon={gloob} title="Website Development" description="Expert website developers building responsive, user-friendly, and visually stunning websites to elevate your online presence." style="basis-2/3" />
                </div>
                <div className="flex flex-row gap-5">
                    <ServiceCard icon={seo} title="SEO" description="Professional SEO specialists optimizing your website to boost rankings, drive traffic, and enhance online visibility." style="basis-1/3" />
                    <ServiceCard icon={phone} title="Social Media Marketing" description="Social media experts growing your brand and driving results." style="basis-1/3" />
                    <ServiceCard icon={pc} title="Software Development" description="Skilled developers delivering custom software solutions." style="basis-1/3" />
                </div>
            </div>

        </div>
        <div className="bg-secondaryGradent py-[60px] rounded-[48px]">
            <div className="max-w-[766px] mx-auto">
                <p className="font-stolzl -tracking-[3px] font-medium text-[56px]/[72px] text-[#FFFFFF] drop-shadow-primary [text-shadow:_0_4px_4px_#00000080] mb-5">Most Rigorously Screened Talent in the top 1%</p>
                <p className="font-stolzl normal-16 text-[#FFFFFF] [text-shadow:_0_4px_4px_#00000080] mb-5">Within the top 1%, discover elite talent meticulously vetted to uphold the highest standards, ensuring excellence and unparalleled expertise.</p>
                <Button title="Explore more Freelancers" deactiveStyle="bg-white font-stolzl text-[#002333]" containerStyle="w-fit rounded-[39px] normal-18 mx-auto shadow-[0_1px_2px_0_#1018280D]" isHover={false} secondaryBtn />
            </div>
        </div>
    </>
}

function ServiceCard({ icon, title, description, link = "#", active, style }) {
    return <div className={`${active ? "active-card " : "inactive-card"} ${style}`}>
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
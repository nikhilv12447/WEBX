import "./style.css"
import Form from "../../Components/Form"
import formConfig from "./formConfig"
import Image from "../../Components/Image"
import userIdentityIcon from "./icon/Frame.svg"
import UserIcon from "./icon/UserIcon"
import DlIcon from "./icon/DlIcon"
import FileShield from "./icon/FileShield"
import { useState } from "react"
import Button from "../../Components/Button"

function IdVerification({ }) {
    const [activeCard, setActiveCard] = useState("user")
    const [formData, setFormData] = useState({})
    function onFormSubmit(e) {
        e.preventDefault()
        console.log(formData)
    }
    return <div>
        <div className="id-verification-container mb-6">
            <div className="py-[18px]">
                <h1 className="font-medium text-[32px] text-white mb-[10px]">Identity Verification</h1>
                <p className="font-normal text-base text-white w-[404px] opacity-80">Please choose to submit any of the government-issued documents listed below. User general infos are common for any documents submitted.</p>
            </div>
            <Image url={userIdentityIcon} />
        </div>

        <div className="flex flex-row gap-6 mb-6">
            <VerificationCard key="user" Icon={UserIcon} text="National ID Card" active={activeCard === "user"} onCardClick={() => setActiveCard("user")} />
            <VerificationCard key="dl" Icon={DlIcon} text="Driving License" active={activeCard === "dl"} onCardClick={() => setActiveCard("dl")} />
            <VerificationCard key="passport" Icon={FileShield} text="Passport" active={activeCard === "passport"} onCardClick={() => setActiveCard("passport")} />
        </div>

        <div className="bg-white p-6 rounded-2xl">
            <form onSubmit={onFormSubmit}>
                <Form formConfig={formConfig} onFormChange={formData => setFormData(formData)} />
                <Button title="Submit" active />
            </form>
        </div>

    </div>
}

function VerificationCard({ active, Icon, text, onCardClick }) {

    if (active) {
        return <div className="active-card-container basis-1/3" onClick={onCardClick}>
            <div className="flex gap-3 inactive-card py-5 px-4 rounded-2xl bg-white items-center cursor-pointer">
                <div className="size-12 rounded-full active-icon-bg flex justify-center items-center">
                    <Icon />
                </div>
                <span className="font-medium text-lg form-label-color">{text}</span>
            </div>
        </div>
    }

    return <div className="flex gap-3 inactive-card py-5 px-4 rounded-2xl bg-white basis-1/3 items-center border border-[#0023334D] cursor-pointer" onClick={onCardClick}>
        <div className="size-12 rounded-[10px] bg-white border border-[#E4E7EC] flex justify-center items-center">
            <Icon dark />
        </div>
        <span className="font-medium text-lg form-label-color">{text}</span>
    </div>
}

export default IdVerification
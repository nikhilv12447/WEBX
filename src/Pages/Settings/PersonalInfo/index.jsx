import "./style.css"
import Button from "../../../Components/Button"
import MessageIcon from "../icon/MessageIcon"
import userIcon from "../icon/UserIcon"
import PencilLine from "../icon/PencilLine"
import Form from "../../../Components/Form"
import formConfig from "./formConfig"

const data = {
    firstName: "Ryan",
    lastName: "Wayne",
    email: "riad@gmail.com",
    country: "argentina",
    state: "buenos-aires",
    city: "lende-pral",
    experience: "Junior"
}

function PersonalInfo({ }) {
    return <div>
        <div className="bg-white p-6 flex flex-row items-center justify-between rounded-2xl border border-[#0023334D] mb-6">
            <div className="flex flex-row gap-[18px]">
                <div className="size-[52px] rounded-full border border-[#00000014]" />
                <div>
                    <p className="font-medium text-lg form-label-color mb-1">Afifa</p>
                    <p className="font-normal text-base text-color2">afifa@ethneen.co</p>
                </div>
            </div>
            <div className="flex flex-row gap-3">
                <Button Icon={MessageIcon} title="Submit Feedback" style="feedback-btn" secondaryBtn isHover={false} />
                <Button Icon={userIcon} title="Change Photo" active />
            </div>
        </div>
        <div className="bg-white rounded-2xl border border-[#0023334D] p-6">
            <div className="flex justify-between">
                <span className="font-medium text-lg text-primary-color">Personal Information</span>
                <Button Icon={PencilLine} title="Edit Info" style="gap-1" secondaryBtn isHover={false} />
            </div>
            <Form formConfig={formConfig} data={data} onFormChange={(formData) => console.log(formData)} />
        </div>
    </div>
}

export default PersonalInfo
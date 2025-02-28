import "./style.css"
import formConfig, { data } from "./formConfig"
import Form from "../../../../Components/Form"
import Button from "../../../../Components/Button"

function PersonalInfoModal({ onClose }) {

    return <div className="px-6 pb-6 pt-5">
        <form action="">
            <Form formConfig={formConfig} data={data} />
            <div className="flex justify-between gap-6 pt-1">
                <Button title="close" containerStyle="w-full" style="justify-center" secondaryBtn isHover={false} onClick={onClose} />
                <Button type="submit" title="Save" containerStyle="w-full" style="justify-center" active isHover={false} />
            </div>
        </form>
    </div>
}

export default PersonalInfoModal
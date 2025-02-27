import "./style.css"
import formConfig from "./formConfig"
import Form from "../../../../Components/Form"

function PersonalInfoModal({ }) {

    return <div className="px-6 pb-6 pt-5">
        <Form formConfig={formConfig} />
    </div>
}

export default PersonalInfoModal
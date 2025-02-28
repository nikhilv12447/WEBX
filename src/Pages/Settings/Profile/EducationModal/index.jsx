import "./style.css"
import formConfig, { conf } from "./formConfig"
import Form from "../../../../Components/Form"
import Button from "../../../../Components/Button"

function EducationModal({ edit }) {

    return <div className="px-6 pb-6 pt-5">
        <form action="">
            <Form formConfig={edit ? conf : formConfig} />
            <div className="flex justify-between gap-6 pt-1">
                <Button title="close" width="full" style="justify-center" secondaryBtn isHover={false} />
                <Button title={edit ? "Update" : "Save"} width="full" style="justify-center" active isHover={false} />
            </div>
        </form>
    </div>
}

export default EducationModal
import React, { useEffect, useState } from "react"
import "./style.css"
import Input from "../Input"
import DropDown from "../DropDown"
import InputFile from "../InputFile"
import TextArea from "../TextArea"

function getForm(formConfig = [], formData, setFormData, isInLine) {
    return <div className={isInLine ? "flex justify-between gap-5" : ""}>
        {
            formConfig.map((field) => {
                const { type, fields, placeholder, id, label, options, style, description, fileInfo, key, defaultValue } = field
                if (fields) return getForm(fields, formData, setFormData, true)

                switch (type) {
                    case "TEXT":
                    case "EMAIL":
                    case "NUMBER":
                        return <div className="mb-5 w-full">
                            <label className="font-medium text-sm form-label-color" htmlFor={id}>{label}</label>
                            <Input type={type.toLowerCase()} style={style} id={id} placeholder={placeholder} handleOnChange={e => setFormData({ ...formData, [key]: e.target.value })} value={formData.hasOwnProperty(key) ? formData[key] : defaultValue} />
                        </div>
                    case "DROP_DOWN":
                        return <div className="mb-5 w-full">
                            <label className="font-medium text-sm form-label-color" htmlFor={id}>{label}</label>
                            <DropDown placeHolder={placeholder} options={options} style={style} onSelect={(value, text) => setFormData({ ...formData, [key]: value })} defaultValue={defaultValue} />
                        </div>
                    case "FILE":
                        return <div className="mb-5 w-full">
                            <InputFile style={style} description={description} fileInfo={fileInfo} />
                        </div>
                    case "TEXT_AREA":
                        return <div className="mb-5 w-full">
                            <label className="font-medium text-sm form-label-color" htmlFor={id}>{label}</label>
                            <TextArea id={id} placeHolder={placeholder} options={options} style={style} onSelect={(value, text) => setFormData({ ...formData, [key]: value })} defaultValue={defaultValue} />
                        </div>
                }
            })
        }
    </div>
}
function Form({ formConfig = [], onFormChange }) {
    const [formData, setFormData] = useState({})

    useEffect(() => {
        onFormChange && onFormChange(formData)
    }, [formData])

    return <div>
        {getForm(formConfig, formData, setFormData)}
    </div>
}

export default React.memo(Form)
import React, { useEffect, useState } from "react"
import "./style.css"
import Input from "../Input"
import DropDown from "../DropDown"
import InputFile from "../InputFile"
import TextArea from "../TextArea"
import Image from "../Image"
import starsIcon from "./icons/stars-02.svg"
import InputDate from "../InputDate"

function getForm(formConfig = [], formData, setFormData, isInLine) {
    return <div className={isInLine ? "flex justify-between gap-5 mb-5" : ""}>
        {
            formConfig.map((field) => {
                const { type, fields, placeholder, id, label, options, style, description, fileInfo, key, defaultValue, info, isNoor = true } = field
                if (fields) return getForm(fields, formData, setFormData, true)

                switch (type) {
                    case "TEXT":
                    case "EMAIL":
                    case "NUMBER":
                        return <div className={isInLine ? "w-full" : "mb-5 w-full"}>
                            <label className="font-medium text-sm form-label-color" htmlFor={id}>{label}</label>
                            <Input type={type.toLowerCase()} style="form-input-style" id={id} placeholder={placeholder} handleOnChange={e => setFormData({ ...formData, [key]: e.target.value })} value={formData.hasOwnProperty(key) ? formData[key] : defaultValue} />
                        </div>
                    case "DROP_DOWN":
                        return <div className={isInLine ? "w-full" : "mb-5 w-full"}>
                            <label className="font-medium text-sm form-label-color" htmlFor={id}>{label}</label>
                            <DropDown placeHolder={placeholder} options={options} style="form-dropdown-style" onSelect={(value, text) => setFormData({ ...formData, [key]: value })} defaultValue={formData.hasOwnProperty(key) ? formData[key] : defaultValue} />
                        </div>
                    case "FILE":
                        return <div className={isInLine ? "w-full" : "mb-5 w-full"}>
                            <InputFile style={style} description={description} fileInfo={fileInfo} />
                        </div>
                    case "TEXT_AREA":
                        return <div className={isInLine ? "w-full" : "mb-5 w-full"}>
                            <div className="flex justify-between mb-[6px]">
                                <label className="font-medium text-sm form-label-color" htmlFor={id}>{label}</label>
                                {
                                    isNoor && <button type="button" className="flex gap-1 items-center">
                                        <Image url={starsIcon} />
                                        <span className="font-medium text-sm text-[#008000]">Write with Noor</span>
                                    </button>
                                }
                            </div>
                            <TextArea id={id} placeholder={placeholder} options={options} style="form-text-area-style" handleOnChange={(e) => setFormData({ ...formData, [key]: e.target.value })} value={formData.hasOwnProperty(key) ? formData[key] : defaultValue} />
                        </div>
                    case "DATE":
                        return <div className={isInLine ? "w-full" : "mb-5 w-full"}>
                            <label className="font-medium text-sm form-label-color" htmlFor={id}>{label}</label>
                            <InputDate style="form-input-style" id={id} placeholder={placeholder} handleOnChange={e => setFormData({ ...formData, [key]: e.target.value })} value={formData.hasOwnProperty(key) ? formData[key] : defaultValue} info={info} />
                        </div>
                }
            })
        }
    </div>
}
function Form({ formConfig = [], data = {}, onFormChange }) {
    const [formData, setFormData] = useState(data)

    useEffect(() => {
        onFormChange && onFormChange(formData)
    }, [formData])

    return <div>
        {getForm(formConfig, formData, setFormData)}
    </div>
}

export default React.memo(Form)
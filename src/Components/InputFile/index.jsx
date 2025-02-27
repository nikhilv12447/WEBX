import "./style.css"
import Image from "../Image"
import uploadIcon from "./icon/upload-cloud.svg"

function InputFile({ description, fileInfo, style }) {

    return <div className={`py-4 px-6 bg-[#F9FAFB] border border-[#E4E7EC] rounded-xl ${style}`}>
        <div className="relative bg-white size-10 border border-[#E4E7EC] rounded-lg flex justify-center items-center overflow-hidden mx-auto mb-3">
            <Image url={uploadIcon} />
            <input className="transform-cpu scale-150 absolute left-0 opacity-0 cursor-pointer" type="file" name="" id="" />
        </div>
        <div className="text-center">
            <p className="mb-1 font-normal text-sm text-color2">{description}</p>
            <p className="font-normal text-xs text-color2">{fileInfo}</p>
        </div>
    </div>
}

export default InputFile
import "./style.css"
import Image from "../Image"
import ethneenIcon from "./icons/ethneen-icon.svg"
import clockIcon from "./icons/clock.svg"

function VideoCard({ title, desription, style, imageStyle }) {

    return <div className={`${style}`}>
        <div className="video-thumbnil basis-1/2">
            <div className="absolute flex gap-[6px] px-[15px] py-[3px] items-center bg-[#7D7D7D] rounded-[60px] top-[28px] left-[23px]">
                <Image url={clockIcon} />
                <span className="font-stolzl normal-14 text-white">1 Hour</span>
            </div>
            <Image url={ethneenIcon} style={imageStyle} />
        </div >
        <div className="pt-5 text-left basis-1/2">
            <h4 className="font-stolzl font-semibold text-2xl text-[#002333] mb-[10px]">{title}</h4>
            <p className="font-stolzl normal-18 text-[#00233380]">{desription}</p>
        </div>
    </div>
}

export default VideoCard
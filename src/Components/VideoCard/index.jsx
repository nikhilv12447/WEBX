import "./style.css"
import Image from "../Image"
import ethneenIcon from "./icons/ethneen-icon.svg"
import clockIcon from "./icons/clock.svg"

function VideoCard({ title, desription, style, imageStyle }) {

    return <div className={`${style}`}>
        <div className="video-thumbnil basis-1/2">
            <div className="absolute flex gap-[6px] px-[15px] py-[3px] items-center bg-[#7D7D7D] rounded-[60px] top-[28px] left-[23px] hour-style">
                <Image url={clockIcon} />
                <span className="font-stolzl normal-14 text-white">1 Hour</span>
            </div>
            <Image url={ethneenIcon} style={imageStyle} />
        </div >
        <div className="pt-5 text-left basis-1/2">
            <h4 className="video-card-heading max-mob:mob-video-card-heading">{title}</h4>
            <p className="video-card-subheading normal-18 max-mob:mob-video-card-subheading">{desription}</p>
        </div>
    </div>
}

export default VideoCard
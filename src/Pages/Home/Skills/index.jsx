import "./style.css"
import Button from "../../../Components/Button"
import Image from "../../../Components/Image"
import gear from "./icons/gear-gradent.svg"
import VideoCard from "../../../Components/VideoCard"

function Skills() {

    return <div className="py-[60px] px-[100px] relative">
        <Image url={gear} style="absolute right-0 -top-[270px] -z-[1]" />
        <p className="font-stolzl -tracking-[3px] font-semibold text-[56px]/[72px] text-[#002333] mb-[50px] text-center">Learn in-Demand skills <br /> with <span className="text-gradent">Ethneen</span></p>

        <div className="flex gap-[50px] h-[600px]">
            <div className="basis-1/2">
                <VideoCard title="Getting Started" desription="Learn about how to get started on Ethneen and all the aspects of your Ethneen profile." style="main-video-card"/>
            </div>
            <div className="video-list basis-1/2 overflow-y-auto">
                <VideoCard title="Getting Started" desription="Learn about how to get started on Ethneen and all the aspects of your Ethneen profile." style="flex gap-4 mb-6" imageStyle="w-[100px]"/>
                <VideoCard title="Getting Started" desription="Learn about how to get started on Ethneen and all the aspects of your Ethneen profile." style="flex gap-4 mb-6" imageStyle="w-[100px]"/>
                <VideoCard title="Getting Started" desription="Learn about how to get started on Ethneen and all the aspects of your Ethneen profile." style="flex gap-4 mb-6" imageStyle="w-[100px]"/>
                <VideoCard title="Getting Started" desription="Learn about how to get started on Ethneen and all the aspects of your Ethneen profile." style="flex gap-4 mb-6" imageStyle="w-[100px]"/>
            </div>
        </div>
    </div>
}

export default Skills
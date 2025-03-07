import "./style.css"
import Image from "../../../Components/Image"
import gear from "./icons/gear-gradent.svg"
import VideoCard from "../../../Components/VideoCard"

function Skills() {

    return <div className="py-[60px] relative max-mob:p-6">
        <Image url={gear} style="absolute right-0 -top-[270px] -z-[1] max-mob:w-48" />
        <p className="skill-heading-style max-mob:mob-skill-heading-style">Learn in-Demand skills <br /> with <span className="text-gradent">Ethneen</span></p>

        <div className="flex gap-[50px] max-w-[1240px] mx-auto max-mob:block">
            <div className="basis-1/2 max-mob:mb-6">
                <VideoCard title="Getting Started" desription="Learn about how to get started on Ethneen and all the aspects of your Ethneen profile." style="main-video-card max-mob:mob-main-video-card" imageStyle="max-mob:w-[100px]"/>
            </div>
            <div className="video-list basis-1/2 h-[600px] overflow-y-auto">
                <VideoCard title="Getting Started" desription="Learn about how to get started on Ethneen and all the aspects of your Ethneen profile." style="video-list-video-card max-mob:mob-video-list-video-card" imageStyle="w-[100px]"/>
                <VideoCard title="Getting Started" desription="Learn about how to get started on Ethneen and all the aspects of your Ethneen profile." style="flex gap-4 mb-6" imageStyle="w-[100px]"/>
                <VideoCard title="Getting Started" desription="Learn about how to get started on Ethneen and all the aspects of your Ethneen profile." style="flex gap-4 mb-6" imageStyle="w-[100px]"/>
                <VideoCard title="Getting Started" desription="Learn about how to get started on Ethneen and all the aspects of your Ethneen profile." style="flex gap-4 mb-6" imageStyle="w-[100px]"/>
            </div>
        </div>
    </div>
}

export default Skills
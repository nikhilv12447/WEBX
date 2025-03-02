import "./style.css"
import Button from "../../../Components/Button"
import Image from "../../../Components/Image"
import playIcon from "./icons/play-btn.svg"
import { useRef, useState } from "react"

const videoSrc = "https://s3-figma-videos-production-sig.figma.com/video/1258452734927485774/TEAM/5882/339f/-1f05-45b0-a627-8668b8dc23d9?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GdAvooPh6Tl8vjI9LYEVFQ5tpkzlTNnOmoZPx4X4vT6r0drQVxfn3l1aI9rDrTIDQ-oH~mivSp-HJRi5o4X4MPPJFjvD6N5iqijHOGvkE7dGSmyWXnLI7fAx0vza9t1vA-k1gNiw0OlUDTan5jSbjmYF75xCfEmkQjdhrCd0sgR6dx3OrLw~0lgeGcvbUNO~cHIEr9EUmIapCiDwvqjFS1HO6Zjt~prJh9XrsRi-QlowrL7~fAsH0lPsgEkJgCcFtzITcKKhN0hYa6jbqWKNDvzagzPMmTGiQoce3YnOh82JmLwgJw81Ve9NFyKv5QX47snTcmey8jejaD2l3-wepw__"
function Action() {
    const [isPlay, setIsplay] = useState(false)
    const videoRef = useRef()

    function handleVideoPlay() {
        setIsplay(true)
        videoRef.current.play()
    }

    return <div className="">
        <p className="font-stolzl -tracking-[3px] font-semibold text-[56px]/[72px] text-[#002333] mb-[50px] text-center">See <span className="text-gradent">Ethneen</span> in Action</p>
        <div className="mb-[50px] relative">
            <video ref={videoRef} src={videoSrc} className="rounded-[25px]" controls={isPlay} onPause={() => setIsplay(false)}></video>
            {
                !isPlay && <div className="absolute w-full h-full video-gradent top-0 rounded-[25px] flex justify-center items-center cursor-pointer" onClick={handleVideoPlay}>
                    <Image style="flex justify-center items-center size-24 rounded-full bg-secondaryGradent" url={playIcon} />
                </div>
            }
        </div>

        <Button title="Explore More" activeStyle="w-fit mx-auto" isHover={false} active />
    </div>
}

export default Action
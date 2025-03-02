import "./style.css"
import Image from "../../../Components/Image"
import SearchByKeyword from "../../../Components/SearchByKeyword"
import ethneeIcon from "./icons/ethneen-icon.svg"
import CommunityCard from "../../../Components/CommunityCard"
import discover from "../icons/discover.png"
import howToHire from "../icons/how-to-hire.png"
import forClient from "../icons/for-client.png"
import Tabs from "../../../Components/Tabs"
import Button from "../../../Components/Button"

const data = [
    {
        title: "Guide to discover",
        desription: "This guide will provide the steps to finding your perfect match on Ethneen using our Discover tool.",
        imageUrl: discover
    },
    {
        title: "How to hire on Ethneen",
        desription: "There are three ways to hire on Ethneen — we’ll go through all three of these in this article and when to use each one!",
        imageUrl: howToHire
    },
    {
        title: "Ethneen for clients",
        desription: "With Ethneen, you can discover and hire top-notch talent, manage payments, contracts, and projects, and work the way you want.",
        imageUrl: forClient
    }
]

const singleTabData = [
    {
        title: "Guide to discover",
        desription: "This guide will provide the steps to finding your perfect match on Ethneen using our Discover tool.",
        imageUrl: discover
    },
    {
        title: "How to hire on Ethneen",
        desription: "There are three ways to hire on Ethneen — we’ll go through all three of these in this article and when to use each one!",
        imageUrl: howToHire
    },
    {
        title: "Guide to discover",
        desription: "With Ethneen, you can discover and hire top-notch talent, manage payments, contracts, and projects, and work the way you want.",
        imageUrl: forClient
    }, {
        title: "Guide to discover",
        desription: "This guide will provide the steps to finding your perfect match on Ethneen using our Discover tool.",
        imageUrl: discover
    },
    {
        title: "How to hire on Ethneen",
        desription: "There are three ways to hire on Ethneen — we’ll go through all three of these in this article and when to use each one!",
        imageUrl: howToHire
    },
    {
        title: "Guide to discover",
        desription: "With Ethneen, you can discover and hire top-notch talent, manage payments, contracts, and projects, and work the way you want.",
        imageUrl: forClient
    }
]
const tabData = {
    "All": <Grid data={singleTabData}/>,
    "Company News": <Grid data={singleTabData}/>,
    "Product & Innovation": <Grid data={singleTabData}/>,
    "People & Culture": <Grid data={singleTabData}/>,
    "Social Impact": <Grid data={singleTabData}/>,
    "Research & Reports": <Grid data={singleTabData}/>,
}

function Grid({ data }) {
    return <div className="grid grid-cols-3 gap-5">
        {data.map(({ title, desription, imageUrl }, index) => {
            return <CommunityCard key={index} desription={desription} imageUrl={imageUrl} title={title} style="comm-card-style mx-auto" btnText="View Discussions" />
        })}
    </div>
}
function FirstFold() {

    return <div>
        <div className={`py-[60px] mx-auto relative text-center`}>
            <h1 className="font-mikado font-bold text-[56px]/[75px] -tracking-[3px] text-[#002333]">Ethneen Community</h1>
            <p className="font-stolzl normal-16 text-[#627882CC] mx-auto max-w-[638px] mb-[30px]">Stay Informed with the Latest Insights: Explore articles, news, and expert opinions on the future of work, freelancing trends, and business innovation</p>
            <SearchByKeyword style="mx-auto" />
            <Image url={ethneeIcon} style="absolute w-[146px] top-[57px] left-[181px]" />
            <Image url={ethneeIcon} style="absolute w-[217px] right-[98px] -bottom-[62px]" />
        </div>
        <div className="py-[60px]">
            <p className="font-stolzl -tracking-[3px] font-semibold text-[56px]/[72px] text-[#002333] mb-[50px]">Latest <span className="text-gradent">Topics</span></p>
            <div className="flex gap-5 mb-[50px] justify-center">
                {
                    data.map(({ desription, imageUrl, title }, index) => <CommunityCard key={index} desription={desription} imageUrl={imageUrl} title={title} style="comm-card-style" btnText="View Discussions" />)
                }
            </div>
        </div>

        <div className="py-[60px] bg-secondaryGradent">
            <span className="block font-stolzl font-medium text-[56px]/[67px] text-white -tracking-[3px] mb-[50px]">Upcoming Events</span>

            <div className="flex gap-5 mb-[50px] justify-center">
                {
                    data.map(({ desription, imageUrl, title }, index) => <CommunityCard
                        key={index}
                        desription={desription}
                        imageUrl={imageUrl}
                        title={title}
                        style="comm-card-style"
                        btnText="Reserve Seat"
                        dateTime="25 JAN    •    18:00 CST"
                        isViewDiscussion
                    />)
                }
            </div>
        </div>

        <div className="py-[60px]">
            <p className="font-stolzl -tracking-[3px] font-semibold text-[56px]/[72px] text-[#002333] mb-[20px]">Browse by <span className="text-gradent">Categories</span></p>

            <Tabs tabs={tabData} tabStyle="override-tab-style"/>

            <div className="flex gap-[10px] justify-center mt-[50px]">
                <Button title="01" activeStyle="active-pagination-btn" active isHover={false}/>
                <Button title="02" deactiveStyle="border border-[#004B2333] text-[#004B23]" isHover={false}/>
                <Button title="03" deactiveStyle="border border-[#004B2333] text-[#004B23]" isHover={false}/>
                <Button title="04" deactiveStyle="border border-[#004B2333] text-[#004B23]" isHover={false}/>
                <Button title="05" deactiveStyle="border border-[#004B2333] text-[#004B23]" isHover={false}/>
                <Button title="Next &gt;" activeStyle="active-pagination-btn" active isHover={false}/>
            </div>
        </div>
    </div>
}

export default FirstFold

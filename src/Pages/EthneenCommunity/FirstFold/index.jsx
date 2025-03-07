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
    "Company News": <Grid data={singleTabData.slice(0, 5)}/>,
    "Product & Innovation": <Grid data={singleTabData.slice(0, 3)}/>,
    "People & Culture": <Grid data={singleTabData.slice(0, 4)}/>,
    "Social Impact": <Grid data={singleTabData.slice(0, 2)}/>,
    "Research & Reports": <Grid data={singleTabData.slice(0, 4)}/>,
}

function Grid({ data }) {
    return <div className="grid grid-cols-3 gap-5 max-tab:grid-cols-2 max-mob:grid-cols-1">
        {data.map(({ title, desription, imageUrl }, index) => {
            return <CommunityCard key={index} desription={desription} imageUrl={imageUrl} title={title} style="comm-card-style mx-auto" btnText="View Discussions" />
        })}
    </div>
}
function FirstFold() {

    return <div>
        <div className={`py-[60px] mx-auto relative text-center max-mob:p-6`}>
            <h1 className="community-heading-style max-mob:mob-community-heading-style">Ethneen Community</h1>
            <p className="font-stolzl normal-16 text-[#627882CC] mx-auto max-w-[638px] mb-[30px] max-mob:text-[12px]">Stay Informed with the Latest Insights: Explore articles, news, and expert opinions on the future of work, freelancing trends, and business innovation</p>
            <SearchByKeyword style="mx-auto" />
            <Image url={ethneeIcon} style="absolute w-[146px] top-[57px] left-[181px] max-tab:hidden" />
            <Image url={ethneeIcon} style="absolute w-[217px] right-[98px] -bottom-[62px] max-tab:hidden" />
        </div>
        <div className="py-[60px] max-mob:py-6">
            <p className="latest-topic-comm-heading-style max-mob:mob-latest-topic-comm-heading-style">Latest <span className="text-gradent">Topics</span></p>
            <div className="flex gap-5 mb-[50px] justify-center max-mob:grid grid-cols-1">
                {
                    data.map(({ desription, imageUrl, title }, index) => <CommunityCard key={index} desription={desription} imageUrl={imageUrl} title={title} style="comm-card-style mx-auto" btnText="View Discussions" />)
                }
            </div>
        </div>

        <div className="py-[60px] bg-secondaryGradent max-mob:py-6">
            <span className="comm-event-heading-style max-mob:mob-comm-event-heading-style">Upcoming Events</span>

            <div className="flex gap-5 mb-[50px] justify-center max-mob:grid grid-cols-1">
                {
                    data.map(({ desription, imageUrl, title }, index) => <CommunityCard
                        key={index}
                        desription={desription}
                        imageUrl={imageUrl}
                        title={title}
                        style="comm-card-style mx-auto"
                        btnText="Reserve Seat"
                        dateTime="25 JAN    •    18:00 CST"
                        isViewDiscussion
                    />)
                }
            </div>
        </div>

        <div className="py-[60px] max-mob:py-6">
            <p className="comm-browse-heading-style max-mob:mob-comm-browse-heading-style">Browse by <span className="text-gradent">Categories</span></p>

            <Tabs tabs={tabData} tabStyle="override-tab-style max-mob:!grid grid-cols-2"/>

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

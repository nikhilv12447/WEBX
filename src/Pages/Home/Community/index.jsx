import "./style.css"
import CommunityCard from "../../../Components/CommunityCard"
import discover from "./icons/discover.png"
import howToHire from "./icons/how-to-hire.png"
import forClient from "./icons/for-client.png"

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
    },
    {
        title: "Guide to discover",
        desription: "This guide will provide the steps to finding your perfect match on Ethneen using our Discover tool.",
        imageUrl: discover
    }
]
function Community() {

    return <div className="py-[60px] max-mob:py-6">
        <p className="comm-heading-style max-mob:mob-comm-heading-style"><span className="text-gradent">Ethneen</span> Community</p>
        <p className="font-stolzl normal-16 text[#002333] mb-[50px] text-center max-mob:text-[10px]/[14px]">Stay Informed with the Latest Insights: Explore articles, news, and expert <br /> opinions on the future of work, freelancing trends, and business innovation</p>

        <div className="flex gap-5 justify-center flex-nowrap overflow-x-auto max-mob:grid grid-cols-1">
            {
                data.map(({ desription, imageUrl, title }, index) => <CommunityCard key={index} desription={desription} imageUrl={imageUrl} title={title} style="mx-auto" />)
            }
        </div>
    </div>
}

export default Community
import "./style.css"
import Tabs from "../../../Components/Tabs"
import ExpertCard from "../../../Components/ExpertCard"
import girlImage from "./icons/girl.png"
import girlImage2 from "./icons/girl2.png"
import boyImage from "./icons/boy1.png"
import boyImage2 from "./icons/boy2.png"
import { useState } from "react"

const data = [
    {
        name: "Jemima Smith",
        description: "Plumbing Expert near you",
        price: "$75.00",
        country: "UAE",
        state: "Utopia",
        userIcon: girlImage
    },
    {
        name: "Aatish Safir",
        description: "Plumbing Expert near you",
        price: "$100.00",
        country: "Australia",
        state: "Utopia",
        userIcon: boyImage,
        active: true
    },
    {
        name: "Jordan Blake",
        description: "Plumbing Expert near you",
        price: "$75.00",
        country: "Canada",
        state: "Utopia",
        userIcon: boyImage2
    },
    {
        name: "Lily Smith",
        description: "Plumbing Expert near you",
        price: "$75.00",
        country: "UAE",
        state: "Utopia",
        userIcon: girlImage2
    },
    {
        name: "Lily Smith",
        description: "Plumbing Expert near you",
        price: "$75.00",
        country: "UAE",
        state: "Utopia",
        userIcon: girlImage2
    }
]
const tabs = {
    "Plumbing": <div className="flex gap-4"><ExpertList data={data} /></div>,
    "Gardening": <div className="flex gap-4"><ExpertList data={data.slice(0, 4)} /></div>,
    "Driver Services": <div className="flex gap-4"><ExpertList data={data.slice(0, 3)} /></div>,
    "Home Maintenance": <div className="flex gap-4"><ExpertList data={data.slice(0, 2)} /></div>,
    "Web Design": <div className="flex gap-4"><ExpertList data={data.slice(0, 1)} /></div>
}


function Experts({ }) {

    return <div className="pl-[100px] py-[60px] text-center">
        <p className="font-stolzl -tracking-[3px] font-semibold text-[56px]/[72px] text-[#002333] pr-[100px] mb-5">Everything you could ask for <br /> at <span className="text-gradent">Ethneen</span> </p>
        <Tabs tabs={tabs} secContainerStyle="pt-16 pb-[68px]" tabStyle="pr-[100px]" />
    </div>
}

function ExpertList({ data }) {
    const [activeIndex, setActiveIndex] = useState(0)

    return data.map(({ name, description, price, country, state, userIcon, active }, index) => {
        return <ExpertCard key={index} name={name} description={description} price={price} country={country} state={state} userIcon={userIcon} active={activeIndex === index} onClick={() => setActiveIndex(index)} />
    })
}

export default Experts
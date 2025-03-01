import { useState } from "react"
import "./style.css"
import Button from "../Button"


function Tabs({ tabs, containerStyle, tabStyle, secContainerStyle }) {
    const [activeTab, setActiveTab] = useState(Object.keys(tabs)[0])

    return <div className={`${containerStyle}`}>
        <div className={`flex gap-[10px] mb-8 justify-center ${tabStyle}`}>
            {
                Object.keys(tabs).map(tab => <Button
                    title={tab}
                    active={tab === activeTab}
                    onClick={() => setActiveTab(tab)}
                    style="normal-18 text-[#00233380]"
                    activeStyle="normal-18 text-[#FFFFFF] shadow-[0_10px_24px_0_#70E0003D] tab-override-active-style"
                    deactiveStyle="tab-override-inactive-style"
                    isHover={false}
                />)
            }
        </div>
        <div className={`overflow-x-auto ${secContainerStyle}`}>
            {tabs[activeTab]}
        </div>
    </div>
}

export default Tabs
import "./style.css"
import { useState } from "react"
import Button from "../../Components/Button"
import PersonalInfo from "./PersonalInfo"
import Profile from "./Profile"

const settingTabs = [
    {
        key: "personal-info",
        text: "Personal Information"
    },
    {
        key: "profile",
        text: "Profile"
    },
    {
        key: "account-setup",
        text: "Account Setup"
    },
    {
        key: "two-fector-auth",
        text: "Two Factor Authentication"
    },
    {
        key: "password",
        text: "Password"
    },
    {
        key: "account-delete",
        text: "Account Deletion"
    }
]

function getScreen(activeTab) {
    switch (activeTab) {
        case "personal-info":
            return <PersonalInfo />
        case "profile":
            return <Profile />
        case "account-setup":
        case "two-fector-auth":
        case "password":
        case "account-delete":
    }
}

function Settings({ }) {
    const [activeTab, setActiveTab] = useState("personal-info")

    return <div className="">
        <h1 className="font-medium text-3xl text text-primary-color mb-6">Settings</h1>
        <div className="flex flex-row mb-6 items-center">
            {
                settingTabs.map((({ key, text }, index) => {
                    if (key === activeTab) {
                        return <Button key={index} title={text} activeStyle="active-tab" active />
                    }
                    return <div key={index} className="py-3 px-5 font-normal text-base text-[#00233380] cursor-pointer" onClick={() => setActiveTab(key)}>
                        {text}
                    </div>
                }))
            }
        </div>

        {getScreen(activeTab)}
    </div>
}

export default Settings
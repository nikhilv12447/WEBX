import "./style.css"
import formConfig, { conf } from "./formConfig"
import Form from "../../../../Components/Form"
import Button from "../../../../Components/Button"
import { useState } from "react"
import Image from "../../../../Components/Image"
import closeIcon from "./icons/x-close.svg"

function getClass(type) {
    switch (type) {
        case "AMATURE":
            return "border border-amature text-amature"
        case "INTERMEDIATE":
            return "border border-intermediate text-intermediate"
        default:
            return "border border-expert text-expert"
    }
}
function AddUpdateSkillModal({ edit }) {
    const [skills, setSkills] = useState([{ name: "Android", type: "EXPERT" }, { name: "Firebase on Android", type: "INTERMEDIATE" }])
    const [searchQuery, setSearchQuery] = useState("")
    const [suggestedSkills, setSuggestedSkills] = useState(["Mobile App Development", "Mobile Responsive Design", "Mobile App Quality Assurance"])
    const [suggestedSkillIndex, setSuggestedSkillIndex] = useState(null)
    const [showSuggestion, setShowSuggestion] = useState(false)

    function handleDelete(position) {
        setSkills(skills.filter((skill, index) => index !== position))
    }
    return <div className="px-6 pb-6 pt-5">
        <div className="px-[14px] py-[10px] rounded-[28px] border border-borderSecondary relative">
            <div className="flex gap-[6px] border-amature">
                {
                    skills.map((skill, index) => <div className={`flex items-center rounded-md px-[6px] gap-[2px] ${getClass(skill.type)}`}>
                        <span>{skill.name}</span>
                        <button onClick={() => handleDelete(index)}>
                            <Image url={closeIcon} />
                        </button>
                    </div>)
                }
                <input className="outline-none" type="text" onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} onFocus={() => setShowSuggestion(true)} onBlur={() => setShowSuggestion(false)} />
            </div>
            {
                showSuggestion && <div className="bg-white w-full border border-border3 rounded-lg absolute left-0 top-9">
                    {
                        suggestedSkills.map((skill, index) => <div key={index} className="suggestSkillContainer" onMouseEnter={() => setSuggestedSkillIndex(index)}>
                            <span className="suggested-skill py-1">{skill}</span>
                            {
                                suggestedSkillIndex !== null && suggestedSkillIndex === index && <div className="skill-type-btn">
                                    <button className="py-[6px] px-3 bg-bgAmature font-medium text-xs text-amature border-r border-borderSecondary rounded-tl-lg rounded-bl-lg" type="button">Amature</button>
                                    <button className="py-[6px] px-3 bg-bgIntermediate font-medium text-xs text-intermediate border-r border-borderSecondary" type="button">Intermediate</button>
                                    <button className="py-[6px] px-3 bg-bgExpert font-medium text-xs text-expert rounded-tr-lg rounded-br-lg" type="button">Expert</button>
                                </div>
                            }

                        </div>)
                    }
                </div>
            }
        </div>
    </div>
}

export default AddUpdateSkillModal
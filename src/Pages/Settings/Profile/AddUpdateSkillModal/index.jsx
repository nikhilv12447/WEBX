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

    function handleAddToSkills(e, skill) {
        const type = e.target.getAttribute("data-type")

        if (!type) return

        // setSkills([...skills, { name: skill, type }])
    }

    function handleOnBlur() {
        setTimeout(() => {
            setShowSuggestion(false)
        }, 500);
    }
    return <div className="px-6 pb-6 pt-5">
        <div className="px-[14px] py-[10px] rounded-[28px] border border-borderSecondary relative">
            <div className="flex flex-row gap-[6px] border-amature">
                <div className="skill-container-style">
                    {
                        skills.map((skill, index) => <div className={`flex flex-row justify-between items-center rounded-md px-[6px] gap-[2px] text-nowrap ${getClass(skill.type)}`}>
                            <span className="font-medium text-xl basis-1/2">{skill.name}</span>
                            <button className="basis-1/2" onClick={() => handleDelete(index)}>
                                <Image url={closeIcon} />
                            </button>
                        </div>)
                    }
                </div>
                <input className="outline-none basis-1/3" type="text" onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} onFocus={() => setShowSuggestion(true)} onBlur={handleOnBlur} />
            </div>
            {
                showSuggestion && <div className="bg-white w-full border border-border3 rounded-lg absolute left-0 top-9">
                    {
                        suggestedSkills.map((skill, index) => <div key={index} className="suggestSkillContainer" onMouseEnter={() => setSuggestedSkillIndex(index)}>
                            <span className="suggested-skill py-1">{skill}</span>
                            {
                                suggestedSkillIndex !== null && suggestedSkillIndex === index && <div className="skill-type-btn" onClick={(e) => handleAddToSkills(e, skill)}>
                                    <button className="py-[6px] px-3 bg-bgAmature font-medium text-xs text-amature border-r border-borderSecondary rounded-tl-lg rounded-bl-lg" type="button" data-type="AMATURE">Amature</button>
                                    <button className="py-[6px] px-3 bg-bgIntermediate font-medium text-xs text-intermediate border-r border-borderSecondary" type="button" data-type="INTERMEDIATE">Intermediate</button>
                                    <button className="py-[6px] px-3 bg-bgExpert font-medium text-xs text-expert rounded-tr-lg rounded-br-lg" type="button" data-type="EXPERT">Expert</button>
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
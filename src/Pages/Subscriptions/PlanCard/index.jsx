import "./style.css"
import checkIcon from "../icon/Check-icon.svg"
import Button from "../../../Components/Button"

function Card({ title, connects, benifits = [], onPlanSelect }) {
    return <div className="subscription-plan-card flex flex-col justify-between">
        <div className="pl-6 pr-5 pt-6">
            <h4 className="font-medium text-lg text-[#008000] mb-2">{title}</h4>
            <p className="font-medium text-[26px] text-[#101828] mb-8">{connects} Connects</p>

            <ul className="mb-[18px]">
                {
                    benifits.map((benifit, index) => <li key={index} className="flex gap-3 mb-[10px]">
                        <img src={checkIcon} />
                        <span className="font-normal text-sm text-[#475467]">{benifit}</span>
                    </li>)
                }
            </ul>
        </div>
        <div className="p-6 bg-[#F9FAFB] rounded-br-2xl rounded-bl-2xl">
            <Button title="Choose Plan" style="plan-button" secondaryBtn activeStyle="active-plan-button" onClick={onPlanSelect} />
        </div>
    </div>
}

export default Card
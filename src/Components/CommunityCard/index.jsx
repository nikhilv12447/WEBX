import "./style.css"
import Button from "../Button"

function CommunityCard({ title, desription, imageUrl, style, btnText, onClick, dateTime }) {

    return <div className={`border border-[#EBEBEB] rounded-[19px] w-[340px] bg-white ${style}`}>
        <div className="community-image" style={{ "--community-img": `url(${imageUrl})` }} />
        <div className="pt-4 pb-5 px-5 text-left">
            {dateTime && <span className="block font-semibold text-[16px]/[19px] text-[#111111] mb-[10px]">{dateTime}</span>}
            <h4 className="font-semibold text-2xl text-[#111111] mb-[10px]">{title}</h4>
            <p className="medium-16 text-[16px]/[19px] text-[#111111]">{desription}</p>
            {btnText && <Button title={btnText} containerStyle="mt-[10px]" deactiveStyle="font-semibold text-[16px]/[19px] text-[#002333] border border-[#002333] w-fit" isHover={false} onClick={onClick} />}
        </div>
    </div>
}

export default CommunityCard
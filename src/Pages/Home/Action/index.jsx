import "./style.css"
import Button from "../../../Components/Button"


function Action() {

    return <div className="">
        <p className="font-stolzl -tracking-[3px] font-semibold text-[56px]/[72px] text-[#002333] mb-[50px]">See <span className="text-gradent">Ethneen</span> in Action</p>
        <div className="mb-[50px]"></div>

        <Button title="Explore More" activeStyle="w-fit mx-auto" isHover={false} active />
    </div>
}

export default Action
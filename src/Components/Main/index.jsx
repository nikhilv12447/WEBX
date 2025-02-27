import "./style.css"
import LeftSection from "./Left"
import RightSection from "./Right"
import Header from "../Header"

function Main() {
    return <div>
        <Header />
        <div className="flex h-main mt-[72px] main-section ">
            <LeftSection />
            <RightSection />
        </div>
    </div>
}

export default Main
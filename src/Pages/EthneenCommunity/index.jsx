import "./style.css"
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import FirstFold from "./FirstFold"

function EthneenCommunity() {

    return <div className="max-w-[1440px] mx-auto">
        <Header isHome />
        <div>
            <FirstFold />
        </div>
        <Footer />
    </div>
}

export default EthneenCommunity
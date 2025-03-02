import "./style.css"
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import FirstFold from "./FirstFold"
import Services from "./Services"
import Experts from "./Experts"
import Action from "./Action"
import Community from "./Community"
import Skills from "./Skills"
import NoorAi from "./NoorAi"
import FAQs from "./FAQ"
import JoinClub from "./JoinClub"

function Home() {

    return <div className="max-w-[1440px] mx-auto">
        <Header isHome />
        <div>
            <FirstFold />
            <Services />
            <Experts />
            <Action />
            <Community />
            <Skills />
            <NoorAi />
            <FAQs />
            <JoinClub />
        </div>
        <Footer />
    </div>
}

export default Home
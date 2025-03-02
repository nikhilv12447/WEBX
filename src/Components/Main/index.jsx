import "./style.css"
import LeftSection from "./Left"
import RightSection from "./Right"
import Header from "../Header"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { useEffect } from "react"

function Main() {
    const isLogin = useSelector(({ login }) => login.isLogin)
    const nevigate = useNavigate()

    useEffect(() => {
        !isLogin && nevigate("/home")
    }, [])

    if (!isLogin) {
        return null
    }

    return <div>
        <Header />
        <LeftSection />
        <RightSection />
    </div>
}

export default Main
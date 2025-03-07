import "./style.css"
import LeftSection from "./Left"
import RightSection from "./Right"
import Header from "../Header"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { useEffect } from "react"
import { useState } from "react"

function Main() {
    const [open, setOpen] = useState(false)
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
        <div className="flex mt-mainTop">
            <LeftSection open={open} onToggleOpen={setOpen} />
            <RightSection open={open} onToggleOpen={setOpen} />
        </div>
    </div>
}

export default Main
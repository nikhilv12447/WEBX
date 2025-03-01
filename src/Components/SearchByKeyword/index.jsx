import "./style.css"
import { useState } from "react"
import dropdownIcon from "./icons/dropdown-icon.svg"
import SearchIcon from "./icons/SearchIcon"
import Button from "../Button"
import Image from "../Image"

function SearchByKeyword({style}) {
    const [query, setQuery] = useState("")

    return <div className={`py-[10px] px-5 bg-[#EBEBEB] flex items-center justify-between w-[638px] rounded-full ${style}`}>
        <input className="input-search normal-14" type="text" onChange={e => setQuery(e.target.value)} value={query} placeholder="Search by keyword" />
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-[5px]">
                <select name="userType" className="select-user-type">
                    <option value="freelancer" selected>Freelancer</option>
                </select>
                <Image url={dropdownIcon} style="dropdown-icon" />
            </div>
            <Button Icon={SearchIcon} style="size-10 p-0 items-center justify-center" active />
        </div>
    </div>
}

export default SearchByKeyword
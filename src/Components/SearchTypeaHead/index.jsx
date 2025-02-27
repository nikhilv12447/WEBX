import searchIcon from "./icon/search-icon.svg"
import "./style.css"

function SearchTypeaHead({ placeholder = "Search" }) {
    return <div className="flex justify-between rounded-[89px] border border-[#EBEBEB] bg-[#F6F6F6] py-4 pl-5 pr-4 w-[576px]">
        <input className="bg-[#F6F6F6] search-box w-full" type="text" name="" id="" placeholder={placeholder} />
        <button><img src={searchIcon} /></button>
    </div>
}

export default SearchTypeaHead
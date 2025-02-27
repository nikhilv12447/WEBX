import "./style.css"
import Button from "../../../Components/Button"
import DropDown from "../../../Components/DropDown"
import data from "./data"

function BuySubscriptionModal({ onClose }) {
    return <div className="px-6 pb-6 pt-5 w-[512px]">
        <div className="w-full h-[76px] rounded-xl border border-[#E4E7EC] mb-4"></div>
        <div className="wallet-balance-container">
            <p className="font-medium text-2xl text-white mb-1">$107,843.82</p>
            <p className="font-medium text-base text-white">Wallet Balance</p>
        </div>
        <div className="flex gap-2 items-center mb-4">
            <input className="border border-[#D0D5DD]" type="checkbox" name="" id="wallet" />
            <label className="font-medium text-sm text-[#344054]" htmlFor="wallet"> Use Wallet balance</label>
        </div>
        <div className="mb-6">
            <label className="block font-medium text-sm text-[#344054] mb-[6px]" htmlFor="bank">Payment Method</label>
            <DropDown placeHolder="select-bank" onSelect={(value) => console.log(value)} options={data} />
        </div>
        <div className="flex gap-6">
            <Button title="close" style="modal-btn" secondaryBtn isHover={false} onClick={onClose} />
            <Button title="Buy Now" style="modal-btn" active />
        </div>
    </div>
}

export default BuySubscriptionModal
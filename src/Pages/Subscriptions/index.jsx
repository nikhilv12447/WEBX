import React, { Suspense, useState } from "react"
import "./style.css"
import Button from "../../Components/Button"
import Gem from "./icon/Gem"
import SearchTypeaHead from "../../Components/SearchTypeaHead"
import Notice from "../../Components/Notice"
import Status from "../../Components/Status"
import PlanCard from "./PlanCard/index"
import Modal from "../../Components/Modal"
import BuySubscriptionModal from "./BuySubscriptionModal"
import data, { plans } from "./data"

function Subscriptions() {
    const [showPlans, setShowPlans] = useState(false)
    if (showPlans) {
        return <SubscriptionPlans />
    }

    return <div>
        <h1 className="font-medium text-3xl text-[#101828] mb-6">Subscription</h1>

        <div className="p-6 bg-white rounded-2xl mb-6 border border-[#0023334D]">
            <div className="flex justify-between items-center mb-[14px]">
                <h4 className="font-medium text-lg text-primary-color">Total connects</h4>
                <Button Icon={Gem} title="Buy Subscription" activeStyle="subscription-btn" onClick={() => { setShowPlans(true) }} active />
            </div>
            <p className="font-medium text-3xl text-primary-color">397</p>
        </div>

        <div className="bg-white rounded-2xl border border-[#0023334D]">
            <div className="flex justify-between items-center mb-[14px] px-6 py-5">
                <h4 className="font-medium text-lg text-primary-color">Subscription History</h4>
                <SearchTypeaHead placeholder="Enter date to search" />
            </div>
            <Notice message="If your free connect ends or expired, Each time 1 connect will be reduce from your total connect while you bid or send job proposal." />

            <table className="subscription-hisory">
                <tr>
                    <th className="pl-6">Type</th>
                    <th>Price</th>
                    <th>Connect</th>
                    <th>Payment Gateway</th>
                    <th>Payment Status</th>
                    <th>Status</th>
                    <th>Purchase Date</th>
                    <th className="pr-6">Expiry Date</th>
                </tr>
                {
                    data.map(({ type, price, connect, paymentGateway, paymentStatus, status, purchaseDate, expiryDate }, index) => <tr key={index}>
                        <td className={index === data.length - 1 ? "pl-6 rounded-bl-2xl" : "pl-6"}>{type}</td>
                        <td>{price}</td>
                        <td>{connect}</td>
                        <td>{paymentGateway}</td>
                        <td><Status status={paymentStatus.title} type={paymentStatus.type} /></td>
                        <td><Status status={status.title} type={status.type} /></td>
                        <td>{purchaseDate}</td>
                        <td className={index === data.length - 1 ? "pr-6 rounded-br-2xl" : "pr-6"}>{expiryDate}</td>
                    </tr>)
                }
            </table>
        </div>
    </div>
}


function SubscriptionPlans() {
    const [planType, setPlanType] = useState("all")
    const [showModal, setShowModal] = useState(false)

    function handleOnPlanClick() {
        setShowModal(true)
    }

    return <div>
        <h1 className="font-medium text-3xl text-[#101828] mb-6">Subscription Plans</h1>

        <div className="flex rounded-2xl mb-6">
            <Button title="All" style="plan-type" activeStyle="active-plan" onClick={() => setPlanType("all")} active={planType === "all"} isHover={false} />
            <Button title="Monthly" style="plan-type" activeStyle="active-plan" onClick={() => setPlanType("monthly")} active={planType === "monthly"} isHover={false} />
            <Button title="Yearly" style="plan-type" activeStyle="active-plan" onClick={() => setPlanType("yearly")} active={planType === "yearly"} isHover={false} />
            <Button title="Weekly" style="plan-type" activeStyle="active-plan" onClick={() => setPlanType("weekly")} active={planType === "weekly"} isHover={false} />
            <Button title="Free" style="plan-type" activeStyle="active-plan" onClick={() => setPlanType("free")} active={planType === "free"} isHover={false} />
        </div>

        <div className="grid grid-cols-3 gap-6">
            {plans.map(({ title, connect, benifits }, index) => <PlanCard key={index} title={title} connects={connect} benifits={benifits} onPlanSelect={handleOnPlanClick} />)}
        </div>

        {
            showModal && <Modal title="Buy Subscription" onClose={() => setShowModal(false)}>
                <Suspense fallback={null}>
                    <BuySubscriptionModal onClose={() => setShowModal(false)} />
                </Suspense>
            </Modal>
        }
    </div>
}

export default Subscriptions
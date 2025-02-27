import "./style.css"
import React, { useState } from "react"
import Button from "../../../Components/Button"
import EyeIcon from "../icon/Eye"
import PencilLine from "../icon/PencilLine"
import Form from "../../../Components/Form"
import formConfig from "../formConfig"
import Image from "../../../Components/Image"
import Status from "../../../Components/Status"
import OnOff from "../../../Components/Button/OnOff"
import plusIcon from "../icon/plus.svg"
import pencilIcon from "../icon/PencilLine"
import receiptIcon from "../icon/receipt-check.svg"
import calendarIcon from "../icon/calendar.svg"
import trashIco from "../icon/trash.svg"
import pencilLineIcon from "../icon/pencil-line.svg"
import locationIcon from "../icon/location.svg"
import graduationHatIcon from "../icon/graduation-hat.svg"
import Modal from "../../../Components/Modal"

const PersonalInfoModal = React.lazy(() => import("./PersonalInfoModal"))

const projects = [
    {
        description: "I will develop you an service based Flutter mobile app for Android and iOS",
        price: "$300",
        delivery: 7
    },
    {
        description: "I will build you an customized eCommerce Flutter mobile app with the Zaika script",
        price: "$200",
        delivery: 7
    },
    {
        description: "Need a expert graphic designer with an extensive real estate experience?",
        price: "$200",
        delivery: 7
    }
]

const reviews = [
    {
        name: "Andrew Fateh",
        description: "I was completely impressed with their professionalism and customer service",
        rating: 4.8,
        price: "$300",
        date: "Nov 27, 2023"
    },
    {
        name: "Andrew Fateh",
        description: "I was completely impressed with their professionalism and customer service",
        rating: 4.8,
        price: "$300",
        date: "Nov 27, 2023"
    },
    {
        name: "Andrew Fateh",
        description: "I was completely impressed with their professionalism and customer service",
        rating: 4.8,
        price: "$300",
        date: "Nov 27, 2023"
    }
]

const portfolio = [
    {
        title: "Service Martketplace",
        date: "Nov 5, 2023"
    },
    {
        title: "Multi Vendor Ecommerce Marketplace",
        date: "Nov 5, 2023"
    }
]

const skills = ["Android", "Firebase", "Android Foundations", "Mobile App Development"]

function Profile() {
    const [showPersonalInfoModal, setShowPersonalInfoModal] = useState(false)

    return <div>
        <div className="bg-white p-6 rounded-2xl border border-[#0023334D] mb-6">
            <div className="flex flex-row items-center justify-between pb-5 border-b border-[#E4E7EC] mb-5">
                <div className="flex flex-row gap-[18px]">
                    <div className="size-[52px] rounded-full border border-[#00000014]" />
                    <div>
                        <div className="flex gap-2 font-medium text-lg form-label-color mb-1">
                            <span>
                                Afifa (Saudi Freelance Certified)
                            </span>
                            <Status status="Active" type="SUCCESS" style="gap-[5px] rounded-md p-0" />
                        </div>
                        <p className="font-normal text-base text-color2">Professional Html Developer</p>
                    </div>
                </div>
                <div className="flex flex-row gap-3">
                    <Button Icon={EyeIcon} title="View as Client" style="feedback-btn gap-1" secondaryBtn isHover={false} />
                    <Button Icon={PencilLine} title="Edit Info" activeStyle="gap-1" active onClick={() => setShowPersonalInfoModal(true)} />
                </div>
            </div>
            <div className="font-normal text-base text-color2 w-[640px] mb-8">
                <p>Yes, I am familiar with Bill Gates. Bill Gates is a renowned American business magnate, software developer, philanthropist, and author. He co-founded Microsoft Corporation in 1975 with his childhood friend Paul Allen.</p>
            </div>
            <div className="flex py-[22px] px-6 bg-[#F9FAFB] border border-[#E4E7EC] rounded-xl w-[734px] mb-6">
                <div className="w-full">
                    <p className="font-medium text-sm text-color2 mb-2">Work Availability</p>
                    <OnOff />
                </div>
                <div className="w-full">
                    <p className="font-medium text-sm text-color2 mb-2">Hourly Rate</p>
                    <span className="font-medium text-base text-[#004B23]">$20.00</span>
                </div>
                <div className="w-full">
                    <p className="font-medium text-sm text-color2 mb-2">Local Time</p>
                    <span className="font-medium text-base text-[#004B23]">06:33am</span>
                </div>
                <div className="w-full">
                    <p className="font-medium text-sm text-color2 mb-2">Location</p>
                    <span className="font-medium text-base text-[#004B23]">Buenos Aires, Argentina</span>
                </div>
            </div>

        </div>
        <div className="flex gap-6">
            <div className="basis-2/3">
                <div className="flex py-[22px] px-6 bg-[#F9FAFB] border border-[#0023334D] rounded-xl w-[734px] mb-6 w-full">
                    <div className="w-full">
                        <p className="font-medium text-base text-tertiary mb-2">Total Earned</p>
                        <span className="font-medium text-3xl text-darkGreen">$47.40</span>
                    </div>
                    <div className="w-full">
                        <p className="font-medium text-base text-tertiary mb-2">Orders Completed</p>
                        <span className="font-medium text-3xl text-darkGreen">02</span>
                    </div>
                    <div className="w-full">
                        <p className="font-medium text-base text-tertiary mb-2">Active Orders</p>
                        <span className="font-medium text-3xl text-darkGreen">0</span>
                    </div>
                    <div className="w-full">
                        <p className="font-medium text-base text-tertiary mb-2">Target</p>
                        <span className="font-medium text-3xl text-darkGreen">$5,000</span>
                    </div>
                </div>

                <div className="p-6 rounded-2xl bg-white mb-6">
                    <Title name="Project Catalogue" icon={plusIcon} />

                    {
                        projects.map(({ description, delivery, price }) => <ProjectOverview description={description} price={price} delivery={delivery} />)
                    }
                </div>
                <div className="px-6 pt-[30px] pb-[38px] rounded-2xl bg-white mb-6">
                    <Title name="Work Experience" icon={plusIcon} />

                    <Experience univercity="Softking" designation="PHP Laravel Developer" location="Uttara Dhaka 1203" dateRange="Mar 20, 2023 - Mar 29, 2023" />
                </div>

                <div className="p-6 rounded-2xl bg-white mb-6">
                    <Title name="Education" icon={plusIcon} />

                    <Education univercity="Dhaka International University" degree="BSC in CSE" branch="Computer Science and Engineering" dateRange="Mar 15, 2023 - Mar 23, 2023" />
                </div>

                <div className="p-6 rounded-2xl bg-white">
                    <Title name="Skills" icon={pencilLineIcon} />
                    <div className="flex gap-3">
                        {
                            skills.map(skill => <div className="py-[10px] px-[14px] border border-borderSecondary rounded-lg">
                                <span className="font-medium text-sm text-[#344054]">{skill}</span>
                            </div>)
                        }
                    </div>
                </div>
            </div>

            <div className="basis-1/3">
                <div className="p-6 bg-white rounded-2xl mb-6">
                    <p className="font-medium text-lg text-primaryText mb-[10px]">Reviews</p>

                    {
                        reviews.map(({ name, description, rating, price, date }) => <Review name={name} description={description} rating={rating} price={price} date={date} />)
                    }
                </div>

                <div className="p-6 bg-white rounded-2xl">
                    <Title name="Portfolio" icon={plusIcon} />

                    {
                        portfolio.map(({ title, date }) => <PortfolioCard title={title} date={date} />)
                    }
                </div>
            </div>
        </div>

        {showPersonalInfoModal && <Modal title="Personal Information" onClose={() => setShowPersonalInfoModal(false)}> <PersonalInfoModal /> </Modal>}
    </div>
}

export default Profile

function Title({ name, icon }) {
    return <div className="flex justify-between mb-[10px]">
        <span className="font-medium text-lg text-primaryText">{name}</span>
        <CRUD icon={icon} />
    </div>
}

function CRUD({ icon }) {
    return <div className="size-10 flex justify-center items-center border border-borderSecondary rounded-lg">
        <Image url={icon} />
    </div>
}
function ProjectOverview({ description, price, delivery }) {
    return <div className="flex flex-row mb-6">
        <div className="basis-1/2"></div>
        <div className="basis-1/2">
            <p className="font-medium text-lg text-black mb-2">{description}</p>
            <p className="font-medium text-lg text-primaryText mb-2">{price}</p>
            <p className="font-normal text-sm text-tertiary mb-10">Delivery • {delivery} Days</p>
            <div className="flex items-center gap-[30px]">
                <OnOff text="Available for order" />
                <Button Icon={pencilIcon} title="Edit Project" style="border border-borderSecondary rounded-lg" isHover={false} />
            </div>
        </div>
    </div>
}

function Review({ name, description, price, date }) {
    return <div className="p-4 mb-6 border border-border3 rounded-xl">
        <p className="font-medium text-sm text-darkGreen mb-1">{name}</p>
        <p className="font-medium text-lg text-primaryText mb-4">{description}</p>
        <div className="mb-4">
            aga
        </div>
        <div className="flex items-center gap-[30px]">
            <div className="flex items-center gap-2">
                <Image url={receiptIcon} />
                <span className="font-medium text-base text-[#475467]">{price}</span>
            </div>
            <div className="flex items-center gap-2">
                <Image url={calendarIcon} />
                <span className="font-medium text-base text-[#475467]">{date}</span>
            </div>
        </div>
    </div>
}

function PortfolioCard({ title, date }) {
    return <div >
        <div className="h-[207px] mb-5"></div>
        <div>
            <div className="flex justify-between">
                <span className="font-medium text-lg text-primaryText">{title}</span>
                <div className="flex gap-4">
                    <CRUD icon={trashIco} />
                    <CRUD icon={pencilLineIcon} />
                </div>
            </div>
            <span className="font-medium text-base text-tertiary">{date}</span>
        </div>
    </div>
}

function Experience({ univercity, designation, location, dateRange }) {
    return <div className="p-4 bg-backgroundSec border border-border3 rounded-xl">
        <div className="flex justify-between mb-4">
            <div>
                <p className="mb-1 font-medium text-base text-black">{univercity}</p>
                <span className="font-medium text-lg text-primaryText">{designation}</span>
            </div>
            <div className="flex gap-4">
                <CRUD icon={trashIco} />
                <CRUD icon={pencilLineIcon} />
            </div>
        </div>
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
                <Image url={locationIcon} />
                <span className="font-medium text-base text-[#475467]">{location}</span>
            </div>
            <div className="flex items-center gap-2">
                <Image url={calendarIcon} />
                <span className="font-medium text-base text-[#475467]">{dateRange}</span>
            </div>
        </div>
    </div>
}

function Education({ univercity, degree, branch, dateRange }) {
    return <div className="p-4 bg-backgroundSec border border-border3 rounded-xl">
        <div className="flex justify-between mb-4">
            <div>
                <p className="mb-1 font-medium text-base text-black">{univercity}</p>
                <span className="font-medium text-lg text-primaryText">{degree}</span>
            </div>
            <div className="flex gap-4">
                <CRUD icon={trashIco} />
                <CRUD icon={pencilLineIcon} />
            </div>
        </div>
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
                <Image url={graduationHatIcon} />
                <span className="font-medium text-base text-[#475467]">{branch}</span>
            </div>
            <div className="flex items-center gap-2">
                <Image url={calendarIcon} />
                <span className="font-medium text-base text-[#475467]">{dateRange}</span>
            </div>
        </div>
    </div>
}
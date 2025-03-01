import "./style.css"
import Image from "../Image"
import ethneenIcon from "./icons/ethneen.svg"
import playStoreIcon from "./icons/playStore.svg"
import appleStoreIcon from "./icons/appleStore.svg"
import whatsappIcon from "./icons/whatsapp.svg"
import mailIcon from "./icons/mail.svg"

function Footer({ status, type, style }) {

    return <div className="footer-container">
        <div className="px-[100px] pt-20 pb-[50px] flex justify-between text-left">
            <div>
                <Image url={ethneenIcon} style="mb-6" />
                <p className="normal-24 text-[#FFFFFFCC] mb-[85px] w-[443px]">Join the club of hundreds of local service professionals and freelancers working with Ethneen.</p>
                <div className="flex gap-[19px]">
                    <Image url={playStoreIcon} />
                    <Image url={appleStoreIcon} />
                </div>
            </div>
            <div>
                <p className="medium-24 text-white mb-6">Top Rated Categories</p>

                <ul className="flex flex-col gap-[2px]">
                    <li className="normal-18 text-[#FFFFFFCC]">Plumbing Service</li>
                    <li className="normal-18 text-[#FFFFFFCC]">Gardening & Landscape</li>
                    <li className="normal-18 text-[#FFFFFFCC]">Driving Service</li>
                    <li className="normal-18 text-[#FFFFFFCC]">Home Maintenance</li>
                    <li className="normal-18 text-[#FFFFFFCC]">Art & Illustration</li>
                    <li className="normal-18 text-[#FFFFFFCC]">App Design</li>
                    <li className="normal-18 text-[#FFFFFFCC]">Pattern Design</li>
                    <li className="normal-18 text-[#FFFFFFCC]">Sonic Branding</li>
                </ul>
            </div>
            <div>
                <p className="medium-24 text-white mb-6">Contact Us</p>
                <div className="flex gap-[10px] items-center">
                    <Image url={whatsappIcon} />
                    <a href="tel:+966581243391" className="normal-18 text-white">+966581243391</a>
                </div>
                <div className="flex gap-[10px] items-center">
                    <Image url={mailIcon} />
                    <a href="mailto:contact@ethneen.com" className="normal-18 text-white">contact@ethneen.com</a>
                </div>
            </div>
        </div>
        <div className="px-[100px] py-[30px] border-t border-white flex justify-between items-center">
            <span className="normal-16 text-white">Copyright © All rights reserved. 2024</span>
            <span className="normal-16 text-white">Terms and Conditions | Privacy Policy | Content Privacy</span>
        </div>
    </div>
}

export default Footer

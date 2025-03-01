import "./style.css"
import Button from "../../../Components/Button"


function JoinClub() {

    return <div className="py-[50px] text-center">
        <p className="font-stolzl -tracking-[3px] font-semibold text-[48px]/[57px] text-[#002333] mb-5">
            Join the club of <span className="text-gradent2">hundreds of other </span> <br /> <span className="text-gradent2">Freelancers</span> working with freedom
        </p>
        <p className="font-stolzl normal-16 text[#002333] mb-[35px] mx-auto max-w-[556px]">Stay Informed with the Latest Insights: Explore articles, news, and expert opinions on the future of work, freelancing trends, and business innovation</p>

        <form className="email-submit">
            <input type="email" placeholder="Enter Email" />
            <Button title="Submit" type="submit" activeStyle="w-[143px] justify-center" isHover={false} active />
        </form>
    </div>
}

export default JoinClub
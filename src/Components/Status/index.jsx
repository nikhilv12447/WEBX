import "./style.css"

function Status({ status, type, style }) {
    let colorClass = "dot "

    switch (type) {
        case "SUCCESS":
            colorClass += "green"
            break;
        case "PENDING":
            colorClass += "yellow"
            break;
        default:
            colorClass += "red"
            break;
    }
    return <div className={`px-[6px] py-[2px] flex items-center gap-1 border border-[#D0D5DD] rounded-[26px] w-fit ${style}`}>
        <div className={colorClass} />
        <span className="font-medium text-xs text-[#344054]">{status}</span>
    </div>
}

export default Status
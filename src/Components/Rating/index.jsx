import "./style.css"
import Star from "./Star"

function Status({ number }) {
    let floorNum = Math.floor(number)
    let value = (20 * ((number * 100) % 100)) / 100
    const starts = []

    for (let i = 0; i < floorNum; i++) {
        starts.push(<Star key={i} value={20} />)
    }

    if (value) {
        starts.push(<Star key={starts.length} value={16} />)
    }
    return <div className="flex gap-2 items-center">
        <div className="flex gap-1 items-center">
            {starts}
        </div>
        <span>{number}</span>
    </div>
}



export default Status
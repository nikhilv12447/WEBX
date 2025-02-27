import "./style.css"

function Image({ url, style = "" }) {
    
    return <div className={style}>
        <img src={url} alt="" />
    </div>
}

export default Image
import "./style.css"

function Image({ url, style = "", width, height }) {

    return <div className={style}>
        <img src={url} alt="" width={width} height={height} />
    </div>
}

export default Image
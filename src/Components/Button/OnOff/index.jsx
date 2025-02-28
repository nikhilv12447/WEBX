import "./style.css"

function OnOff({ text, onChange }) {

    return <div className="flex items-center gap-2">
        <label className="switch">
            <input type="checkbox" onChange={e => onChange && onChange(e.target.checked)} />
            <span className="slider round"></span>
        </label>
        <span className="font-medium text-sm text-tertiary">{text}</span>
    </div>
}

export default OnOff
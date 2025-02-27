import "./style.css"

function Input({ type, handleOnChange, value, placeholder, style, id }) {

    return <div className={`py-[10px] px-[14px] border border-[#D0D5DD] bg-white rounded-[28px] ${style}`}>
        <input id={id} className="input-style" type={type} onChange={handleOnChange} value={value} placeholder={placeholder} />
    </div>
}

export default Input
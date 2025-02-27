import "./style.css"

function TextArea({ type, handleOnChange, value, placeholder, style, id }) {

    return <div className={`py-[10px] px-[14px] border border-[#D0D5DD] bg-white rounded-lg ${style}`}>
        <textarea className="text-area-style" name="" id={id}></textarea>
    </div>
}

export default TextArea
import "./style.css"
import DropDown from "../DropDown"
import countries from "./countries.json"

const data = countries.map(({ id, name }) => ({ value: `${id}`, text: name }))

function CountryDropdown({ style, defaultValue, placeHolder, onSelect }) {

    return <DropDown options={data} onSelect={onSelect} defaultValue={defaultValue} style={style} placeHolder={placeHolder} />
}

export default CountryDropdown
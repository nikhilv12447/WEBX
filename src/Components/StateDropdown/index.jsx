import "./style.css"
import DropDown from "../DropDown"
import states from "./states.json"
import { useEffect, useState } from "react"

function StateDropdown({ countryId, style, onSelect, defaultValue, placeHolder }) {
    const [statesData, setStateData] = useState()

    useEffect(() => {
        countryId ? setStateData(states.find(({ id }) => `${id}` === countryId)?.states.map(({ id, name }) => ({ value: `${id}`, text: name }))) : setStateData(null)
    }, [countryId])

    return <DropDown options={statesData} onSelect={onSelect} style={style} defaultValue={defaultValue} placeHolder={placeHolder} />
}

export default StateDropdown
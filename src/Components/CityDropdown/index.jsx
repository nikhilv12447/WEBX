import "./style.css"
import DropDown from "../DropDown"
import cities from "./cities.json"
import { useEffect, useState } from "react"

function CityDropdown({ countryId, stateId, defaultValue, placeHolder, style, onSelect }) {
    const [cityData, setCityData] = useState()

    useEffect(() => {
        countryId && stateId ? setCityData(cities.find(({ id }) => `${id}` === countryId)?.states.find(({ id }) => `${id}` === stateId)?.cities.map(({ id, name }) => ({ value: `${id}`, text: name }))) : setCityData(null)
    }, [countryId, stateId])

    return <DropDown options={cityData} onSelect={onSelect} style={style} defaultValue={defaultValue} placeHolder={placeHolder} />
}

export default CityDropdown
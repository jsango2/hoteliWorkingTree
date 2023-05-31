import { changeLanguage } from "i18next"
import React, { useState } from "react"
import Input, {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input/input"
import en from "react-phone-number-input/locale/en"
import countryNames from "react-phone-number-input/locale/en"
import lookupCountry from "./lookupCountry"
import "react-phone-number-input/style.css"

const CountrySelect = ({ getData, value, onChange, labels, ...rest }) => {
  const [code, setCode] = useState()
  //   getData(code)
  return (
    <select
      {...rest}
      value={value}
      onChange={event => (
        onChange(event.target.value || undefined),
        setCode(getCountryCallingCode(event.target.value)),
        getData(
          getCountryCallingCode(event.target.value),
          countryNames[event.target.value]
        )
      )}
    >
      <option value="">{labels.ZZ}</option>
      {getCountries().map(country => (
        <option key={country} value={country}>
          {labels[country]}
        </option>
      ))}
    </select>
  )
}

function Country({ getData }) {
  const [country, setCountry] = useState()

  const [phoneNumber, setPhoneNumber] = useState()
  const handleChange = (code, label) => {
    getData(code, label)
  }

  //   async function handleNavigator(pos) {
  //     const { latitude, longitude } = pos.coords

  //     const userCountryCode = await lookupCountry({ latitude, longitude })
  //     setCountry(userCountryCode)
  //   }

  return (
    <>
      <CountrySelect
        labels={en}
        value={country}
        onChange={() => setCountry}
        name="countrySelect"
        getData={handleChange}
        className="country"
      />
      {/* <Input
        country={country}
        value={phoneNumber}
        onChange={setPhoneNumber}
        placeholder="ERnter phone number"
        name="phoneNumber"
      /> */}
    </>
  )
}

export default Country

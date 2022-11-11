import React from "react"

import {
  Ul,
  Li
} from  "@bootstrap-styled/v4"

import { 
  searchCountryByCode,
  Country as CountryType } from "../../reducers/countrySlice"

import {
  Flag,
  Content,
  DTerm,
  Tag,
  DetailedTitle,
  ShortTitle,
  BodyDetailed
} from "../../styled"

import { 
  detailedFields,
  shortFields } from "../../utils/config"

import switcher from "./switcher"
import Title from "./Title"
import Body from "./Body"

const printFields = (country: CountryType, detailed: boolean): { [x: string]: any }[] => {
  return detailed ? detailedFields(country) : shortFields(country)
}

const Country: React.FC = ({ country, detailed, region, query, setUpdate }: any): JSX.Element => {

  let fields: any = printFields(country, detailed)
  if (fields[fields.length - 1].name == "Border Countries") {
    var borderCountries: CountryType[] = fields[fields.length - 1].value.split(",")
      .map(e => searchCountryByCode(e.trim()))
    fields.pop()
  }

  return (
    <>
      <Flag 
        className={detailed ? "detailed col-md-5" : ""}
        src={country.flags.png}/>
      <Content
        className={detailed ? "detailed col-md-6 offset-md-1" : ""}>
        <Title 
          Heading={detailed ? DetailedTitle : ShortTitle}
          country={country}
        ></Title>
        <Body
          Fields={detailed ? BodyDetailed : Ul}>
            {fields.map((e: { [x: string]: any }, i: number) => {
              return (<Li key={i}><DTerm>{e.name}:</DTerm> {e.value}</Li>)
            })}
        </Body>
        {borderCountries &&
         <p><DTerm>Border Countries:</DTerm> 
         {borderCountries.map((b: CountryType, i: number) => {
          return (
            <Tag 
              key={i}
              to={"/" + b.alpha3Code}
              onClick={e => {
                e.preventDefault()
                setUpdate(switcher(b.name, false, true, "All", query))}}>
              {b.name}
            </Tag>)
        })}</p>}
      </Content> 
    </>
  )
}

export default Country


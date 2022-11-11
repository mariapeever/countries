import React, { useState, useEffect } from "react"

import { 
  ErrorAlerts } from "../common" 

import {
  Box,
  Section,
  Block
} from "../../styled"

import {
  Redirect
} from "react-router-dom"

import switcher from "./switcher"

import Countries from "./Countries"
import CountryBox from "./CountryBox"
import Detailed from "./Detailed"
import Short from "./Short"
import StageArea from "./StageArea"
import Empty from "./Empty"

const Search: React.FC = ({ children, ...rest }: any): JSX.Element => {

  const [query, setQuery]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState("")

  const [errors, setErrors]: [
    string[], 
    React.Dispatch<React.SetStateAction<string[]>>
  ] = useState([])

  const [region, setRegion]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState("All")

  const [detailed, setDetailed]: [
    boolean,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState(false)

  const [loaded, setLoaded]: [
    boolean,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState(false)

  const [update, setUpdate]: [
    {[x: string]: any
     },
    React.Dispatch<React.SetStateAction<string>>
  ] = useState(() => {
    return ({
      data: switcher("", false, false, "All", ""),
      detailed: false,
      redirect: "/"
    })
  })

  if (!loaded && rest.data.length) {
    setUpdate({
      data: rest.data,
      detailed: false,
      redirect: "/"})
    setLoaded(true)
  }

  const selectRegion = (regionName: string): void => {
    setRegion(regionName)
    setUpdate(switcher(regionName, true, false, regionName, query))
  } 

  const isLoaded = (): boolean => loaded && update.data

  const redirectCheck = () => update.redirect != rest.path
  const errorsCheck = () => errors.length > 0 
  const shortCheck = () => !update.detailed
  const detailedCheck = () => update.data && update.detailed
  const loadedCheck = () => loaded && update.data
  const emptyCheck = () => !update.data.length 
          
  return(
    <Section>
      {redirectCheck() && 
        <Redirect to={update.redirect} />}

      <StageArea
        query={query}
        region={region}
        setQuery={setQuery}
        setUpdate={setUpdate}
        setErrors={setErrors}
        selectRegion={selectRegion}
        short={shortCheck()}
        detailed={detailedCheck()} />

      {errorsCheck() &&
        <ErrorAlerts
            errors={errors} />}

      {emptyCheck() &&
        <Empty />}

      <Countries
        Box={detailedCheck() ? React.Fragment : Block }>
        <>
          {loadedCheck() &&
           update.data.map((country, i) => 
            <CountryBox
              detailed={update.detailed}
              key={i}
              Fields={update.detailed ? Detailed : Short}
              subProps={{
                country: country,
                region: region, 
                query: query, 
                setUpdate: setUpdate
              }}
            />
          )}
        </>
      </Countries>
    </Section>
  )
}

export default Search


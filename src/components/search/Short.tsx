import React, { memo } from "react"

import {
  Box
} from "../../styled"

import switcher from "./switcher"

import { 
  Country as CountryType} from "../../reducers/countrySlice"

/**
 * Short box
 * @param  {any} children The children
 * @param  {CountryType} country The country
 * @param  {string} region The region
 * @param  {string} query The query
 * @param  {any} setUpdate The setUpdate upstream function
 * @return {JSX.Element} The short box component
 */
const Short: React.FC = ({ children, country, region, query, setUpdate, ...rest }): JSX.Element => {

  return (
    <Box
      onClick={(e: any): void => {
        e.preventDefault()
        setUpdate(switcher(country.name, false, true, region, query))}}>
      {children}
    </Box>)
}

export default memo(Short)




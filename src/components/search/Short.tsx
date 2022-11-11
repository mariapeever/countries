import React, { memo } from "react"

import {
  Box
} from "../../styled"

import switcher from "./switcher"

const Short: React.FC = ({ children, country, region, query, setUpdate, ...rest }): JSX.Element => {

  return (
    <Box
      onClick={e => {
        e.preventDefault()
        setUpdate(switcher(country.name, false, true, region, query))}}>
      {children}
    </Box>)
}

export default memo(Short)




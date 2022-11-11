import React, { useState } from "react"

import {
  Back,
  BackIcon
} from "../../styled"

import switcher from "./switcher"

const BackButton: React.FC = ({ query, region, setUpdate, ...rest }: any): JSX.Element => {
  // The `state` arg is correctly typed as `RootState` already
  // console.log("Body")

  const [effect, setEffect]: [
    boolean,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState(false)

  const handleHover = (): void => {
    setEffect(true)
    setTimeout(() => setEffect(false), 1000)
  }

  const handleBack = (): void => {
    setUpdate(switcher(query, false, false, region, query))
  }

  return (
    <Back 
      color="primary"
      onClick={handleBack}
      onMouseEnter={handleHover}
      size="sm"
     >
      {effect && 
        <BackIcon 
          shake />}
      {!effect &&
        <BackIcon />}
      Back</Back>)
}

export default BackButton


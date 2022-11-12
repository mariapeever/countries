import React, { useState, useEffect } from "react"

import {
  Back,
  BackIcon
} from "../../styled"

import switcher from "./switcher"
/**
 * Back button
 * @param  {string} query The query
 * @param  {string} region The region
 * @param  {any} setUpdate The setUpdate upstream function
 * @return {JSX.Element} The back button component
 */
const BackButton: React.FC = ({ query, region, setUpdate, ...rest }: any): JSX.Element => {

  const [effect, setEffect]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = useState(false)

  const handleHover = (): void => {
    setEffect(true)
    setTimeout(() => setEffect(false), 1000)
  }

  return (
    <Back 
      color="primary"
      onClick={(e: any): void => {
        e.preventDefault()
        setUpdate(switcher(query, false, false, region, query))}}
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


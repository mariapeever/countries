import React, { memo } from "react"
import { 
  Overlay,
  LoaderIcon } from "../../styled"

/**
 * Spinner
 * @return {JSX.Element} The spinner component
 */
const Spinner: React.FC = (): JSX.Element => {

  return(
    <Overlay>
      <LoaderIcon 
        active
        type="line-scale" />
    </Overlay>
  )
}

export default memo(Spinner)
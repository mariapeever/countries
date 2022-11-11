import React, { memo } from "react"
import { 
  Overlay,
  LoaderIcon } from "../../styled"

const Spinner: React.FC = (): JSX.Element => {
  // The `state` arg is correctly typed as `RootState` already

  return(
    <Overlay>
      <LoaderIcon 
        active
        type="line-scale" />
    </Overlay>
  )
}

export default memo(Spinner)
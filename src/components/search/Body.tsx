import React, { memo } from "react"

import {
  BodyDetailed
} from "../../styled"

const Body: React.FC = ({ children, Fields, ...rest }: any): JSX.Element => {
  // The `state` arg is correctly typed as `RootState` already
  // console.log("Body")
  return (
    <Fields>
      {children}
    </Fields>)
}

export default memo(Body)
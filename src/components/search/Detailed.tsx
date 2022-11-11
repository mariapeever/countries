import React, { memo } from "react"

import {
  BoxDetailed
} from "../../styled"

const Detailed: React.FC = ({ children, ...rest }: any): JSX.Element => {

  return (
    <BoxDetailed
      className="row">
      {children}
    </BoxDetailed>)
}

export default memo(Detailed)




import React, { memo } from "react"

import {
  BoxDetailed
} from "../../styled"

/**
 * Detailed box
 * @param  {any} children The children
 * @return {JSX.Element} The detailed box component
 */
const Detailed: React.FC = ({ children, ...rest }: any): JSX.Element => {

  return (
    <BoxDetailed
      className="row">
      {children}
    </BoxDetailed>)
}

export default memo(Detailed)




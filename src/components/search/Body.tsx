import React, { memo } from "react"

import {
  BodyDetailed
} from "../../styled"

/**
 * Body
 * @param  {any} children The children
 * @param  {JSX.Element} Fields The variable fields component
 * @return {JSX.Element} The country body component
 */
const Body: React.FC = ({ children, Fields, ...rest }: any): JSX.Element => {

  return (
    <Fields>
      {children}
    </Fields>)
}

export default memo(Body)
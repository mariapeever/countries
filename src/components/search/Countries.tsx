import React, { memo } from "react"

/**
 * Countries
 * @param  {any} children The children
 * @param  {JSX.Element} Box The variable box component
 * @return {JSX.Element} The countries component
 */
const Countries: React.FC = ({ children, Box, ...rest }: any): JSX.Element => {

  return (
    <Box>
      {children}
    </Box>)
}

export default memo(Countries)


import React, { memo } from "react"

const Countries: React.FC = ({ children, Box, ...rest }: any): JSX.Element => {
  // The `state` arg is correctly typed as `RootState` already
  // console.log("Countries")
  return (
    <Box>
      {children}
    </Box>)
}

export default memo(Countries)


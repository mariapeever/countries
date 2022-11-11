import React, { memo } from "react"

import MainNav from "./MainNav"
/**
 * Header
 * @return {JSX.Element} The header component
 */
const Header: React.FC = (): JSX.Element => {
  return(
    <header>
      <MainNav />
    </header>
  )
}

export default memo(Header)



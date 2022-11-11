import React, { memo } from "react"

import MainNav from "./MainNav"

const Header: React.FC = (): JSX.Element => {
  return(
    <header>
      <MainNav />
    </header>
  )
}

export default memo(Header)



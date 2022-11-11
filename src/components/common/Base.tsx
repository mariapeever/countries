import React, { memo } from "react"

import Footer from "./Footer"
import Routes from "./Routes"

const Base: React.FC = (): JSX.Element => { 

  return(
    <>
      <Routes />
      <Footer />
    </>
  )
}

export default memo(Base)

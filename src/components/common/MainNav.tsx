import React, { memo, useState } from "react"

import {
  A,
  Form,
} from "@bootstrap-styled/v4"

import Routes from "./Routes"

import {
  Top,
  Brand,
  Wrapper,
  Logo
} from "../../styled"

const MainNav: React.FC = ({ children }): JSX.Element => {
  // The `state` arg is correctly typed as `RootState` already

  return(
    <header>
      <Top 
        toggleable="sm"
        gheight>
        <Wrapper>
          <div className="d-flex justify-content-between">
            <Brand tag={A} to="javascript:;">
              <Logo>Where in the world?</Logo>
            </Brand>
          </div>
          <Form inline className="my-lg-0 ml-auto">
            {children}
          </Form>
        </Wrapper>
      </Top>
    </header>
  )
}

export default memo(MainNav)

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

import {
  Link
} from "react-router-dom"

/**
 * MainNav
 * @param  {any} children The children
 * @return {JSX.Element} The main nav component
 */
const MainNav: React.FC = ({ children }: any): JSX.Element => {

  return(
    <header>
      <Top 
        toggleable="sm"
        gheight>
        <Wrapper>
          <div className="d-flex justify-content-between">
            <Brand tag={A} to="javascript:;">
              <Logo>
                <Link to="/">Where in the world?</Link>
              </Logo>
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

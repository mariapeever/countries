import React, { memo, useState } from "react"

import { 
  Alert,
  Col
} from "@bootstrap-styled/v4"

import {
  ErrorBox
} from "../../styled"

const ErrorAlerts = ({errors}: any) => {

  const [isOpen, setIsOpen]: [
    boolean, 
    React.Dispatch<React.SetStateAction<string[]>>
  ] = useState(true)

  return (
    <ErrorBox>
        {errors.map((e: string, i: number) => 
          <Col 
            xs="12"
            lg="5" 
            key={i}>
            <Alert 
              color="danger"
              isOpen={isOpen}
              onClick={() => setIsOpen(false)}>{e}</Alert>
          </Col>)}
    </ErrorBox>
  )
}
    
export default memo(ErrorAlerts)
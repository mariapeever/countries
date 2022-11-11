import React, { memo } from "react"

import {
  Col
} from  "@bootstrap-styled/v4"

import Country from "./Country"

const CountryBox: React.FC = ({ detailed, Fields, subProps, ...rest }: any): JSX.Element => {

  const props: { [x: string]: any } = detailed ? {} : subProps 
  return (
    <Col 
      lg={detailed ? "12" : "3"}> 
      <Fields {...props}>
        <Country 
          country={subProps.country}
          detailed={detailed}
          region={subProps.region}
          query={subProps.query}
          setUpdate={subProps.setUpdate} />
      </Fields>
    </Col>)
}
export default memo(CountryBox)




            
import React, { memo } from "react"

import {
  Col
} from  "@bootstrap-styled/v4"

import {
  Stage
} from "../../styled"

import SearchBox from "./SearchBox"
import Filter from "./Filter"
import BackButton from "./BackButton"

const StageArea: React.FC = ({ 
  query, 
  region, 
  setQuery,
  setUpdate,
  setErrors,
  selectRegion,
  short,
  detailed,
  ...rest }: any): JSX.Element => {

  return (
    <Stage>
      {short &&
        <>
          <Col lg="5">
            <SearchBox
              query={query}
              region={region}
              setQuery={setQuery}
              setUpdate={setUpdate}
              setErrors={setErrors} />
          </Col>
          <Col 
            lg="3"
            className="offset-lg-4">
            <Filter
              region={region}
              selectRegion={selectRegion} />
          </Col>
        </>}
      {detailed &&
        <Col 
          md="2">
          <BackButton
            query={query}
            region={region}
            setUpdate={setUpdate}
          />
        </Col>}
    </Stage>)
}
export default memo(StageArea)




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

/**
 * Stage area - the search form and the regions filter
 * @param  {string} query The query
 * @param  {string} region The region
 * @param  {any} setQuery The setQuery upstream function
 * @param  {any} setUpdate The setUpdate upstream function
 * @param  {any} setErrors The setErrors upstream function 
 * @param  {any} selectRegion The selectRegion upstream function 
 * @param  {boolean} short If short
 * @param  {boolean} short If detailed
 * @return {JSX.Element} The Stage area component
 */
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




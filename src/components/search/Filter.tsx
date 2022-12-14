import React, { useState } from "react"

import { 
  DropdownItem
} from "@bootstrap-styled/v4"

import {
  FilterButton,
  Toggle,
  FilterIcon,
  FilterMenu,
  SearchInputGroup,
  SearchForm
} from "../../styled"

import { regions } from "../../utils/config"

/**
 * Regions filter
 * @param  {string} region The region
 * @param  {any} selectRegion The selectRegion upstream function
 * @return {JSX.Element} The Filter component
 */
const Filter: React.FC = ({ region, selectRegion, ...rest }: any): JSX.Element => {

  const [dropdownState, setDropdownState]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = useState(false)

  return (
    <FilterButton
      isOpen={dropdownState}
      toggle={(): void => setDropdownState(!dropdownState)}>
      <Toggle>
        Filter by region
        <FilterIcon />
      </Toggle>
      <FilterMenu>
        {regions.map((r: string, i: number): JSX.Element => {
          return(<DropdownItem
            key={i} 
            onClick={(): void => selectRegion(r)} 
            className={r == region ? "active": ""}>{r}</DropdownItem>)
        })}
      </FilterMenu>
    </FilterButton>)
}
export default Filter




            
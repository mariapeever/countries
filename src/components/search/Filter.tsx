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

const Filter: React.FC = ({ region, selectRegion, ...rest }: any): JSX.Element => {

  const [dropdownState, setDropdownState]: [
    boolean,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState(false)

  return (
    <FilterButton
      isOpen={dropdownState}
      toggle={() => setDropdownState(!dropdownState)}>
      <Toggle>
        Filter by region
        <FilterIcon />
      </Toggle>
      <FilterMenu>
        {regions.map((r, i) => {
          return(<DropdownItem
            key={i} 
            onClick={() => selectRegion(r)} 
            className={r == region ? "active": ""}>{r}</DropdownItem>)
        })}
      </FilterMenu>
    </FilterButton>)
}
export default Filter




            
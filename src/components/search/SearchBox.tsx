import React from "react"

import {
  Label
} from  "@bootstrap-styled/v4"

import {
  SearchField,
  SearchIcon,
  Addon,
  SearchFormGroup,
  SearchInputGroup,
  Stage,
  SearchForm
} from "../../styled"

import switcher from "./switcher"

import Validate from "../../utils/validators" 

const SearchBox: React.FC = ({ query, region, setQuery, setUpdate, setErrors, ...rest }: any): JSX.Element => {

  const handleChange = (e: any): void => {
    setQuery(e.target.value)
    try {
      let err = new Validate(
        "country name",
        e.target.value,
        ["format"]).errors
      if (err.message.length) {
        throw err
      } else {
        setErrors([])
        setUpdate(switcher(e.target.value, false, false, region, query))
      }
    } catch(err) {
      setErrors(
        Array.isArray(err.message) ? 
          err.message : new Array(err.message))  
    }
  }

  return (
    
    <SearchForm 
      inline 
      className="my-lg-0 form-inline">
      <SearchFormGroup>
        <Label hidden htmlFor="inline-form-input-group">Username</Label>
        <SearchInputGroup>
          <Addon>
            <SearchIcon />
          </Addon>
          <SearchField 
            type="text" 
            value={query}
            placeholder="Search for a country..." 
            onChange={handleChange} />           
        </SearchInputGroup>
      </SearchFormGroup>
    </SearchForm>)
}
export default SearchBox

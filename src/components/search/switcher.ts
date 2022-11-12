import React from "react"

import { 
  selectCountries,
  searchCountries,
  Country as CountryType } from "../../reducers/countrySlice"
/**
 * Data switcher
 * @param  {string} filter The filter
 * @param  {boolean} regional If regional
 * @param  {boolean} selected If selected
 * @param  {string} region The region
 * @param  {string} query The query
 * @return {{ [x: string]: any }} The data, detailed boolean and redirect path
 */
const switcher = (filter, regional, selected, region, query): { [x: string]: any } => {
  
  var update: any = []
  if (filter == "" || filter == "All" && regional) {
    update = selectCountries()
  } else if (regional) {
    update = selectCountries().filter(e => e.region == filter)
  } else {
    update = searchCountries(filter)
  }
  if (!regional && region != "All") {
    update = update.filter((e: CountryType): boolean => e.region == region)
  } else if (regional && query.length) {
    update = update.filter((e: CountryType): boolean => {
      const process: (e: string) => string = (c: string): string => c.toLowerCase()
        .replaceAll(new RegExp(`[ ']`, "g"), "_")
        .replaceAll(new RegExp(`[()]`, "g"), "")
      let q: string = process(query)
      let c: string = process(e.name)
      return new RegExp(`.*${q}.*`, "g").test(c)
    })
  }
  console.log("switcher", {
    data: update, 
    detailed: (update.length == 1 && selected) ? true : false, 
    redirect: (update.length == 1 && selected) ? "/" + update[0].alpha3Code : "/"
  })
  return ({
    data: update, 
    detailed: (update.length == 1 && selected) ? true : false, 
    redirect: (update.length == 1 && selected) ? "/" + update[0].alpha3Code : "/"
  })
}

export default switcher
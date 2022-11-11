import React from "react"

import { 
  selectCountries,
  searchCountries } from "../../reducers/countrySlice"

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
    update = update.filter(e => e.region == region)
  } else if (regional && query.length) {
    update = update.filter(e => {
      const process = (c) => c.toLowerCase()
        .replaceAll(new RegExp(`[ ']`, "g"), "_")
        .replaceAll(new RegExp(`[()]`, "g"), "")
      let q = process(query)
      let c = process(e.name)
      return new RegExp(`.*${q}.*`, "g").test(c)
    })
  }

  return ({
    data: update, 
    detailed: (update.length == 1 && selected) ? true : false, 
    redirect: (update.length == 1 && selected) ? "/" + update[0].alpha3Code : "/"
  })
}

export default switcher
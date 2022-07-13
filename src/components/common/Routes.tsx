import React, { Suspense, lazy, useState, useEffect } from "react"

import { useAppDispatch } from "../../hooks"

import { unwrapResult } from "@reduxjs/toolkit" 

import {
  Switch,
  Route
} from "react-router-dom"

import { 
  fetchCountries,
  countriesFetched,
  selectCountries,
  Country as CountryType } from "../../reducers/countrySlice"

import Spinner from "./Spinner"

const Search: React.LazyExoticComponent<React.FC> = 
  lazy<React.FC>((): Promise<{ default: React.FC }> => import('../search/Search')); // Lazy-loaded
/**
 * Routes - Generates routes
 * @return {JSX.Element} The routes component
 */
const Routes: React.FC = (): JSX.Element => {
  // states
  const [loaded, setLoaded]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = useState(false)

  const [countries, setCountries]: [
    CountryType[],
    React.Dispatch<React.SetStateAction<CountryType[]>>
  ] = useState([])

  // dispatch
  const dispatch = useAppDispatch()
   
  const getCountries: any = async ( all: boolean | null, query: string ) : Promise<void> => {
    // get countries data
    // dispatch to fetch countries async thunk

    const fetchedCountries: CountryType[] | any = 
      await dispatch(fetchCountries({ query: null, prop: false }))
        .then(unwrapResult)

    await dispatch(
      countriesFetched(fetchedCountries))

    setCountries(selectCountries())
  }

  if (!loaded) {
    getCountries(true, "")
    if (countries.length) 
       setLoaded(true)
  }

  return(  
    <Suspense fallback={<Spinner />}> 
      <Switch>
        {[{
            path: "/",
            data: countries,
            component: Search
        }, ...countries.map((country: {[x: string]: any }, i: number): 
          {[x: string]: any } => {
          return {
            path: "/" + country.alpha3Code,
            data: [country],
            component: Search
          }
        })].map((route: {[x: string]: any }, i: number): 
          JSX.Element => (
          <Route
            key={i}
            path={route.path}>
            <route.component {...route} /> 
          </Route>
        ))}
      </Switch>
    </Suspense>
  )
}

export default Routes

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

const Search = lazy(() => import('../search/Search')); // Lazy-loaded

const Routes: React.FC = (): JSX.Element => {

  const [errors, setErrors]: [
    string[],
    React.Dispatch<React.SetStateAction<string[]>>
  ] = useState([])

  const [loaded, setLoaded]: [
    boolean,
    React.Dispatch<React.SetStateAction<string[]>>
  ] = useState(false)

  const dispatch = useAppDispatch()
   
  const getCountries = async ( all: boolean | null, query: string ) : Promise<void> => {

    try {
      const fetchedCountries: CountryType[] | any = 
        await dispatch(fetchCountries({ query: null, prop: false }))
          .then(unwrapResult)

      await dispatch(
        countriesFetched(fetchedCountries))

      throw Error
    } catch (err) {
      var errors = Array.isArray(err.message) ? 
        err.message : new Array(err.message)
      setErrors(errors) 
    }
  }

  useEffect(() => {
    if(!loaded) {
      getCountries(true, null)
      setLoaded(true)
    }
  }, [loaded])
 
  return(  
    <Suspense fallback={<Spinner />}> 
      <Switch>
        {[{
            path: "/",
            data: selectCountries(),
            component: Search
        }, ...selectCountries().map((country: any, i: number) => {
          return {
            path: "/" + country.alpha3Code,
            data: [country],
            component: Search
          }
        })].map((route, i) => (
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

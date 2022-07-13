// Country slice
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"

// interfaces

// Flag interface
interface Flag {
	svg: string,
	png: string
}

// Currency interface
interface Currency {
	code: string,
	name: string,
	symbol: string
}

// Language interface
interface Language {
	iso639_1: string,
	iso639_2: string,
	name: string,
	nativeName: string
}

// RegionalBloc interface
interface RegionalBloc {
	acronym: string,
	name: string
}

// Country interface
export interface Country {
	"name": string,
    "topLevelDomain": string[],
    "alpha2Code": string,
    "alpha3Code": string,
    "callingCodes": string[],
    "capital": string,
    "altSpellings": string[],
    "subregion": string,
    "region": string,
    "population": number,
    "latlng": number[],
    "demonym": string,
    "area": number,
	"timezones": string[],
	"borders": string[],
	"nativeName": string,
	"numericCode": string,
	"flags": Flag[],
	"currencies": Currency[],
	"languages": Language[],
	"translations": { [x: string]: string },
	"flag": string,
	"regionalBlocs": RegionalBloc[],
	"cioc": string,
	"independent": boolean
}

// CountryState interface
export interface CountryState { 
	countries: { [x: string]: Country },
	status: "idle" | "loading" | "failed" | "success"
}

// The initial state
const initialState: CountryState = { 
	countries: {},
	status: "idle"
}

// The current state
var currentState: CountryState = Object.assign({}, initialState)

/**
 * Async thunk to fetch countries data
 * @param  {{ prop: boolean, query: string}} query The query
 * @return {Country[]} The countries data
 */
export const fetchCountries: any = createAsyncThunk<
	void | Country[],
  	string
>("symbol/fetchCountries", async (query: { prop: boolean, query: string}): Promise<any> => {

	var url = query.prop ? 
		`https://restcountries.com/v2/${query.prop}/${query.query}` : 
		`https://restcountries.com/v2/all`
	return await fetch(url)
		.then((response: any): void => response.json())
			.then((data: any): Country[] => {
				return data as Country[]
			})
				.catch((error: string): void => {
					console.error("Error: ", error)
				}) 
})

// constructor
const constructor: 
(country: Country) => Country = 
(country: Country): Country  => {
	return {
		name: country.name,
	    topLevelDomain: country.topLevelDomain,
	    alpha2Code: country.alpha2Code,
	    alpha3Code: country.alpha3Code,
	    callingCodes: country.callingCodes,
	    capital: country.capital,
	    altSpellings: country.altSpellings,
	    subregion: country.subregion,
	    region: country.region,
	    population: country.population,
	    latlng: country.latlng,
	    demonym: country.demonym,
	    area: country.area,
		timezones: country.timezones,
		borders: country.borders,
		nativeName: country.nativeName,
		numericCode: country.numericCode,
		flags: country.flags,
		currencies: country.currencies,
		languages: country.languages,
		translations: country.translations,
		flag: country.flag,
		regionalBlocs: country.regionalBlocs,
		cioc: country.cioc,
		independent: country.independent
	} 
}

/**
 * Prepare countries payload
 * @param  {Country[]} payload The payload
 * @return {{ payload: Country[] }} The countries payload
 */
const prepareCountriesPayload: 
	(payload: Country[]) => { payload: Country[] } = 
	(payload: Country[]) : { payload: Country[] } => {
	
	var countries: any = {}
	payload.forEach((e: Country): void => {
		let name = e.name.toLowerCase().replaceAll(new RegExp(`[ ']`, "g"), "_").replaceAll(new RegExp(`[()]`, "g"), "")
		countries[name] = constructor(e)
	})

	return { payload: countries }
}

// Country slice - redux
export const countrySlice = createSlice({
	name: "country",
	initialState,
	reducers: {
		countriesFetched: {
		    reducer(state, action: PayloadAction<{ payload: { [x: string]: Country[] }}>): void {		    	
		    	currentState.countries = action.payload
		    },
		    prepare(payload: Country[]): { payload: Country[] } {
		    	return prepareCountriesPayload(payload)
		    }
		},
	}
})

const search: 
	(query: string) => string[] = 
	(query: string): string[] => {
	const name = query.toLowerCase().replaceAll(new RegExp(`[ ']`, "g"), "_").replaceAll(new RegExp(`[()]`, "g"), "")
	return Object.keys(currentState.countries).filter((val: string): boolean => 
		new RegExp(`${name}.*`, "g").test(val))
}

export const { countriesFetched }: any = countrySlice.actions

export const searchCountries: 
	(query: string) => Country[] | boolean = 
	(query: string): Country[] | boolean => {

	var names: string[] = search(query)
	var countries: Country[] = []
	names.forEach((name: string): void => {
		countries.push(currentState.countries[name])
	})
	return countries.length ? countries : false 
}

export const searchCountryByCode: 
	(code: string) => Country | boolean = 
	(code: string): Country | boolean => {
	const country: Country = Object.values(currentState.countries).filter((country: {[x: string]: any}): boolean =>
		(country.alpha3Code == code) ? true : false)[0] 
	return country ? country : false
}

export const selectCountries: 
	() => Country[] = 
	(): Country[] => {
		console.log("selectCountries", Object.values(currentState.countries))
		return Object.values(currentState.countries)}

export default countrySlice.reducer
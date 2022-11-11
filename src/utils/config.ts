import CountryType, { searchCountryByCode } from "../reducers/countrySlice"

export const regions = [
	'All',
	'Asia', 
	'Europe', 
	'Africa', 
	'Oceania', 
	'Americas', 
	'Polar', 
	'Antarctic Ocean', 
	'Antarctic']

const formatPopulation = (population) => {
	population = population.toString().split("")
  const commas = Math.floor(population.length/3)
  for(let i = 1; i <= commas; i++) {
  	let index = population.length - 3*i - (i-1)
  	if (index > 0)
    	population.splice(index, 0, ",")
  }
  return population.join("")
}

export const detailedFields = (country: CountryType) => {
	var fields = []

	if (country.borders != undefined) fields.push({ name: "Native Name", value: country.altSpellings[1] })
	if (country.population != undefined) fields.push({ name: "Population", value: formatPopulation(country.population) })
	if (country.region != undefined) fields.push({ name: "Region",  value: country.region })
	if (country.subregion != undefined) fields.push({ name: "Sub Region", value: country.subregion })
	if (country.capital != undefined) fields.push({ name: "Capital", value: country.capital })
	if (country.topLevelDomain != undefined) fields.push({ name: "Top Level Domain", value: country.topLevelDomain[0] })
	if (country.currencies != undefined) fields.push({ name: "Currencies", value: country.currencies.map(e => e.name).join(", ") })
	if (country.languages != undefined) fields.push({ name: "Languages", value: country.languages.map(e => e.name).join(", ") })
	if (country.borders != undefined) fields.push({ name: "Border Countries", value: country.borders.join(", ") })
	
	return fields
}

export const shortFields = (country: CountryType) => {
	var fields = []

	if (country.population != undefined) fields.push({ name: "Population", value: formatPopulation(country.population) })
	if (country.region != undefined) fields.push({ name: "Region",  value: country.region })
	if (country.capital != undefined) fields.push({ name: "Capital", value: country.capital })
	
	return fields
}
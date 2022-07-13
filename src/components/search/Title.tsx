import React, { memo } from "react"

/**
 * Title
 * @param  {JSX.Element} Heading The variable Heading component
 * @param  {{[x: string]: any}} country The country data

 * @return {JSX.Element} The title component
 */
const Title: React.FC = ({ Heading, country, ...rest }: any): JSX.Element => {

  return (
    <Heading
      className="title-link"
      to={"/" + country.alpha3Code}  >
      {country.name}
    </Heading>)
}

export default memo(Title)


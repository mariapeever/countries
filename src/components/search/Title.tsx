import React, { memo } from "react"

const Title: React.FC = ({ Heading, country, ...rest }: any): JSX.Element => {
  // The `state` arg is correctly typed as `RootState` already
  // console.log("Title", country)
  return (
    <Heading
      className="title-link"
      to={"/" + country.alpha3Code}  >
      {country.name}
    </Heading>)
}

export default memo(Title)


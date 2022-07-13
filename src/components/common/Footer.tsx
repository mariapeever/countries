import React, { memo } from "react"
/**
 * Footer
 * @return {JSX.Element} The footer component
 */
const Footer: React.FC = (): JSX.Element => {

  return(
     <p className="text-center py-4">Countries. All rights reserved.</p>
  )
}

export default memo(Footer)

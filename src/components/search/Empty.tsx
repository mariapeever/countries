import React, { memo } from "react"

import { 
  Row,
  Col
} from "@bootstrap-styled/v4"

const Empty: React.FC = (): JSX.Element => {

  return (
    <Row>
      <Col 
        xs="12">
        <p className="text-left py-2 pl-4">No results.</p>
      </Col>
    </Row>)
}
export default memo(Empty)




            


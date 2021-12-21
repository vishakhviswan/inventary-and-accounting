import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Processing() {
    return (
      <div className="processing_Parent Div">
        <div className="processing_ChildDiv">
          <div className="headding">
            <h4>Processing of Materials</h4>
          </div>
          <Col>
            <Row>
              <div className="table_header">
                <p>Input</p>
              </div>
            </Row>
            <Row>
              <div className="table_header">
                <p>Output</p>
              </div>
            </Row>
          </Col>
          <div className="table_header"></div>
        </div>
      </div>
    );
}

export default Processing

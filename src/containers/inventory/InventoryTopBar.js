import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import "./InventoryTopBar.css";
function InventoryTopBar() {
  const [recived, setRecived] = useState("");
  const [afterProcess, setAfterProcess] = useState("");
  
  return (
    <div className="topBar_ParentDiv">
      <div className="topBar_childDiv">
        <div className="topBar_Content">
          <Row>
            <Col>
              <div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Recived</Form.Label>
                  <Form.Select
                    size="sm"
                    value={recived}
                    onChange={(e) => setRecived(e.target.value)}
                  >
                    <option>Select One....</option>
                    <option>Row Cashew Nuts</option>
                    <option>Cutting Kernels</option>
                    <option>Peeling Machine</option>
                    <option>Peeled Kernels</option>
                    <option>Graded Kernels</option>
                    <option>Finished Kernels</option>
                  </Form.Select>
                </Form.Group>
              </div>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Lot #</Form.Label>
                <Form.Select
                  size="sm"
                  value={recived}
                  onChange={(e) => setRecived(e.target.value)}
                >
                  <option>Select One....</option>
                  <option>Row Cashew Nuts</option>
                  <option>Cutting Kernels</option>
                  <option>Peeling Machine</option>
                  <option>Peeled Kernels</option>
                  <option>Graded Kernels</option>
                  <option>Finished Kernels</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>After Process</Form.Label>
                  <Form.Select
                    value={afterProcess}
                    onChange={(e) => setAfterProcess(e.target.value)}
                    size="sm"
                  >
                    <option>Select One....</option>
                    <option>
                      {recived === "Row Cashew Nuts" ? "Cutting Kernels" : null}
                    </option>
                    <option>
                      {recived === "Cutting Kernels" ? "Peeling Machine" : null}
                    </option>
                    <option>
                      {recived === "Peeling Machine" ? "Peeled Kernels" : null}
                    </option>
                    <option>
                      {recived === "Peeled Kernels" ? "Graded Kernels" : null}
                    </option>
                    <option>
                      {recived === "Graded Kernels" ? "Finished Kernels" : null}
                    </option>
                  </Form.Select>
                </Form.Group>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default InventoryTopBar;

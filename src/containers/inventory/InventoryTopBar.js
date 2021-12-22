import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import "./InventoryTopBar.css";
function InventoryTopBar() {

  const [recived, setRecived] = useState("");

  
// const current = new Date();
// const date = `${current.getDate()}/${
//   current.getMonth() + 1
// }/${current.getFullYear()}`;

  return (
    <div className="topBar_ParentDiv">
      <div className="topBar_childDiv">
        <div className="topBar_Content">
          <Row>
            <Col>
              <div>
                <Form.Group className="mb-3" controlId="formBasicRecived">
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
              <Form.Group className="mb-3" controlId="formBasicLot">
                <Form.Label>Lot #</Form.Label>
                <Form.Select
                  size="sm"

                >
                  <option>Select One....</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>After Process</Form.Label>
                  <Form.Select
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
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                />
              </Form.Group>
              {/* <InputGroup className="mb-3" controlId="formBasicEmail">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  className="text-center mt-5 mb-4"
                  md={1}
                  type="text"
                  defaultValue={date}
                />
              </InputGroup> */}
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default InventoryTopBar;

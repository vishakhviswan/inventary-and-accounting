import React, { useState } from "react";
import { Container, Form, Col, Row } from "react-bootstrap";
import NavbarHeader from "../Components/Navbar";

import "./Cutting.css";
function Cutting() {
  return (
    <div className="cutting_parentDiv">
      <NavbarHeader />
      <div className="cutting_childDiv">
        <div className="cutting_form">
          <Container>
            <Form>
            
              <Row>
                <Col sm>
                  <Form.Label>Roasted Bags</Form.Label>
                  <Form.Control placeholder="100" />
                </Col>
                <Col sm>
                  <Form.Label> Select One</Form.Label>

                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="Local RCN"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="Imported RCN"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                    </div>
                  ))}
                </Col>
                <Col sm>
                  <Form.Label> Mark</Form.Label>

                  c
                </Col>
                <Col sm>
                  <Form.Label> Outurn</Form.Label>

                  <Form.Select size="sm">
                    <option>176, 301, 50</option>
                    <option>176, 300, 50</option>
                    <option>176, 299, 50</option>
                    <option>176, 298, 50</option>
                  </Form.Select>
                </Col>
                <Col sm>
                  <Form.Label>Date</Form.Label>
                  <Form.Control placeholder="31/05/2021" />
                </Col>
              </Row>

              {/* cutting outern ######################################*/}
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalEmail"
              >
                <Form.Label column sm={1}>
                  Wholes
                </Form.Label>
                <Col sm={2}>
                  <Form.Control type="number" placeholder="Quantiny in kgs" />
                </Col>
                <Col sm={1}>
                  <Form.Control
                    disabled
                    type="number"
                    placeholder="Quantiny in Pound"
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalEmail"
              >
                <Form.Label column sm={1}>
                  Pieces
                </Form.Label>
                <Col sm={2}>
                  <Form.Control type="number" placeholder="Quantiny in kgs" />
                </Col>
                <Col sm={1}>
                  <Form.Control disabled type="number" placeholder="" />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalEmail"
              >
                <Form.Label column sm={1}>
                  Total
                </Form.Label>
                <Col sm={2}>
                  <Form.Control
                    disabled
                    type="Number"
                    placeholder="Total Qty"
                  />
                </Col>
                <Col sm={1}>
                  <Form.Control disabled type="number" placeholder="" />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalEmail"
              >
                <Form.Label column sm={1}>
                  Pw
                </Form.Label>
                <Col sm={2}>
                  <Form.Control type="number" placeholder="Quantiny in kgs" />
                </Col>
                <Col sm={1}>
                  <Form.Control disabled type="number" placeholder="" />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalEmail"
              >
                <Form.Label column sm={1}>
                  Rej
                </Form.Label>
                <Col sm={2}>
                  <Form.Control
                    disabled
                    type="number"
                    placeholder="Quantiny in kgs"
                  />
                </Col>
                <Col sm={1}>
                  <Form.Control disabled type="number" placeholder="" />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalEmail"
              >
                <Form.Label column sm={1}>
                  Total
                </Form.Label>
                <Col sm={2}>
                  <Form.Control
                    type="number"
                    placeholder="Total Qty"
                  />
                </Col>
                <Col sm={1}>
                  <Form.Control
                    className="cutting_subInput"
                    disabled
                    type="number"
                    placeholder="50.45"
                  />
                </Col>
              </Form.Group>

              {/* <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  className="formControl"
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group> */}
            </Form>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Cutting;

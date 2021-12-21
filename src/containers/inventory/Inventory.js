import React, { useState } from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";

import "./Inventory.css";

function Inventory() {
  const [number, setNumber] = useState(0);

  function handleEnter(event) {
    if (event.keyCode === 13) {
      const form = event.target.form;
      const index = Array.prototype.indexOf.call(form, event.target);
      form.elements[index + 1].focus();
      event.preventDefault();
    } else if (event.keyCode === 37) {
      const form = event.target.form;
      const index = Array.prototype.indexOf.call(form, event.target);
      form.elements[index - 1].focus();
      event.preventDefault();
    } else if (event.keyCode === 40) {
      setNumber(number + 1);
      event.preventDefault();
    } else if (event.keyCode === 46) {
      setNumber(number - 1);
      event.preventDefault();
    } else if (event.keyCode === 39) {
      const form = event.target.form;
      const index = Array.prototype.indexOf.call(form, event.target);
      form.elements[index + 1].focus();
      event.preventDefault();
      console.log(form);
    }
  }
  
  return (
    <div className="inv_ParentDiv">
      <div className="inv_ChildDiv">
        <Container>
          <Row>
            {/* ****************INPUT************************************************* */}
            <Col className="invColOne invCol " md={5} lg={5} sm={5}>
              <div className="colHeading d-flex justify-content-center">
                <span>Input</span>
              </div>
              <hr />
              <div className="inputContent">
                <Form id="inputForm">
                  <Row className="inputRow">
                    <Col>
                      <Form.Control
                        onKeyDown={handleEnter}
                        md={3}
                        lg={3}
                        sm={3}
                        type="text"
                      />
                    </Col>
                    <Col>
                      <InputGroup>
                        <InputGroup.Text id="basic-addon1">Lot</InputGroup.Text>
                        <Form.Control
                          onKeyDown={handleEnter}
                          md={1}
                          type="text"
                          aria-describedby="basic-addon1"
                        />
                      </InputGroup>
                    </Col>
                    <Col>
                      <InputGroup>
                        <Form.Control
                          onKeyDown={handleEnter}
                          md={1}
                          lg={1}
                          sm={1}
                          type="text"
                          aria-describedby="basic-addon2"
                        />
                        <InputGroup.Text id="basic-addon2">Kgs</InputGroup.Text>
                      </InputGroup>
                    </Col>
                  </Row>
                  {/* {number.map((obj)=>( */}
                  {[...Array(number)].map((elementInArray, index) => (
                    <Row className="inputRow">
                      <Col>
                        <Form.Control
                          onKeyDown={handleEnter}
                          md={3}
                          lg={3}
                          sm={3}
                          type="text"
                        />
                      </Col>
                      <Col>
                        <InputGroup>
                          <InputGroup.Text id="basic-addon1">
                            Lot
                          </InputGroup.Text>
                          <Form.Control
                            onKeyDown={handleEnter}
                            md={1}
                            type="text"
                            aria-describedby="basic-addon1"
                          />
                        </InputGroup>
                      </Col>
                      <Col>
                        <InputGroup>
                          <Form.Control
                            onKeyDown={handleEnter}
                            md={1}
                            lg={1}
                            sm={1}
                            type="text"
                            aria-describedby="basic-addon2"
                          />

                          <InputGroup.Text id="basic-addon2">
                            Kgs
                          </InputGroup.Text>
                        </InputGroup>
                      </Col>
                    </Row>
                  ))}
                </Form>
              </div>
            </Col>
            {/* ****************OUTPUT************************************************* */}
            <Col className="invColTwo invCol" md={5} lg={5} sm={5}>
              <div className="colHeading d-flex justify-content-center">
                <span>Output</span>
              </div>
              <hr />
              <div className="inputContent">
                <Form>
                  <Row>
                    <Col>
                      <Form.Control
                        onKeyDown={handleEnter}
                        md={3}
                        lg={3}
                        sm={3}
                        type="text"
                      />
                    </Col>
                    <Col>
                      <InputGroup>
                        <InputGroup.Text id="basic-addon1">Lot</InputGroup.Text>
                        <Form.Control
                          onKeyDown={handleEnter}
                          md={1}
                          type="text"
                          aria-describedby="basic-addon1"
                        />
                      </InputGroup>
                    </Col>
                    <Col>
                      <InputGroup>
                        <Form.Control
                          onKeyDown={handleEnter}
                          md={1}
                          lg={1}
                          sm={1}
                          type="text"
                          aria-describedby="basic-addon2"
                        />

                        <InputGroup.Text id="basic-addon2">Kgs</InputGroup.Text>
                      </InputGroup>
                    </Col>
                  </Row>
                  {[...Array(number)].map((elementInArray, index) => (
                    <Row className="inputRow">
                      <Col>
                        <Form.Control
                          onKeyDown={handleEnter}
                          md={3}
                          lg={3}
                          sm={3}
                          type="text"
                        />
                      </Col>
                      <Col>
                        <InputGroup>
                          <InputGroup.Text id="basic-addon1">
                            Lot
                          </InputGroup.Text>
                          <Form.Control
                            onKeyDown={handleEnter}
                            md={1}
                            type="text"
                            aria-describedby="basic-addon1"
                          />
                        </InputGroup>
                      </Col>
                      <Col>
                        <InputGroup>
                          <Form.Control
                            onKeyDown={handleEnter}
                            md={1}
                            lg={1}
                            sm={1}
                            type="text"
                            aria-describedby="basic-addon2"
                          />

                          <InputGroup.Text id="basic-addon2">
                            Kgs
                          </InputGroup.Text>
                        </InputGroup>
                      </Col>
                    </Row>
                  ))}
                </Form>
              </div>
            </Col>
            {/* ****************MENU************************************************* */}
            {/* <Col className="invColThree invCol" md={2} lg={2} sm={2}>
              <div className="colHeading d-flex justify-content-center">
                <span>menu</span> <hr />
                <Col className=" menuListContainer menuList justify-content-center">
                  <Row>
                    <h6>Arrived Materials</h6>
                  </Row>
                  <Row>
                    <h6>Despatch Materials</h6>
                  </Row>

                  <Row>
                    <h6>Cutting</h6>
                  </Row>
                  <Row>
                    <h6>Peeling</h6>
                  </Row>
                  <Row>
                    <h6>Grading</h6>
                  </Row>
                  <Row>
                    <h6>Filling</h6>
                  </Row>
                  <Row>
                    <h6>Borma</h6>
                  </Row>
                </Col>
              </div>
            </Col> */}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Inventory;

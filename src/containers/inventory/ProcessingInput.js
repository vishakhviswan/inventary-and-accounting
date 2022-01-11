import React, { useState } from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import TypeAhead from "../../Components/TypeAhead";

import "./Inventory.css";

function ProcessingInput() {
  const [number, setNumber] = useState(0);
  const [pressed, setPressed] = useState(1);
  const [press, setPress] = useState(false);
  


  function handleEnter(event) {
    if (event.keyCode === 13 && press == false) {
      const form = event.target.form;
      const index = Array.prototype.indexOf.call(form, event.target);
      form.elements[index + 1].focus();
      event.preventDefault();
      console.log("formmmm", index);
      setPressed(pressed + 1);
      if (pressed == 2) {
        setPress(true);
      }
    } else if (event.keyCode === 37) {
      const form = event.target.form;
      const index = Array.prototype.indexOf.call(form, event.target);
      if (index > 0) {
        form.elements[index - 1].focus();
      }

      event.preventDefault();
    } else if (event.keyCode === 40) {
      setNumber(number + 1);
      event.preventDefault();
      setPressed(pressed === -1);
      setPress(false);
    } else if (event.keyCode === 46) {
      setNumber(number - 1);
      event.preventDefault();
    } else if (event.keyCode === 39) {
      const form = event.target.form;
      const index = Array.prototype.indexOf.call(form, event.target);
      form.elements[index + 1].focus();

      event.preventDefault();
      console.log("formmmm", form);
    }
  }

  return (
    <div>
      <div className="inv_ChildDiv">
        <Container>
          <Row>
            {/* ****************INPUT************************************************* */}
            <Col className="invColOne invCol ">
              <div className="colHeading d-flex justify-content-center">
                <span>Input</span>
              </div>
              <hr />
              <div className="inputContent">
                <Form id="inputForm">
                  <Row className="inputRow">
                    <Col>
                      <TypeAhead/>
                        
                      {/* <Form.Control
                        onKeyDown={handleEnter}
                        md={3}
                        lg={3}
                        sm={3}
                        type="text"
                      /> */}
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
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default ProcessingInput;

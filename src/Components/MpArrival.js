import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
function MpArrival() {

    const [bags, setBags] = useState("");
    const [value, setValue] = useState("");
    const [currentValue, setCurrentValue] = useState("");
    const FindPound = (value) => {
      setCurrentValue(value);
      const Pound = (value * 2.2) / bags;
      setValue(parseFloat(Pound).toFixed(2));
    };

    const [wholes, setWholes] = useState("");
    //   const wholesPound = (wholes * 2.2) / bags;
    //   const wholesWithTwoDecimalPlaces = parseFloat(wholesPound).toFixed(2);

    const [pieces, setPieces] = useState("");
    const [pwl, setPwl] = useState("");
    const [rej, setRej] = useState("");
    const [impOrLoc, setImpOrLoc] = useState("");
    const [origin, setOrigin] = useState("");
    return (
      <div>
        <div className="mp_ChildDiv">
          <h4>Peeling Machine Kernels</h4><span>---------------------------------------------</span>
          <Container className="mpFormContainer">
            <Form
            // noValidate validated={validated} onSubmit={handleSubmit}
            >
              <Row>
                <Col>
                  <Form.Check
                    // value={impOrLoc}
                    value="local"
                    onChange={(e) => {
                      setImpOrLoc(e.target.value);
                    }}
                    name="group1"
                    type="radio"
                    id="radioBtn"
                    label="Local"
                  />
                  <Form.Check
                    // value={impOrLoc}
                    onChange={(e) => {
                      setImpOrLoc(e.target.value);
                    }}
                    value="imported"
                    name="group1"
                    type="radio"
                    id="radioBtn"
                    label="Imported"
                  />
                </Col>
                <Col>
                  <Form.Group as={Col} controlId="formGridPlace">
                    <Form.Label>Orgin</Form.Label>
                    <Form.Control
                      value={origin}
                      onChange={(e) => {
                        setOrigin(e.target.value);
                      }}
                      type="place"
                      placeholder="Enter origin"
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group as={Col} controlId="formGridPlace">
                    <Form.Label>Bags</Form.Label>
                    <Form.Control
                      value={bags}
                      onChange={(e) => {
                        setBags(e.target.value);
                      }}
                      type="place"
                      placeholder="bags"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPlace">
                  <Form.Label>Wholes</Form.Label>
                  <Form.Control
                    required
                    value={wholes}
                    onChange={(e) => {
                      setWholes(e.target.value);
                      FindPound(e.target.value);
                    }}
                    type="place"
                    placeholder="Enter Arrived Place / Factory"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridInvoice">
                  <Form.Label>-</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={wholes == currentValue ? value : "wait"}
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPlace">
                  <Form.Label>Pieces</Form.Label>
                  <Form.Control
                    required
                    value={pieces}
                    onChange={(e) => {
                      setPieces(e.target.value);
                      FindPound(e.target.value);
                    }}
                    type="place"
                    placeholder="Enter Arrived Place / Factory"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridInvoice">
                  <Form.Label>-</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={pieces == currentValue ? value : "wait"}
                  />
                </Form.Group>
              </Row>

              <Row>
                <Form.Group
                  as={Col}
                  className="mb-3"
                  controlId="formGridOuturn"
                >
                  <Form.Label>Pwl</Form.Label>
                  <Form.Control
                    required
                    value={pwl}
                    onChange={(e) => {
                      setPwl(e.target.value);
                    }}
                    placeholder="ex:count, outurn, rej"
                  />
                </Form.Group>

                <Form.Group
                  as={Col}
                  className="mb-3"
                  controlId="formGridAddress2"
                >
                  <Form.Label>-</Form.Label>
                  <Form.Control placeholder="Ex : AP-00-AA-0000" />
                </Form.Group>
              </Row>

              <Row>
                <Form.Group
                  as={Col}
                  className="mb-3"
                  controlId="formGridOuturn"
                >
                  <Form.Label>Husk</Form.Label>
                  <Form.Control
                    required
                    value={rej}
                    onChange={(e) => {
                      setRej(e.target.value);
                    }}
                    placeholder="ex:count, outurn, rej"
                  />
                </Form.Group>

                <Form.Group
                  as={Col}
                  className="mb-3"
                  controlId="formGridAddress2"
                >
                  <Form.Label>-</Form.Label>
                  <Form.Control placeholder="Ex : AP-00-AA-0000" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" id="formGridCheckbox ">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Form.Group className="d-flex justify-content-center">
                <Button
                  variant="warning"
                  // onClick={() => setShow(true)}
                >
                  Preview
                </Button>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form.Group>
            </Form>
          </Container>
          {/* ***************************modal***************************************** */}

          {/* <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Please Check Your Details are Correct
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                date: {date},<br />
                lotNo: {lot},<br />
                recivedGrade: {recived},<br />
                importOrLocal:{impOrLoc},<br />
                rcnMark: {mark},<br />
                arrivedFrom: {arrived},<br />
                invoiceNo: {invoice},<br />
                outurn: {outurn},<br />
                vehicleNo:{vehicle},<br />
                bags: {bags},<br />
                weight: {weight},<br />
                remarks: {remarks},
              </p>
            </Modal.Body>
          </Modal> */}
        </div>
      </div>
    );
}

export default MpArrival

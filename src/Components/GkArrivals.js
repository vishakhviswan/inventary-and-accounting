
import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
function GkArrivals() {
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
          <h4>Peeled Kernels</h4>
          <span>---------------------------------------------</span>
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
              <h4>Wholes</h4>
              <br />
              <br />
              {/* #####################  WHOLES  ############################# */}
              <Row className="mb-3">
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="2">
                    WW
                  </Form.Label>
                  <Col sm="3">
                    <Form.Control type="text" placeholder="Kgs" />
                  </Col>
                  <Col sm="3">
                    <Form.Control type="text" placeholder="Kgs" />
                  </Col>
                </Form.Group>
              </Row>
              {/* #####################  WHOLES  ############################# */}
              <Row className="mb-3">
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="2">
                    SW
                  </Form.Label>
                  <Col sm="3">
                    <Form.Control type="text" placeholder="Kgs" />
                  </Col>
                  <Col sm="3">
                    <Form.Control type="text" placeholder="Kgs" />
                  </Col>
                </Form.Group>
              </Row>
              {/* #####################  WHOLES  ############################# */}
              <Row className="mb-3">
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="2">
                    KN
                  </Form.Label>
                  <Col sm="3">
                    <Form.Control type="text" placeholder="Kgs" />
                  </Col>
                  <Col sm="3">
                    <Form.Control type="text" placeholder="Kgs" />
                  </Col>
                </Form.Group>
              </Row>
              {/* #####################  WHOLES  ############################# */}
              <Row className="mb-3">
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="2">
                    PW
                  </Form.Label>
                  <Col sm="3">
                    <Form.Control type="text" placeholder="Kgs" />
                  </Col>
                  <Col sm="3">
                    <Form.Control type="text" placeholder="Kgs" />
                  </Col>
                </Form.Group>
              </Row>
              {/* #####################  WHOLES  ############################# */}
              <Row className="mb-3">
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="2">
                    PUK
                  </Form.Label>
                  <Col sm="3">
                    <Form.Control type="text" placeholder="Kgs" />
                  </Col>
                  <Col sm="3">
                    <Form.Control type="text" placeholder="Kgs" />
                  </Col>
                </Form.Group>
              </Row>
              {/* #####################  WHOLES  ############################# */}
              <Row className="mb-3">
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="2">
                    FW
                  </Form.Label>
                  <Col sm="3">
                    <Form.Control type="text" placeholder="Kgs" />
                  </Col>
                  <Col sm="3">
                    <Form.Control type="text" placeholder="Kgs" />
                  </Col>
                </Form.Group>
              </Row>
              {/* #####################  total  ############################# */}
              <Row className="mb-3">
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="2">
                    Total
                  </Form.Label>
                  <Col sm="3">
                    <Form.Control type="text" placeholder="Kgs" />
                  </Col>
                  <Col sm="3">
                    <Form.Control type="text" placeholder="Kgs" />
                  </Col>
                </Form.Group>
              </Row>
              <h4>Pieces</h4>
              {/* #####################  Pieces  ############################# */}
              <Row className="mb-3">
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="2">
                    S
                  </Form.Label>
                  <Col sm="3">
                    <Form.Control type="text" placeholder="Kgs" />
                  </Col>
                  <Col sm="3">
                    <Form.Control type="text" placeholder="Kgs" />
                  </Col>
                </Form.Group>
              </Row>
              {/* #####################  Pieces  ############################# */}
              <Row className="mb-3">
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="2">
                    P
                  </Form.Label>
                  <Col sm="3">
                    <Form.Control type="text" placeholder="Kgs" />
                  </Col>
                  <Col sm="3">
                    <Form.Control type="text" placeholder="Kgs" />
                  </Col>
                </Form.Group>
              </Row>
              {/* #####################  Pieces  ############################# */}
              <Row className="mb-3">
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="2">
                    SP
                  </Form.Label>
                  <Col sm="3">
                    <Form.Control type="text" placeholder="Kgs" />
                  </Col>
                  <Col sm="3">
                    <Form.Control type="text" placeholder="Kgs" />
                  </Col>
                </Form.Group>
              </Row>
              {/* #####################  Pieces  ############################# */}
              <Row className="mb-3">
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="2">
                    WSP
                  </Form.Label>
                  <Col sm="3">
                    <Form.Control type="text" placeholder="Kgs" />
                  </Col>
                  <Col sm="3">
                    <Form.Control type="text" placeholder="Kgs" />
                  </Col>
                </Form.Group>
              </Row>
              {/* #####################  Pieces  ############################# */}
              <Row className="mb-3">
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="2">
                    SS
                  </Form.Label>
                  <Col sm="3">
                    <Form.Control type="text" placeholder="Kgs" />
                  </Col>
                  <Col sm="3">
                    <Form.Control type="text" placeholder="Kgs" />
                  </Col>
                </Form.Group>
              </Row>
              {/* #####################  Pieces  ############################# */}
              <Row className="mb-3">
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="2">
                    SSP
                  </Form.Label>
                  <Col sm="3">
                    <Form.Control type="text" placeholder="Kgs" />
                  </Col>
                  <Col sm="3">
                    <Form.Control type="text" placeholder="Kgs" />
                  </Col>
                </Form.Group>
              </Row>
              {/* #####################  Pieces  ############################# */}
              <Row className="mb-3">
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="2">
                    JP
                  </Form.Label>
                  <Col sm="3">
                    <Form.Control type="text" placeholder="Kgs" />
                  </Col>
                  <Col sm="3">
                    <Form.Control type="text" placeholder="Kgs" />
                  </Col>
                </Form.Group>
              </Row>
              {/* #####################  Pieces  ############################# */}
              <Row className="mb-3">
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="2">
                    PLP
                  </Form.Label>
                  <Col sm="3">
                    <Form.Control type="text" placeholder="Kgs" />
                  </Col>
                  <Col sm="3">
                    <Form.Control type="text" placeholder="Kgs" />
                  </Col>
                </Form.Group>
              </Row>
              {/* #####################  Pieces  ############################# */}
              <Row className="mb-3">
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="2">
                    VK
                  </Form.Label>
                  <Col sm="3">
                    <Form.Control type="text" placeholder="Kgs" />
                  </Col>
                  <Col sm="3">
                    <Form.Control type="text" placeholder="Kgs" />
                  </Col>
                </Form.Group>
              </Row>
              {/* #####################  Pieces  ############################# */}
              <Row className="mb-3">
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="2">
                    K I
                  </Form.Label>
                  <Col sm="3">
                    <Form.Control type="text" placeholder="Kgs" />
                  </Col>
                  <Col sm="3">
                    <Form.Control type="text" placeholder="Kgs" />
                  </Col>
                </Form.Group>
              </Row>
              {/* #####################  Pieces  ############################# */}
              <Row className="mb-3">
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="2">
                    K II
                  </Form.Label>
                  <Col sm="3">
                    <Form.Control type="text" placeholder="Kgs" />
                  </Col>
                  <Col sm="3">
                    <Form.Control type="text" placeholder="Kgs" />
                  </Col>
                </Form.Group>
              </Row>
              {/* #####################  Pieces  ############################# */}
              <Row className="mb-3">
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="2">
                    REJ
                  </Form.Label>
                  <Col sm="3">
                    <Form.Control type="text" placeholder="Kgs" />
                  </Col>
                  <Col sm="3">
                    <Form.Control type="text" placeholder="Kgs" />
                  </Col>
                </Form.Group>
              </Row>
              {/* #####################  Pieces  ############################# */}
              <Row className="mb-3">
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="2">
                    KTP
                  </Form.Label>
                  <Col sm="3">
                    <Form.Control type="text" placeholder="Kgs" />
                  </Col>
                  <Col sm="3">
                    <Form.Control type="text" placeholder="Kgs" />
                  </Col>
                </Form.Group>
              </Row>
              {/* #####################  Pieces  ############################# */}
              <Row className="mb-3">
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="2">
                    PUKP
                  </Form.Label>
                  <Col sm="3">
                    <Form.Control type="text" placeholder="Kgs" />
                  </Col>
                  <Col sm="3">
                    <Form.Control type="text" placeholder="Kgs" />
                  </Col>
                </Form.Group>
              </Row>
              {/* #####################  Pieces  ############################# */}
              <Row className="mb-3">
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="2">
                    Total
                  </Form.Label>
                  <Col sm="3">
                    <Form.Control type="text" placeholder="Kgs" />
                  </Col>
                  <Col sm="3">
                    <Form.Control type="text" placeholder="Kgs" />
                  </Col>
                </Form.Group>
              </Row>
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

export default GkArrivals

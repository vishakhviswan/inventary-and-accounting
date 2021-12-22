import React, { useState, useContext } from "react";
import { Container, Form, Row, Col, Button, InputGroup, Modal } from "react-bootstrap";
import {TopBarContext} from '../store/ArrivalsContext'

import { FirebaseContext } from "../store/Context";
import { collection, addDoc } from "firebase/firestore";

import "./RcnArrival.css";
import { useNavigate } from "react-router-dom";
function RcnArrival() {
  const navigate = useNavigate()
const { recived,date,lot,validated,setValidated } = useContext(TopBarContext);

  const [impOrLoc, setImpOrLoc] = useState("")
  const [mark, setMark] = useState("")
  const [arrived, setArrived] = useState("")
  const [invoice, setInvoice] = useState("")
  const [outurn, setOuturn] = useState("")
  const [vehicle, setVehicle] = useState("")
  const [bags, setBags] = useState("")
  const [weight, setWeight] = useState("")
  const [remarks, setRemarks] = useState("")

  const { db } = useContext(FirebaseContext);
  const [show, setShow] = useState(false);

//  const handleSubmit = (event) => {
//    const form = event.currentTarget;
//    if (form.checkValidity() === false) {
//      event.preventDefault();
//      event.stopPropagation();
//    }

//    setValidated(true);
//  };


  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true)
    if (form.checkValidity() === true) {
      addDoc(collection(db, "RcnArrivels"), {
        date: date,
        lotNo: lot,
        recivedGrade: recived,
        importOrLocal: impOrLoc,
        rcnMark: mark,
        arrivedFrom: arrived,
        invoiceNo: invoice,
        outurn: outurn,
        vehicleNo: vehicle,
        bags: bags,
        weight: weight,
        remarks: remarks,
      })
      
        .then(() => {
          addDoc(collection(db, "RcnStock"), {
            itemName: recived,
            Quantity: bags,
            weight: weight,
          });
        }).then(() => {
          alert("submitted sucsessfull");
          navigate("/stockreg");
        })
      
    } else {
      alert('please check curreption')
    }
    
  }
const [dweight, setDweight] = useState()
  
  const onChange = (value) => {
    const defwight = (value*80);
    setDweight(defwight);
  }
  
  

  return (
    <div className="rcnArrival_ParentDiv">
      <div className="rcnArrival_ChildDiv">
        <Container className="rcnFormContainer">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Check
                  required
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
                  required
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
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Col>
              <Form.Group as={Col} controlId="formGridPlace">
                <Form.Label>Mark</Form.Label>
                <Form.Control
                  required
                  value={mark}
                  onChange={(e) => {
                    setMark(e.target.value);
                  }}
                  type="place"
                  placeholder="Enter Mark"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Example: Ghana/ IVC/ GunniaBissavu
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPlace">
                <Form.Label>Arrived From</Form.Label>
                <Form.Control
                  required
                  value={arrived}
                  onChange={(e) => {
                    setArrived(e.target.value);
                  }}
                  type="place"
                  placeholder="Enter Arrived Place / Factory"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  where did arrived this material
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridInvoice">
                <Form.Label>Invoice #</Form.Label>
                <Form.Control
                  required
                  value={invoice}
                  onChange={(e) => {
                    setInvoice(e.target.value);
                  }}
                  type="text"
                  placeholder="Enter Invoice Number"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Enter Invoice No. or Delivery Chellan No.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} className="mb-3" controlId="formGridOuturn">
                <Form.Label>Outurn</Form.Label>
                <Form.Control
                  required
                  value={outurn}
                  onChange={(e) => {
                    setOuturn(e.target.value);
                  }}
                  placeholder="ex:count, outurn, rej"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  please enter sample cutting outurn
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                as={Col}
                className="mb-3"
                controlId="formGridAddress2"
              >
                <Form.Label>Vehicle No.</Form.Label>
                <Form.Control
                  required
                  value={vehicle}
                  onChange={(e) => {
                    setVehicle(e.target.value);
                  }}
                  placeholder="Ex : AP-00-AA-0000"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  please enter Vehicle /Truck / Lorry Number
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Bags #</Form.Label>
                <InputGroup>
                  <Form.Control
                    required
                    value={bags}
                    onChange={(e) => {
                      setBags(e.target.value);
                      onChange(e.target.value);
                    }}
                    placeholder="No. of Bags"
                    type="number"
                    aria-describedby="basic-addon1"
                  />
                  <InputGroup.Text id="basic-addon1">Bags</InputGroup.Text>
                </InputGroup>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  please enter No. of bags
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Net Weight</Form.Label>
                <InputGroup>
                  <Form.Control
                    required
                    value={weight}
                    onChange={(e) => {
                      setWeight(e.target.value);
                    }}
              
                     placeholder={dweight}
                    type="accounting"
                    aria-describedby="basic-addon1"
                  />
                  <InputGroup.Text id="basic-addon1">Kgs</InputGroup.Text>
                </InputGroup>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  please enter Net weight
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Remarks</Form.Label>
                <Form.Control
                  value={remarks}
                  onChange={(e) => {
                    setRemarks(e.target.value);
                  }}
                  placeholder="Enter Your Remarks"
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox ">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Form.Group className="d-flex justify-content-center">
              <Button variant="warning" onClick={() => setShow(true)}>
                Preview
              </Button>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Container>
        {/* ***************************modal***************************************** */}

        <Modal
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
              date: {date},<br /> lotNo: {lot},<br /> recivedGrade: {recived},
              <br />
              importOrLocal:
              {impOrLoc},<br /> rcnMark: {mark},<br /> arrivedFrom: {arrived},
              <br />
              invoiceNo: {invoice},<br /> outurn: {outurn},<br /> vehicleNo:
              {vehicle},<br /> bags: {bags},<br /> weight: {weight},<br />
              remarks: {remarks},
            </p>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default RcnArrival;
import React, { useContext} from 'react'
import { Col, Form, Row } from 'react-bootstrap';
import {TopBarContext} from '../../store/ArrivalsContext'

function ArrivalsTopBar() {
  const { recived, setRecived, date, setDate, lot, setLot, validated } =
    useContext(TopBarContext);

  
    return (
      <div>
        <div className="topBar_childDiv">
          <div className="topBar_Content">
            <Form noValidate validated={validated}>
              <Row>
                <Col>
                  <div>
                    <Form.Group className="mb-3" controlId="formBasicRecived">
                      <Form.Label>Recived</Form.Label>
                      <Form.Select
                        required
                        size="sm"
                        value={recived}
                        onChange={(e) => setRecived(e.target.value)}
                      >
                        <option>Select One...</option>
                        <option>Row Cashew Nuts</option>
                        <option>Cutting Kernels</option>
                        <option>Peeling Machine</option>
                        <option>Peeled Kernels</option>
                        <option>Graded Kernels</option>
                        <option>Finished Kernels</option>
                      </Form.Select>
                      <Form.Control.Feedback>Please Confirm this field is not empty</Form.Control.Feedback>
                    </Form.Group>
                  </div>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicLot">
                    <Form.Label>Lot #</Form.Label>
                    <Form.Control
                      required
                      value={lot}
                      onChange={(e) => setLot(e.target.value)}
                      type="text"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
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
            </Form>
          </div>
        </div>
      </div>
    );
}
export default ArrivalsTopBar

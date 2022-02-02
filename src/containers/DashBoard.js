// ********New**********
import React, { useState } from "react";
import {
  Card,
  Col,
  Container,
  Row,
  ProgressBar,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
// import { UilAngleDown } from "@iconscout/react-unicons";

import "./Containers.css";
import DashBoardStock from "../datas/DashBoardStock";

function DashBoard() {
  const [dropDownValue1, setDropDownValue1] = useState("");
  const [dropDownValue2, setDropDownValue2] = useState("");
  const datas = DashBoardStock;

  return (
    <div className="dashBoard_ParentDiv">
      <div className="dashBoard_ChildDiv">
        <Container>
          <Row xs={1} md={2} className="g-4">
            {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
            <Col>
              <Card className="cardDashBoard">
                <Card.Body>
                  <Card.Title>
                    <DropdownButton
                      id="dropdown-button-dark-example2"
                      variant="secondary"
                      menuVariant="dark"
                      title={dropDownValue1 ? dropDownValue1 : "This Month"}
                      className="mt-2"
                    >
                      <Dropdown.Item
                        onClick={() => {
                          setDropDownValue1("This Week");
                        }}
                        active
                      >
                        This Week
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          setDropDownValue1("This Year");
                        }}
                      >
                        This Year
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          setDropDownValue1("Past 15 days");
                        }}
                      >
                        Past 15 days
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          setDropDownValue1("Today");
                        }}
                      >
                        Today
                      </Dropdown.Item>
                    </DropdownButton>
                  </Card.Title>

                  <Card.Text>
                    <ProgressBar
                      variant="success"
                      animated
                      now="75"
                      label="75%"
                      // {`${now}%`}
                    />
                    Income @ Rs 1,75,000.00
                  </Card.Text>
                  <Card.Text>
                    <ProgressBar
                      variant="danger"
                      animated
                      now="25"
                      label="25%"
                      // {`${now}%`}
                    />
                    Expences @ Rs 25,000.00
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="cardDashBoard">
                <Card.Body>
                  <Card.Title>
                    <DropdownButton
                      id="dropdown-button-dark-example2"
                      variant="secondary"
                      menuVariant="dark"
                      title={
                        dropDownValue2
                          ? `Stock ${dropDownValue2}`
                          : "Stock Today"
                      }
                      className="mt-2"
                    >
                      <Dropdown.Item
                        onClick={() => {
                          setDropDownValue2("Yesterday");
                        }}
                        active
                      >
                        Yesterday
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          setDropDownValue2("This Week");
                        }}
                      >
                        This Week
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          setDropDownValue2("Past 15 days");
                        }}
                      >
                        Past 15 days
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          setDropDownValue2("Today");
                        }}
                      >
                        Today
                      </Dropdown.Item>
                    </DropdownButton>
                  </Card.Title>
                  {datas.map((data) => {
                    const { name, quantity, lots } = data;
                    return (
                      <Card.Text className="card-text-stock">
                        <Row>
                          <Col lg={6} sm={3}>
                            {name}
                          </Col>
                          <Col>{`${lots}Lots`}</Col>
                          <Col>{quantity}</Col>
                        </Row>
                      </Card.Text>
                    );
                  })}
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="cardDashBoard">
                <Card.Body>
                  <Card.Title>Rcn Stock</Card.Title>
                  <Card.Text>Gunnia Bissavu : 250 Bags , 20,000 Kgs</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="cardDashBoard">
                <Card.Body>
                  <Card.Title>Todays Labours Count</Card.Title>
                  <Card.Text>
                    Cutting 350 Nos.
                    <br />
                    Peeling 350 Nos.
                    <br />
                    Grading 350 Nos.
                    <br /> Filling 350 Nos.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* ))} */}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default DashBoard;

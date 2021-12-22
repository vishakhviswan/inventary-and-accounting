import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Inventory.css";
import { useNavigate } from "react-router-dom";
function InventorySideMenu() {
  const navigate = useNavigate()

  

  return (
    <div>
      <Row>
        <Col className="invColThree invCol d-flex justify-content-center text-center">
          <div className="colHeading d-flex justify-content-center">
            <Col className=" menuListContainer menuList  ">
              <Row className="d-flex text-align-center">
                <span>menu</span> <hr />
              </Row>
              <Row
                onClick={() => {
                  navigate("/arrivedmaterials");
                }}
              >
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
        </Col>
      </Row>
    </div>
  );
}

export default InventorySideMenu;

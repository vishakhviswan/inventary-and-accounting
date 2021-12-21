import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./Inventory.css";
import {Inventory} from '../../containers/inventory/Inventory'
function InventorySideMenu() {
  const [menuValue, setMenuValue] = useState("");
  return (
    <div>
      <div className="leftSide">
        <Inventory />
      </div>

      <Col className="invColThree invCol">
        <div className="colHeading d-flex justify-content-center">
          <span>menu</span> <hr />
          <Col className=" menuListContainer menuList justify-content-center">
            <Row
              value={menuValue}
              onClick={(e) => {
                setMenuValue(e.target.value);
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
    </div>
  );
}

export default InventorySideMenu;

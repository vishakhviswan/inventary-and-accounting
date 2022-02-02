// ********New**********
import React from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import DashBoardStock from "../datas/DashBoardStock";

import "./Components.css";
function InventoryHomeStock() {
  const datas = DashBoardStock;

  return (
    <div className="inventoryHomeStock_Pd">
      <div className="inventoryHomeStock_Cd">
        <Card bg="light" text="dark" className="mb-2 inventoryHomeStockCard">
          <Card.Header className="stockCardHead">
            <Row>
              <Col>
                <p>Current Period</p>
              </Col>
              <Col>
                <p>Current Date</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>01 Apr 2021 to 31 Mar 2022</p>
              </Col>
              <Col>
                <p>Tuesday, 25 January 2022</p>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <Card.Title> Opening Stock </Card.Title>
            <Card.Text>
              <Table striped bordered hover>
                <tbody>
                  {datas.map((data) => {
                    const { name, quantity, lots } = data;
                    return (
                      <tr>
                        <td>{name}</td>
                        <td>{quantity}</td>
                        <td>{`${lots} Lots`} </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default InventoryHomeStock;

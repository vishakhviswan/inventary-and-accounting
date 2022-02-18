// ********New**********
import React, { useEffect } from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import DashBoardStock from "../datas/DashBoardStock";
import { collection, getDocs, doc, setDoc, getDoc } from "firebase/firestore";

import "./Components.css";
import { useContext } from "react";
import { FirebaseContext } from "../store/Context";
import { useState } from "react";

function InventoryHomeStock() {
  const datas = DashBoardStock;
  const { db } = useContext(FirebaseContext);
  const [stockDetails, setStockDetails] = useState([]);

  useEffect(() => {
    const getStock = async () => {
      const stockData = await getDocs(collection(db, "Stock Items"));
      setStockDetails(
        stockData.docs.map((doc) => ({
          ...doc.data(),
        }))
      );
    };
    getStock();
  }, [db]);
  // find Total from array
  console.log(stockDetails.reduce((a, v) => (a = a + v.quantity), 0));
// const movies = data.filter(item => item.media_type === 'movie')),
//     moviesCount = movies.length;
  

const countGkWholes = stockDetails.filter(stockDetails => stockDetails.under === "GK WHOLES");
  //  countTypes.length;
   console.log("gededgh", countGkWholes.length, countGkWholes);
   console.log(countGkWholes.reduce((a, v) => (a = a + v.quantity), 0));
  
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
                  {stockDetails.map((obj) => (
                    <tr>
                      <td>{obj.under}</td>
                      <td>
                        {obj.quantity} {obj.unit}
                      </td>
                      <td>{obj.lot} Lot </td>
                    </tr>
                  ))}
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

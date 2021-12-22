import { collection, getDocs } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import { FirebaseContext } from '../../store/Context';

function StockRegister() {

    const [rcnStock, setRcnStock] = useState([]);
    const { db } = useContext(FirebaseContext);
    useEffect(() => {
      const getRcnStock = async () => {
        const RcnStockData = await getDocs(collection(db, "RcnArrivels"));
        setRcnStock(
          RcnStockData.docs.map((doc) => ({
            ...doc.data(),
          }))
        );
        
      };
      getRcnStock();
    }, [db,rcnStock]);
    return (
      <div>
        <h5>RCN STOCK</h5>
        <Container>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Lot #</th>
                <th>Local/Import</th>
                <th>Mark</th>
                <th>Outurn</th>
                <th>Bags</th>
                <th>Net Weight</th>
              </tr>
            </thead>
            {rcnStock.map((obj, index) => (
              <tbody>
                <tr>
                  <td>{index + 1}</td>
                  <td>{obj.lotNo}</td>
                  <td>{obj.importOrLocal}</td>
                  <td>{obj.rcnMark}</td>
                  <td>{obj.outurn}</td>
                  <td>{obj.bags}</td>
                  <td>{obj.weight}</td>
                </tr>
              </tbody>
            ))}
          </Table>
        </Container>
      </div>
    );
}

export default StockRegister

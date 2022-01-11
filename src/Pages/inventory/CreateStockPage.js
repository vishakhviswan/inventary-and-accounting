import React from 'react'
import { Col, Row } from 'react-bootstrap';
import NavbarHeader from '../../Components/Navbar';
import CreateStock from '../../containers/inventory/CreateStock';
import ShowStock from '../../containers/inventory/ShowStock';

function CreateStockPage() {
    return (
      <div className="createStockPage__ParentDiv">
        <div className="createStockPage__childDiv">
          <NavbarHeader />
          <Row>
            <Col>
              <CreateStock />
            </Col>
            <Col>
              <ShowStock/>
            </Col>
          </Row>
        </div>
      </div>
    );
}

export default CreateStockPage

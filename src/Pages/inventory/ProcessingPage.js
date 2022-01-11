import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import NavbarHeader from '../../Components/Navbar'
import InventorySideMenu from '../../containers/inventory/InventorySideMenu';
import ProcessingInput from '../../containers/inventory/ProcessingInput';
import ProcessingOutput from '../../containers/inventory/ProcessingOutput';

function ProcessingPage() {
    return (
      <div>
        <NavbarHeader />
        <Container>
          <Row>
            <Col>
              <ProcessingInput/>
            </Col>
            <Col>
              <ProcessingOutput/>
            </Col>
            <Col md={2} lg={2} sm={2}>
              <InventorySideMenu />
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default ProcessingPage

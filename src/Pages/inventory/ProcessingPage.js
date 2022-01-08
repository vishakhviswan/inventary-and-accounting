import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import NavbarHeader from '../../Components/Navbar'
import InventorySideMenu from '../../containers/inventory/InventorySideMenu';
import Processing from '../../containers/inventory/Processing';

function ProcessingPage() {
    return (
      <div>
        <NavbarHeader />
        <Container>
          <Row>
            <Col md={10} lg={10} sm={10}>
                        <Processing/>
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

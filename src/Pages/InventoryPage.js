import React from "react";
// import { Col, Container, Row } from "react-bootstrap";
import BreadcrumbSec from "../Components/Breadcrumb";
import NavbarHeader from "../Components/Navbar";
//import Inventory from "../containers/inventory/Inventory";
 import InventorySideMenu from "../containers/inventory/InventorySideMenu";



function InventoryPage() {

  return (
    <div>
      <NavbarHeader />
      <BreadcrumbSec />
      <InventorySideMenu/>
      {/* <Container>
        <Row>
          <Col md={10} sm lg={10}>
            <Inventory />
          </Col>
          <Col md={2} sm lg={2}>
            <InventorySideMenu />
          </Col>
        </Row>
      </Container> */}
    </div>
  );
}

export default InventoryPage;

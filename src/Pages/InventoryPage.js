// ********New**********
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CreateModal from "../Components/CreateModal";
import InventoryHomeMenu from "../Components/InventoryHomeMenu";
import InventoryHomeStock from "../Components/InventoryHomeStock";
import InventoryModal from "../Components/InventoryModal";
import InventorySideBar from "../Components/InventorySideBar";
import NavbarHeader from "../Components/Navbar";
import { SideContext } from "../store/SideMenuContext";

function InventoryPage() {
  return (
    <div>
      <SideContext>
      <NavbarHeader />
      <Container>
        <Row>
          <Col>
            <InventoryHomeStock />
          </Col>
          <Col>
            <InventoryHomeMenu />
          </Col>
        </Row>
      </Container>
        <InventorySideBar />
        <InventoryModal />
        <CreateModal/>
      </SideContext>
    </div>
  );
}

export default InventoryPage;

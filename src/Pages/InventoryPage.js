// ********New**********
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AlterModal from "../Components/AlterModal";
import ConfirmDltModal from "../Components/ConfirmDltModal";
import CreateModal from "../Components/CreateModal";
import InventoryHomeMenu from "../Components/InventoryHomeMenu";
import InventoryHomeStock from "../Components/InventoryHomeStock";
import InventoryModal from "../Components/InventoryModal";
import InventorySideBar from "../Components/InventorySideBar";
import NavbarHeader from "../Components/Navbar";
import { AlterContext, SideContext } from "../store/SideMenuContext";

function InventoryPage() {
  return (
    <div>
      {/* <AlterContext> */}
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
        <CreateModal />
        <AlterModal />
        <ConfirmDltModal />
      </SideContext>
      {/* </AlterContext> */}
    </div>
  );
}

export default InventoryPage;

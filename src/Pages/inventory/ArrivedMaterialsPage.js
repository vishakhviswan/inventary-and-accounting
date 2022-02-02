import React from 'react'
import  NavbarHeader  from '../../Components/Navbar'
import BreadcrumbSec from "../../Components/Breadcrumb";
import { Col, Container, Row } from 'react-bootstrap'
import InventorySideMenu from '../../containers/inventory/InventorySideMenu'
import ArrivedMaterials from '../../containers/inventory/ArrivedMaterials'
import ArrivalsTopBar from '../../containers/inventory/ArrivalsTopBar';

import {TopContext} from '../../store/ArrivalsContext'
function ArrivedMaterialsPage() {
    return (
      <div className="arrivedMaterials_ParentDiv">
        <div className="arrivedMaterials_ChildDiv">
          <TopContext>
          <NavbarHeader />
          <BreadcrumbSec />
            <ArrivalsTopBar />
          <Container>
            <Row>
              <Col md={10} lg={10} sm={10}>
                <ArrivedMaterials />
              </Col>
              <Col md={2} lg={2} sm={2}>
                <InventorySideMenu />
              </Col>
            </Row>
          </Container>
          </TopContext>
        </div>
      </div>
    );
}

export default ArrivedMaterialsPage

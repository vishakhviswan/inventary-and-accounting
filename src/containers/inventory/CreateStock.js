import React from "react";
import { Container, Form } from "react-bootstrap";
import './Inventory.css'
function CreateStock() {
  return (
    <div>
      <div>
        <h4>Create Stock</h4>
        <Container className="createStock_Container">
          <Form>
            <Form.Group>
              <Form.Label>Item Name</Form.Label>
              <Form.Control />
            </Form.Group>
                      <Form.Group>
                          
                          <Form.Label>Item Group</Form.Label>
                          <Form.Select>
                          </Form.Select>
              <Form.Control />
            </Form.Group>
            <Form.Group>
              <Form.Label>Item Name</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form>
        </Container>
      </div>
    </div>
  );
}

export default CreateStock;

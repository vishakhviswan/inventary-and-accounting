import React from "react";
import { Button, Container, Form, FormControl, FormGroup, InputGroup } from "react-bootstrap";
import "./Inventory.css";
function CreateStock() {
  return (
    <div>
      <div>
        <h4>Create Stock Item..</h4>
        <Container className="createStock_Container">
          <Form>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
              <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <hr />

            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon2">Under</InputGroup.Text>
              <FormControl
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon3">Units</InputGroup.Text>
              <FormControl id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>Allready available Stock</InputGroup.Text>
              <FormControl aria-label="Amount (to the nearest dollar)" />
              <InputGroup.Text>Kgs</InputGroup.Text>
            </InputGroup>
            <div>

            <Button variant="primary" type="submit">
              Submit
            </Button>
            </div>
          </Form>
        </Container>
      </div>
    </div>
  );
}

export default CreateStock;

import React from "react";
import "./Signup.css";
import { Form, Button, Container } from "react-bootstrap";
function Signup() {
  return (
    <div className="signup_ParentDiv">
      <div className="signup_ChildDiv">
        <Container>
          <div className="signupFormDiv">
            <div className="formHeading">
              <h3>Signin</h3>
            </div>

            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Select One</Form.Label>
                <Form.Select size="sm">
                  <option>Head Offce</option>
                  <option>Adm Offce</option>
                  <option>Filling Factory</option>
                  <option>Branch Factory</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Select Company</Form.Label>
                <Form.Select size="sm">
                  <option>Gunia Bissau</option>
                  <option>Cote D Ivory</option>
                  <option>Ghana</option>
                  <option>Tanzania</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Signup;

import React, { useState } from "react";
import "./Login.css";
import { Form, Button, Container } from "react-bootstrap";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import {useNavigate} from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const auth = getAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/')
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login_ParentDiv">
      <div className="login_ChildDiv">
        <Container>
          <div className="loginFormDiv">
            <div className="formHeading">
              <h3>Login</h3>
            </div>

            <Form onSubmit={handleSubmit}>
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
                <Form.Control
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter email"
                />
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
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

export default Login;

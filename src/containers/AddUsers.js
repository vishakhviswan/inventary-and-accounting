import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState, useContext } from "react";
import { Form, Container, Button } from "react-bootstrap";
import { FirebaseContext } from "../store/FirebaseContext";

import { getAuth } from "firebase/auth";
function AddUsers() {
  const [userName, setUserName] = useState("");
  const [designation, setDesignation] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const auth = getAuth();
  const { firebase } = useContext(FirebaseContext);
  const handleSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        result.user.updateProfile({ displayName: userName });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="addUsers_ParentDiv">
      <div className="addUsers_ChildDiv">
        <Container>
          <div className="signupFormDiv">
            <div className="formHeading">
              <h3>Add Users</h3>
              <hr />
            </div>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name of the User</Form.Label>
                <Form.Control
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  type="text"
                  placeholder="Enter Name"
                />
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Select Designation</Form.Label>
                <Form.Select
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                  size="sm"
                >
                  <option>Factory Manager</option>
                  <option>Factory Clerk</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Select Company</Form.Label>
                <Form.Select
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  size="sm"
                >
                  <option>Diwancheruvu</option>
                  <option>Namavaram</option>
                  <option>Vadisaleru</option>
                  <option>Tuni</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Create Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  value={confPassword}
                  onChange={(e) => setConfPassword(e.target.value)}
                  type="text"
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

export default AddUsers;

import { getAuth, signOut } from "firebase/auth";
import React, { useContext } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../store/Context";
import {
  UilRupeeSign,
  UilCoins,
  UilCalendarAlt,
  UilReceiptAlt,
  UilUsersAlt,
  UilUser,
} from "@iconscout/react-unicons";
function NavbarHeader() {

  const navigate = useNavigate();
  const { userDtls } = useContext(AuthContext);
  const auth = getAuth();

  return (
    <div className="navbar_ParentDiv">
      <div className="navbar_ChildDiv">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              Prakash Exports
              {userDtls ? `, ${userDtls.uid}` : ""}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link
                  onClick={() => {
                    alert("Coming Soon (Work on Progress)");
                  }}
                >
                  <UilRupeeSign size="18" color="#61DAFB" /> Accounting
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    navigate("/inventory");
                  }}
                >
                  <UilCoins size="18" color="#61DAFB" /> Inventory
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    navigate("/processing");
                  }}
                >
                  <UilCalendarAlt size="18" color="#61DAFB" /> Notifications
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    navigate("/processing");
                  }}
                >
                  <UilReceiptAlt size="18" color="#61DAFB" /> Orders
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    navigate("/processing");
                  }}
                >
                  <UilUsersAlt size="18" color="#61DAFB" /> Employees
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link
                  value="Login"
                  onClick={() => {
                    if (userDtls) {
                    } else {
                      navigate("/signin");
                    }
                  }}
                >
                  {userDtls ? "" : "Login"}
                </Nav.Link>
                <Nav.Link>
                  <UilUser size="18" color="#61DAFB" />
                </Nav.Link>
                {userDtls && (
                  <NavDropdown
                    eventKey={2}
                    title={userDtls ? ` Hello, ${userDtls.displayName}` : ""}
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item
                      onClick={() => {
                        signOut(auth).then(() => {
                          navigate("/");
                        });
                      }}
                    >
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default NavbarHeader;

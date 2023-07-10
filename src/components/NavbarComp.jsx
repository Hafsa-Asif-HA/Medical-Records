import React , {useState , useEffect} from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap'
import { auth, app } from "../firebase";
import { signOut } from "firebase/auth";
import { getAuth} from "firebase/auth";
import toast from "react-hot-toast";

const NavbarComp = () => {
  
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.clear();
        toast.success("Logout Successfully!");
        window.location.href = "/";
      })
      .catch((err) => console.log("Failed to Logout"));
  };


  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Medchain</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Add_patient_record">Add Patient Record</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">
              Sign Up
            </Nav.Link>
            <Button onClick={handleSignOut}>
            Sign Out
            </Button>
            {/* <Navbar.Link >{auth.currentUser.displayName ? `Signed in as - ${auth.currentUser.displayName}` : "Login please"}</Navbar.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default NavbarComp
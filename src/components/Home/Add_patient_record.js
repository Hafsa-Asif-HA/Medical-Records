import React from "react";
import { signOut } from "firebase/auth";
import { getAuth} from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import NavbarComp from "../NavbarComp";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import toast from "react-hot-toast";


function AddPatientRecord() {
    return (
      <>
      <NavbarComp/>
      <Row className="justify-content-center">
    <Col xs={12} sm={12} md={6} >
      <Form>
      <InputGroup className="mt-5 mb-3">
        <Form.Control
          placeholder="Enter Patient's MR No. to check for access to this patient's records"
          aria-label="Patient's MR No."
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Check
        </Button>
      </InputGroup>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Date/Day
        </Form.Label>
        <Col sm="12">
          <Form.Control type="text" placeholder="dd-mm-yy,day" />
        </Col>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Diagnosis</Form.Label>
          <Form.Control as="textarea" rows={3} col={2} />
      </Form.Group>
      {/* <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Medication
        </Form.Label>
        <Col sm="12">
          <Form.Control type="text" placeholder="skagfksgfk" />
        </Col>
      </Form.Group> */}
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Medication</Form.Label>
          <Form.Control as="textarea" rows={3} col={2} />
      </Form.Group>
      
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Prescription/Remarks</Form.Label>
          <Form.Control as="textarea" rows={3} col={2} />
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="4">
          Doctor No./Doctor Name
        </Form.Label>
        <Col sm="12">
          <Form.Control type="text" placeholder="xxxxxxxxx/Dr. ABC" />
        </Col>
      </Form.Group>
    </Form>
    <Button variant="outline-secondary" id="button-addon2">
          Submit
        </Button>
    </Col>
      </Row>
      </>
    
    
    );
}
export default AddPatientRecord;
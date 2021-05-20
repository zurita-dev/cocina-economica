import { Col, Row } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import logo from "./../assets/Logo.jpeg";
import "./NavbarComponent.css";

export const NavbarComponent = () => {
  return (
    <Navbar fixed="top" style={{ backgroundColor: "#f8f9fa73" }}>
      <Navbar.Brand>
        <Row className="navbarTitle">
          <Col>
            <h5 className="textBody"> Cocina económica "El sazón de mamá"</h5>
          </Col>
          <Col>
            <img
              alt=""
              src={logo}
              width="100"
              height="100"
              className="d-inline-block align-top ml-2"
            />
          </Col>
        </Row>
      </Navbar.Brand>
    </Navbar>
  );
};

import "./Menu.css";
import Button from "react-bootstrap/Button";
import { MenuList } from "../assets/menuData";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Menu = (props) => {
  const handleClick = (e) => {
    props.setMenuId(e);
  };

  return (
    // <Container id="menu">
    <Container style={{ paddingBottom: "50px" }}>
      <Row style={{ placeContent: "center" }}>
        {MenuList.map((MenuItems) => (
          <Col md="auto" xs="auto" key={MenuItems.id} className="mb-3">
            <Button
              variant="info"
              size="lg"
              className="shadow"
              onClick={(e) => handleClick(MenuItems.id)}
            >
              {MenuItems.element}
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

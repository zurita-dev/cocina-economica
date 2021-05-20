import Container from "react-bootstrap/Container";
import React, { useState } from "react";
import { Menu } from "../components/Menu";
import "./Body.css";
import { MenuListComponent } from "../components/MenuListComponent";

export const Body = () => {
  const [menuId, setMenuId] = useState(null);

  return (
    <Container id="BodyMain">
      <div id="innerMessage">
        <h1
          className="textBody"
          style={{ paddingBottom: "50px", paddingTop: "100px" }}
        >
          Comida para llevar
        </h1>
        <div style={{ paddingBottom: "50px", paddingTop: "30px" }}>
          <h1 className="textBody">Comer rico </h1>
          <h1 className="textBody">Todos los días</h1>
        </div>
      </div>
      <Menu setMenuId={setMenuId} />
      <MenuListComponent itemMenu={menuId} />
    </Container>
  );
};
// style={{padding-bottom: "50px"}}

import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { MenuList } from "../assets/menuData";
import "./MenuListComponent.css";
export const MenuListComponent = ({ itemMenu }) => {
  if (itemMenu) {
    const menuSeleccionado = MenuList.filter(
      (element) => element.id === itemMenu
    )[0];
    return (
      <Container
        id="container-MenuList"
        className="animate__animated animate__fadeIn shadow rounded w-75"
      >
        <h1 className="mb-4 mt-4 textBody-menu">
          {menuSeleccionado && menuSeleccionado.element}
        </h1>
        <Table responsive="sm">
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            {menuSeleccionado.items.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="textBody-menu">
                    <p> {item}</p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    );
  } else {
    return <> </>;
  }
};

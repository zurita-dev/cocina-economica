import { NavbarComponent } from "../components/NavbarComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { Body } from "./Body";

export const Main = () => {
  return (
    <div className="h-100" style={{ overflow: "scroll" }}>
      <NavbarComponent />
      <Body />
    </div>
  );
};

import { NavLink } from "react-router";

function Navigation() {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>{" "}
      <NavLink to="/destinations">Destinations</NavLink>{" "}
      <NavLink to="/de/destinations">DE Destinations</NavLink>{" "}
      <NavLink to="/en/destinations">EN Destinations</NavLink>{" "}
      <NavLink to="/about">About</NavLink>{" "}
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}

export default Navigation;

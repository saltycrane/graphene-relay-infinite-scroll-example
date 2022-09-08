import { Nav, NavItem, NavLink, Navbar, NavbarBrand } from "reactstrap";

export default function FishesNavbar() {
  return (
    <Navbar color="light" container light>
      <NavbarBrand>Graphene Relay Infinite Scroll Example</NavbarBrand>
      <Nav navbar>
        <NavItem>
          <NavLink href="https://github.com/saltycrane/graphene-relay-infinite-scroll-example">
            GitHub
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

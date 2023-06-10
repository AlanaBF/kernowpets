import image from "../../assets/images/android-chrome-512x512-min.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import "../../assets/styles/components.css";

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar navigation navbar-expand-lg  justify-content-md-center justify-content-start"
    >
      <Container className="logoContainer">
        <LinkContainer to="/">
          <Navbar.Brand className="navbarBrand">
            <img className="navbarlogo" src={image} alt="logo" />
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <i className="fa-solid fa-bars"></i>
        </Navbar.Toggle>

        <Navbar.Collapse className="navbar-collapse collapse justify-content-between align-items-center w-100">
          <Nav className="me-auto navbar-nav mx-auto text-md-center text-left">
            <LinkContainer to="/">
              <Nav.Link className="navLink">Home</Nav.Link>
            </LinkContainer>
            {/* Reptiles */}
            <LinkContainer to="/Reptiles">
              <Nav.Link className="navLink">Reptiles</Nav.Link>
            </LinkContainer>
             {/* Kits, Accessories, Decor */}
           <LinkContainer to="/Products">
              <Nav.Link className="navLink">Products</Nav.Link>
            </LinkContainer>
           {/* Live Food */}
           <LinkContainer to="/LiveFood">
              <Nav.Link className="navLink">Live Food</Nav.Link>
            </LinkContainer>
            {/* Contacts and info */}
            <LinkContainer to="/Contact">
              <Nav.Link className="navLink">Contact Me</Nav.Link>
            </LinkContainer>
             {/* Contacts and info */}
             <LinkContainer to="/Gallery">
              <Nav.Link className="navLink">Photo Gallery</Nav.Link>
            </LinkContainer>
          </Nav>

          <Nav className="nav navbar-nav flex-row justify-content-md-center justify-content-start flex-nowrap">
            <div className="navIcons">
              <a href="https://www.facebook.com/kernowpet">
                <i className="fa navbarIcons fa-facebook"></i>
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

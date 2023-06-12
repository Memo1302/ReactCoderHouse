import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWideget/CartWidget';
 
const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">ACCION</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/products">Productos</Link></Nav.Link>
                            <NavDropdown title="Productos" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Jabon Liquido</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Suavizante</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Perfumina</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Pisos y desinfección</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <CartWidget/>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
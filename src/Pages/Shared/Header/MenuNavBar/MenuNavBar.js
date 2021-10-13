import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import './MenuNavBar.css'

const MenuNavBar = () => {
    return (
        <Container fluid className="px-0">
            <Navbar variant="dark" expand="lg" className="px-5 nav-menu-bar">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto text-white menu-bar">
                        <Nav.Link href="#home"><h5>Home</h5></Nav.Link>
                        <Nav.Link href="#link"><h5>Home</h5></Nav.Link>
                        <Nav.Link href="#link"><h5>Home</h5></Nav.Link>
                        <Nav.Link href="#link"><h5>Home</h5></Nav.Link>
                        <Nav.Link href="#link"><h5>Home</h5></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default MenuNavBar;
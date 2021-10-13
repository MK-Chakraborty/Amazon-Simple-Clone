import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './MenuNavBar.css'

const MenuNavBar = () => {
    return (
        <Container fluid className="px-0">
            <Navbar variant="dark" expand="lg" className="px-5 nav-menu-bar">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto menu-bar">
                        <NavLink className="me-3 text-decoration-none text-white" to="/home"><h5>Home</h5></NavLink>
                        <NavLink className="me-3 text-decoration-none text-white" to="/products"><h5>Products</h5></NavLink>
                        <NavLink className="me-3 text-decoration-none text-white" to="home"><h5>Home</h5></NavLink>
                        <NavLink className="me-3 text-decoration-none text-white" to="home"><h5>Home</h5></NavLink>
                        <NavLink className="me-3 text-decoration-none text-white" to="home"><h5>Home</h5></NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default MenuNavBar;
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="headers mb-5 pb-4">
            <Navbar fixed="top" collapseOnSelect expand="lg" className="background" variant="dark">
            <Container>
            <Navbar.Brand href="#home" className="fw-bold fs-3">EYE <span><i className="fas fa-eye"></i></span> CARE <span className="fs-6 d-block">HOSPITAL</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                <Nav.Link as={Link} to="/homes">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                <Nav.Link as={Link} to="/services">Services</Nav.Link>
                <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;
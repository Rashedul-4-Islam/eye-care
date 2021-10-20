import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const {user,logOut} = useAuth();
    return (
        <div className="headerss">
            <Navbar collapseOnSelect expand="lg" className="background" variant="dark">
            <Container>
            <Navbar.Brand href="#home" className="fw-bold fs-3">EYE <span><i className="fas fa-eye"></i></span> CARE <span className="fs-6 d-block">HOSPITAL</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto ms-4">
                <Nav.Link as={Link} to="/homes" className="fw-bold text-info">Home</Nav.Link>
                <Nav.Link as={Link} to="/about" className="fw-bold text-info">About Us</Nav.Link>
                <Nav.Link as={Link} to="/services" className="fw-bold text-info">Services</Nav.Link>
                <Nav.Link as={Link} to="/doctors" className="fw-bold text-info">Doctors</Nav.Link>
                </Nav>
                
                <nav className="d-flex align-items-center">
                <div>
                    <img className="w-50 rounded-pill" src={user?.photoURL} alt="" />
                </div>
                  
                  <div className="buttonss">
                  {
                            user.displayName ? <p className="text-light me-3 mt-3">{user?.displayName} </p>
                            :
                            <p className="text-light me-3 mt-2">{user?.email}</p>
                        }
                    
                    {
                        user?.email ?    <button onClick={logOut} className="btn btn-danger me-3">Log Out</button>
                        :
                        <div className="d-flex">
                               <Nav.Link as={Link} to="/register" className="text-dark btn btn-light fw-bold me-3">Register</Nav.Link>
                               <Nav.Link as={Link} to="/login" className="text-dark btn btn-light fw-bold">Log In</Nav.Link>
                        </div>
                    }
                  
                  </div>
                </nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;
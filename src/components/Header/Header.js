import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
    return (
        <div>
            
            <Navbar bg="light" variant="light">
                <Container>
                <Navbar.Brand><Link to="/home"><FontAwesomeIcon icon={faUserGraduate}/> StackEdu</Link></Navbar.Brand>
                <Nav className="ms-auto">
                <Nav.Link><Link to="/home">Home</Link></Nav.Link>
                <Nav.Link><Link to="/courses">Courses</Link></Nav.Link>
                <Nav.Link><Link to="/membership">Membership</Link></Nav.Link>
                <Nav.Link><Link to="/about">About</Link></Nav.Link>
                <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
                
                
                </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Container className='container mb-2'>
            <div className='text-center'>
                <Link to="/"><img src={logo} alt="" /></Link>
                <p className='text-secondary'>Journalism without fear or favor</p>
                <p>{moment().format("dddd, MMMM Do YYYY")}</p>
            </div>
            <div className='d-flex mb-2'>
                <div>
                    <button className='btn btn-danger'>Latest</button>
                </div>
                <Marquee className='text-danger'>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <div>
                <Navbar className='rounded mb-2 align-items-center' collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link><Link to="/" className='text-decoration-none text-secondary'>Home</Link></Nav.Link>
                                <Nav.Link href="#pricing">About</Nav.Link>
                                <Nav.Link href="#pricing">Career</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets">Profile</Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                    <Button variant='secondary'>Login</Button>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </Container>
    );
};

export default Header;
import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar, } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () =>{
        logOut()
        .then()
        .catch(error => console.log(error))
    }
    return (
        <Container>
            <Navbar className='rounded mb-2 align-items-center' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <div className='d-md-flex align-items-center gap-2'>
                                <Link to="/" className='text-decoration-none text-secondary'>Home</Link>
                                <Link to="/" className='text-decoration-none text-secondary'>About</Link>
                                <Link to="/" className='text-decoration-none text-secondary'>Career</Link>
                            </div>
                        </Nav>
                        <Nav>
                            {user && <FaUserCircle style={{ fontSize: '2rem' }} className='me-2' />}
                            {
                                user ?
                                    <Button variant='danger' onClick={handleLogOut}>Logout</Button> :
                                    <Link to="/login">
                                        <Button variant='secondary'>Login</Button>
                                    </Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;
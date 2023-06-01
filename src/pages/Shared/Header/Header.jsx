import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { AuthContext } from '../../../providers/AuthProvider';
// import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    // const { user } = useContext(AuthContext)
    return (
        <Container className='container mb-2'>
            <div className='text-center mx-auto'>
                <div className='text-center'>
                    <Link to="/"><img src={logo} alt="" className='image-fluid w-50' /></Link>
                    <p className='text-secondary'>Journalism without fear or favor</p>
                    <p>{moment().format("dddd, MMMM Do YYYY")}</p>
                </div>
            </div>
            <div className='d-flex mb-2'>
                <div>
                    <button className='btn btn-danger'>Latest</button>
                </div>
                <Marquee className='text-danger'>
                    "Nothing in the world can take the place of Persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated derelicts. The slogan 'Press On' has solved and always will solve the problems of the human race." —Calvin Coolidge
                </Marquee>
            </div>
        </Container>
    );
};

export default Header;
import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Container className='container'>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='text-secondary'>Journalism without fear or favor</p>
                <p>{moment().format("dddd, MMMM Do YYYY")}</p>
            </div>
            <div className='d-flex'>
                <div>
                    <button className='btn btn-danger'>Latest</button>
                </div>
                <Marquee className='text-danger'>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
        </Container>
    );
};

export default Header;
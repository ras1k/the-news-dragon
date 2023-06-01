import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'
import { AuthContext } from '../../../providers/AuthProvider';
import { signInWithPopup } from 'firebase/auth';


const RightNav = () => {

    const {googleSignIn} = useContext(AuthContext)

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result => {
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div className=''>
            <div className='text-center'>
                <Button onClick={handleGoogleSignIn} variant="outline-primary" className='w-100 mb-2 mt-2'> <FaGoogle />  Login With Google</Button>
                <Button variant="outline-secondary" className='w-100'> <FaGithub /> Login With Github</Button>
            </div>
            <div>
                <h4 className='mt-3'>Find Us On</h4>
                <div className=''>
                    <ListGroup>
                        <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                        <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                        <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                    </ListGroup>
                </div>
                <div className='mt-3'>
                    <QZone></QZone>
                </div>
                <div>
                    <img src={bg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightNav;
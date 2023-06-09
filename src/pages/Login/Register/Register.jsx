import React, { useContext, useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {

    const { createUser } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false)
    const navigate = useNavigate();

    const handleRegister = event => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(email, name, password, photo)

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
                navigate('/login')
            })
            .catch(error => {
                console.error(error)
            })

        form.reset();
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }

    return (
        <Container className='mx-auto w-50 card p-3'>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' required placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' required placeholder="Enter URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' required placeholder="Enter Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' required placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleAccepted} type="checkbox" name='accept' label={<>Accept <Link to="/terms">Terms and Condition</Link></>} />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={!accepted}>
                    Register
                </Button>
                <br />
                <Form.Text>
                    Already Have An Account? <Link to='/login'>Login</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;
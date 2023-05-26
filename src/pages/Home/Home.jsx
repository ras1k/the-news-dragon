import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RightNav from '../Shared/RightNav/RightNav';

const Home = () => {
    return (
        <div className='container'>
            <Header></Header>
            <Container>
                {/* <Row>
                    <Col sm={8}>sm=8</Col>
                    <Col sm={4}>sm=4</Col>
                </Row> */}
                <Row>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                    <Col lg={6}>
                        <h2>Main Content</h2>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Home;
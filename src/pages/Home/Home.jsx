import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                {/* <Row>
                    <Col sm={8}>sm=8</Col>
                    <Col sm={4}>sm=4</Col>
                </Row> */}
                <Row>
                    <Col lg={3}>

                    </Col>
                    <Col lg={3}>
                    <h2>Main Content</h2>
                    </Col>
                    <Col lg={3}>

                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Home;
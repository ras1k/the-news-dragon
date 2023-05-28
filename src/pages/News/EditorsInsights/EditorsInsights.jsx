import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import first from '../../../assets/1.png'
import second from '../../../assets/2.png'
import third from '../../../assets/3.png'

const EditorsInsights = () => {
    return (
        <Row xs={1} md={2} lg={3} className="g-4 h-100">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={first} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum quod dolore a beatae voluptas in. Obcaecati a numquam voluptatibus unde autem perspiciatis delectus asperiores quasi!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={second} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti labore accusamus aspernatur, numquam, fugiat vero nam, ullam atque odio voluptas a. Nostrum id aliquid delectus possimus
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={third} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas libero minima repellendus modi saepe quasi, optio architecto in rem laborum! id aliquid delectus possimus
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
        </Row>
    );
};

export default EditorsInsights;
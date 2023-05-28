import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import moment from 'moment';
import { FaBookmark, FaShareAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author } = news;
    return (
        <div>
            <Card className=" mb-3">
                <Card.Header className='d-flex align-items-center'>
                    <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
                    <div className='ps-2 flex-grow-1'>
                        <p className='m-0'>{author?.name}</p>
                        <p><small>{moment(author?.published_date).format('MMMM Do YYYY')}</small></p>
                    </div>
                    <div>
                        <FaBookmark />
                        <FaShareAlt/>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {details.length < 250 ? <>{details}</> :
                            <>{details.slice(0, 200)}... <Link to={`/news/${_id}`}>Read More</Link></>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;
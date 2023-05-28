import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import moment from 'moment';
import { FaBookmark, FaEye, FaShareAlt, FaStar } from "react-icons/fa";
import Rating from 'react-rating';

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, rating, total_view } = news;
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
                        <FaShareAlt />
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
                <Card.Footer className="text-muted d-flex">
                    <div className='flex-grow-1'>
                        <Rating>
                            <Rating
                                placeholderRating={3.5}
                                emptySymbol={<FaStar></FaStar>}
                                placeholderSymbol={<img src="assets/images/star-red.png" className="icon" />}
                                fullSymbol={<img src="assets/images/star-yellow.png" className="icon" />}
                            />
                        </Rating>
                        {rating?.number}
                    </div>
                    <div>
                        <FaEye /> {total_view}
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;
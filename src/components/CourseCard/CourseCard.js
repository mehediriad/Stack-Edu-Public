import { faEye, faUser, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './CourseCard.css'

const CourseCard = (props) => {
    const {title,thumbnail,videos,user,views,image,author,price}=props.course;
    return (
       
             <Col>
                    <Card>
                        <Card.Img variant="top" src={thumbnail} />
                        <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <div className="course-info">
                            <div className="videos">
                                <FontAwesomeIcon icon={faVideo}/> 
                                <span> {videos}</span>
                            </div>
                            <div className="user">
                                <FontAwesomeIcon icon={faUser}/>
                                <span> {user}K</span>
                            </div>
                            <div className="views">
                                <FontAwesomeIcon icon={faEye}/>
                                <span> {views}K</span>
                            </div>
                        </div>
                        </Card.Body>
                        <Card.Footer>
                            <div className="author-price">
                                <div className="author">
                                    <img src={image} alt="Image" />
                                    <span> {author}</span>
                                </div>
                                <div className="price">
                                    <h4 style={{color:'blue'}}>${price}</h4>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
             </Col>
                
                  
        
    );
};

export default CourseCard;
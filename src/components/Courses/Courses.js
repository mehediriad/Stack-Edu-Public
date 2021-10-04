import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import CourseCard from '../CourseCard/CourseCard';
import useProduct from '../../Utilites/CustomHooks/useProduct'
import './Courses.css'

const Courses = () => {
    const [courses,setCourses] = useProduct();
   
    return (
        <div className="Courses-container">
           
            <div className="card-container container">
            <Row xs={1} md={3} className="g-4">
               
               
                {
                    courses.map(course=><CourseCard 
                    key={course._id}
                    course={course}
                    ></CourseCard>)
                }
                 
                
             </Row>
            </div>
            
        </div>
    );
};

export default Courses;
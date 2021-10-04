import React from 'react';
import { Row } from 'react-bootstrap';
import useProduct from '../../Utilites/CustomHooks/useProduct';
import CourseCard from '../CourseCard/CourseCard';

const FeaturedCourses = () => {
    const [courses,setCourses] = useProduct();
    return (
        <div className="featured-courses-container Courses-container">
             <div className="courses-intro-text">
                <h2>Featured <span style={{color:'blue'}}>Courses</span> For You</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <div className="card-container container">
            <Row xs={1} md={2} className="g-4">
           
               
                {
                    courses.map((course,index)=>index<4 && <CourseCard 
                    key={course._id}
                    course={course}
                    ></CourseCard>)
                 }
                 
                
             </Row>
            </div>
            
        </div>
    );
};

export default FeaturedCourses;
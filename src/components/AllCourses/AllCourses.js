import React from 'react';
import Courses from '../Courses/Courses';

const AllCourses = () => {
    return (
        <div className="Courses-container">
            <div className="courses-intro-text">
                <h2>Our All <span style={{color:'blue'}}>Courses</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <Courses></Courses>
        </div>
    );
};

export default AllCourses;
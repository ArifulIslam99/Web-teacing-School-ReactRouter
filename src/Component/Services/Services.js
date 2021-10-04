import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import CourseList from '../CourseList/CourseList';

const Services = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('package.json')
        .then(res=> res.json())
        .then(data => setCourses(data))
        .then()
    },[])
    return (  

        <div> <br />
            <h1 className="font-weight-bold"> Here is Our Course List</h1> <br />

            <div>
            <Row xs={1} md={3} className="g-4">
           {
         courses.map(course => <CourseList key={course.id} course={course}></CourseList> )
           }
            </Row>
            </div> <br /> <br />
        </div>
        
    );
};

export default Services;
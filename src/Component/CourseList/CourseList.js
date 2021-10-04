import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CourseList = (props) => { 
    const {title, img, description, instructor, price} = props.course;
    return ( 

          
           <Col>
        <Card style={{alignItems:"center", width: '70%', marginLeft: '60px'}} >
          <Card.Img style={{width: '200px',height: '200px',borderRadius:'50%'}} variant="top" src={img} />
          <Card.Body>
            <Card.Title>{title} </Card.Title>
            <p>Instructor: {instructor} </p>
            <Card.Text>
              {description.slice(0,150)}
            </Card.Text>
            <h4>Course Fee: {price} BDT</h4> <br />
              <Link to="">
              <Button variant="warning" >Enroll Now</Button>
              </Link>
          </Card.Body>
        </Card>
      </Col>
         
        
        
    );
};

export default CourseList;
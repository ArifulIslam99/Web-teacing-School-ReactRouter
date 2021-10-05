import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CourseList.css'

const CourseList = (props) => { 
    const {title, img, description, instructor, price} = props.course;
    return ( 

          // This is Course List component connect to services page. For Every Course Information There will be a card in a grid and then it will load the data from json file  
           <Col>
        <Card className="card-style" style={{}} >
          <Card.Img className="card-image img-fluid"  variant="top" src={img} />
          <Card.Body>
            <Card.Title>{title} </Card.Title>
            <p>Instructor: {instructor} </p>
            <Card.Text>
              {description.slice(0,100)}
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
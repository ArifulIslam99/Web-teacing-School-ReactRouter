import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

const ReviewList = (props) => {

    const {name, img, rating, comment} = props.review;
    return ( 

         
        <Col>
        <Card style={{alignItems:"center", width: '70%', marginLeft: '60px'}}>
         
          <Card.Body>
          <Card.Img style={{width: '200px',height: '200px',borderRadius:'50%'}} variant="top" src={img} />
            <Card.Title>Student Name: {name}</Card.Title>
            <Rating  
               
               style={{color: 'goldenrod'}}
               initialRating={rating}
               emptySymbol="far fa-star"
               fullSymbol="fas fa-star"
               
               readonly> 
               
               
                </Rating> 
            <Card.Text>
               <p>"{comment}"</p>
            </Card.Text>
            
          </Card.Body>
        </Card>
      </Col>
    );
};

export default ReviewList;
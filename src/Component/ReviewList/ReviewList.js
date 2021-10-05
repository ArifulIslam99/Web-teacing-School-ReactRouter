import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './ReviewList.css'

const ReviewList = (props) => {

    const {name, img, rating, comment} = props.review;
    return ( 

         // This is Review List component connect to Review page. For Every Review There will be a card in a grid and then it will load the data from json file 
        <Col>
        <Card className='card-style' >
         
          <Card.Body>
          <Card.Img className="card-image"  variant="top" src={img} />
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
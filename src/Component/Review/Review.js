import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ReviewList from '../ReviewList/ReviewList';

const Review = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('/package2.json')
        .then(res=>res.json())
        .then(data=> setReviews(data))
    })
    return (
            // Students Review Section Page. Reviews load from package2 json file and showed via reviewList Component
        <div> <br />
             <h1 className="font-weight-bold">What Our Student says!</h1> <br />
             <div>
             <Row xs={1} md={3} className="mx-auto ">
           {
             reviews.map(review => <ReviewList key={review.name}  review={review}></ReviewList>)
           }
            
            </Row>
             </div> <br /> <br />
        </div>
        
    );
};

export default Review;
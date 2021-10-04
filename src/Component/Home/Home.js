import React from 'react';
import { Button, Card, CardGroup, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image1 from '../../images/img1.jpg'
import image2 from '../../images/img2.jpg'
import image3 from '../../images/img3.jpg'
import image4 from '../../images/img4.jpg'

const Home = () => {
    return (
        <div>     
        <div>
        <Carousel  className="  mx-auto w-100 h-75">
  <Carousel.Item>
    <img
      className="d-block border rounded w-100"
      src={image1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Full Guided Support</h3>
      <p>Our Instructor are very supportive to our stdents. We are always ready to guide you.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block border rounded w-100 "
      src={image2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Zoom and Meet Support</h3>
      <p>We are ready to hear your problems and pains</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img 
      className="d-block border rounded w-100 "
      src={image3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Lifetime Access</h3>
      <p>Once you enrolled you can access anytime anf from anywhere.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> <br /> <br />
        </div> 
         
         <div> 
           <br /> 
           <h2 className="font-weight-bold fs-1"> <i class="fas fa-mouse"></i> Most Popular Courses</h2>
           <br />
         <CardGroup>
  <Card>
    <Card.Img variant="top" className="h-50 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6NkHVCdQ8j003gxChxXIDHEOivCDDNRE7pg&usqp=CAU" />
    <Card.Body>
      <Card.Title>Java programming</Card.Title>
      <p>Instructor: Taskid Javed</p>
      <Card.Text>
      Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img className="h-50 "  variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl4elBF4Ve-pfLnO1bMGJDyiqqEWEHnYkosw&usqp=CAU" />
    <Card.Body>
      <Card.Title>React</Card.Title>
      <p>Instructor: Abir Faysal</p>
      <Card.Text>
      React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img className="h-50 "  variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR61-LMVCvY-BXKLCBYfd06qtBn-3VVtVpsBg&usqp=CAU" />
    <Card.Body>
      <Card.Title>Angular</Card.Title>
      <p>Instructor: Taskid Javed</p>
      <Card.Text>
      Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img className="h-50 "  variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4H7HOrxAO8cagwEC4ZxCWQTLVE4zv6FR8og&usqp=CAU" />
    <Card.Body>
      <Card.Title>Operating System</Card.Title>
      <p>Instructor: </p>
      <Card.Text>
      Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds. Linux is typically packaged in a Linux distribution
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup> <br /> <br />
         </div>
         <div >
           <div>
               <blockquote ><h2>"An investment in knowledge pays the best interest"</h2></blockquote>
               <p>-Benjamin Franklin</p>
               <Link to='/services'>
               <Button variant="success" className="mb-5 font-weight-bold">Enroll Today</Button> 
               </Link>
               
               
           </div>
           
         </div>
        </div>

        
    );
};

export default Home;
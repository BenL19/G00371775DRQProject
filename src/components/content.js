import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Card} from 'react-bootstrap';
import { Reviews } from './reviews';

export class Content extends React.Component {
    render() { 
        return (
            <div>
                <h1>Welcome to Game Talk!</h1>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://media.istockphoto.com/vectors/flag-ribbon-welcome-old-school-flag-banner-vector-id1223088904?k=20&m=1223088904&s=612x612&w=0&h=b_ilJpFTSQbZeCrZusHRLEskmfiONWH0hFASAJbgz9g="
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Welcome to Game Talk!</h3>
                            <p>Let your voice be heard about the latest games.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.imgur.com/9ZLA7Gx.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                </Carousel>

                <br></br>

                <Card bg={"dark"} text={"white"} style={{ width: '18rem' }} className="mb-2">
                    <Card.Img variant="top" src="http://www.clker.com/cliparts/0/e/r/N/8/l/about-me-cloud-md.png" />
                    <Card.Body>
                        <Card.Title>What is this?</Card.Title>
                        <Card.Text>
                            This is an app all about creating your own review on any game you want, posting it here and sharing it with the world. Let your voice be heard and share your opinions!
                        </Card.Text>
                    </Card.Body>
                </Card>

                <br></br>
                <hr></hr>
                <br></br>


            </div>
        );
    }
}
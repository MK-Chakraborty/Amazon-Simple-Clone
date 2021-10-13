import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './Banner.css'
import img1 from '../../../images/61ASx7NHTWL._SX3000_.jpg'
import img2 from '../../../images/61DUO0NqyyL._SX3000_.jpg'
import img3 from '../../../images/61TD5JLGhIL._SX3000_.jpg'

const Banner = () => {
    return (
        <Container fluid className="px-0 setPosition">
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Banner;
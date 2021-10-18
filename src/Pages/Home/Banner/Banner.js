import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Carousel variant="dark">
            <Carousel.Item>
                <img style={{"height":"500px"}}
                className="d-block w-100"
                src="./images/banner/banner1.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h2 className="fw-bold w-75">Eye Care Specialist Services That You Can Trust</h2>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img  style={{"height":"500px"}}
                className="d-block w-100"
                src="./images/banner/banner2.jpg"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h2>High Innovation Propessional Eye Care</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img  style={{"height":"500px"}}
                className="d-block w-100"
                src="./images/banner/banner3.jpg"
                alt="Third slide"
                />
                <Carousel.Caption className="caption">
                    <div>
                    <h2 className="fw-bold w-75">We Only Give Best Care To Your Eyes</h2>
                   <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
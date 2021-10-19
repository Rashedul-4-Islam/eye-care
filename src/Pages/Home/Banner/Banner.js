import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Carousel variant="dark">
            <Carousel.Item>
                <img 
                className="d-block w-100 head"
                src="./images/banner/banner1.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h2 className="fw-bold w-75">Eye Care Specialist Services That You Can Trust</h2>
                <p  className="fw-bold "> Your doctor will make the best effort possible to diagnose eye condition.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 head"
                src="./images/banner/banner2.jpg"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h2 className="fw-bold fs-2 w-75">High Innovation Propessional Eye Care</h2>
                <p  className="fw-bold w-75">we value our patients’ overall health and encourage our patients to visit their primary care doctor annually.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 head"
                src="./images/banner/banner3.jpg"
                alt="Third slide"
                />
                <Carousel.Caption className="caption">
                    <div>
                    <h2 className="fw-bold fs-2 w-75">We Only Give Best Care To Your Eyes</h2>
                   <p className="fw-bold w-75">Get basics solution for the daily life problems and soother experience of the eye related queries by experts.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="background p-3">
            <div className="row text-light">
                <div className="col-md-3">
                    <h2 className="text-info">Contact</h2>
                    <p className="fw-bold">Phone: <br />+8801578654142</p>
                    <p className="fw-bold">Email: <br />hello@eyecare.com</p>
                    <p className="fw-bold">Adress: <br />Pahartali,Chittagong,BD</p>
                </div>
                <div className="col-md-3">
                    <h2 className="text-info">About</h2>
                    <ul className="list-style">
                        <li>Doctors</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Departments</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="col-md-3">
                <h2 className="text-info">Support</h2>
                    <ul className="list-style">
                        <li>Free Consultancy</li>
                        <li>Online Support</li>
                        <li>24/7 service</li>
                        <li>Make Call</li>
                        <li>Contact Support</li>
                    </ul>
                </div>
                <div className="col-md-3">
                <h2 className="text-info">Opening Hour</h2>
                    <ul className="list-style">
                        <li>Sun : 9.00AM-9.00PM</li>
                        <li>Mon : 9.00AM-9.00PM</li>
                        <li>Teu : 9.00AM-9.00PM</li>
                        <li>Web : 9.00AM-9.00PM</li>
                        <li>Thru : 9.00AM-9.00PM</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <p className="text-center text-danger">Copyright <span>&copy;</span>2021 EYE-CARE. Designed By Rashedul Islam</p>
            </div>
        </div>
    );
};

export default Footer;
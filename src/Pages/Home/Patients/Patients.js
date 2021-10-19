import React from 'react';
import './Patiens.css'

const Patients = () => {
    return (
        <div className="my-5 py-3 heights">
            <div className="patients">
                <div className="overlays text-center">
                        <h2 className="fw-bolder">What Our Patiens Say!</h2>
                        <div className="w-25 m-auto text-light"> <hr /></div>
                        <p>
                        What a wonderful experience with Optrica! Your doctor will make the best effort possible to diagnose eye condition.
                        </p>
                </div>
            </div>
            <div className=" contain">
                <div className="single-patient">
                    <div className="d-flex">
                        <img className="w-25" src="https://themetechmount.com/html/optrica/images/testimonial/01.jpg" alt="" />
                        <div className="ms-4">
                            <h4>Devon Conway</h4>
                            <p>Maneger</p>
                        </div>
                    </div>
                    <div>-------------------------------------------</div>
                    <div>
                        <p className="text-start">was very impressive how easy & fast it was the Dr.Optrica.They came up with what was going to be the best for me, staff provide great service</p>
                    </div>
                </div>
                <div className="single-patient">
                <div className="d-flex">
                        <img className="w-25" src="https://themetechmount.com/html/optrica/images/testimonial/02.jpg" alt="" />
                        <div className="ms-4">
                            <h4>Marie Rose</h4>
                            <p>Optician</p>
                        </div>
                    </div>
                    <div>-------------------------------------------</div>
                    <div>
                        <p className="text-start">was very impressive with they treat the patiens.How easy and fast process for the team . I am so thankful for that great behaviour</p>
                    </div>
                </div>
                <div className=" single-patient">
                <div className="d-flex">
                        <img className="w-25" src="https://themetechmount.com/html/optrica/images/testimonial/03.jpg" alt="" />
                        <div className="ms-4">
                            <h4>Angel jolly</h4>
                            <p>Patients</p>
                        </div>
                    </div>
                    <div>-------------------------------------------</div>
                    <div>
                        <p className="text-start">was very impressive with they treat the patiens.How easy and fast process for the team . I am so thankful for that great behaviour</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Patients;
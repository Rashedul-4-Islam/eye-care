import React from 'react';
import './Doctors.css'

const Doctors = () => {
    return (
        <div>
            <div className="bg-image">
                <div className="overlay text-center">
                    <h1 className="fw-bold">Doctors</h1>
                </div>
            </div>
            <div className="mt-4">
                <h3 className="text-info">Doctors</h3>
                <h1 className="fw-bold">Eye Care Specialist</h1>
            </div>
            <div className="row">
                <div className="col-12 col-md-4 p-5">
                    <img className="bg-doctor" src="./images/doctors/doctor1.png" alt="" />
                    <h2>Dr. Jolian Acenj</h2>
                    <p>Surgery Specialist</p>
                </div>
                <div className="col-12 col-md-4 p-5">
                    <img className="bg-doctor" src="./images/doctors/doctor2.png" alt="" />
                    <h2>Dr. Arnica Sarah</h2>
                    <p>Surgery Specialist</p>
                </div>
                <div className="col-12 col-md-4 p-5">
                    <img className="bg-doctor" src="./images/doctors/doctor3.png" alt="" />
                    <h2>Dr. Jordan Acenj</h2>
                    <p>Lasik Specialist</p>
                </div>
                <div className="col-12 col-md-4 p-5">
                    <img className="bg-doctor" src="./images/doctors/doctor4.png" alt="" />
                    <h2>Dr. Triben Dina</h2>
                    <p>Lasik Specialist</p>
                </div>
                <div  className="col-12 col-md-4 p-5">
                    <img className="bg-doctor" src="./images/doctors/doctor5.png" alt="" />
                    <h2>Dr. Alena Malic</h2>
                    <p>Contact Lens Specialist</p>
                </div>
                <div className="col-12 col-md-4 p-5">
                    <img className="bg-doctor" src="./images/doctors/doctor6.png" alt="" />
                    <h2>Dr. Malina Angel</h2>
                    <p>Lasic Specialist</p>
                </div>
            </div>
        </div>
    );
};

export default Doctors;
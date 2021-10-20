import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleService from '../SingleService/SingleService';
import './Services.css'

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(() =>{
        fetch("./services.json")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="my-5">
            <h2 className="fw-bold text-center bg-warning w-25 m-auto p-2 rounded-pill">Services</h2>
            <div className="cards">
                {
                   services.slice(0,6).map(service => <SingleService
                    key = {service.id}
                    service = {service}
                   ></SingleService>)
                }
            </div>
            <Link to="/services" className="btn btn-danger mt-3">See More Services</Link>
        </div>
    );
};

export default Services;
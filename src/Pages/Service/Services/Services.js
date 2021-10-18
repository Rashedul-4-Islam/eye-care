import React, { useEffect, useState } from 'react';
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
            <h2 className="fw-bold text-center">Services</h2>
            <div className="cards">
                {
                   services.slice(0,6).map(service => <SingleService
                    key = {service.id}
                    service = {service}
                   ></SingleService>)
                }
            </div>
        </div>
    );
};

export default Services;
import React, { useEffect, useState } from 'react';
import SingleSer from '../SingleSer/SingleSer'
import './TotalService.css'

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(() =>{
        fetch("./services.json")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="total">
            <div className="bg-img ">
                 <div className=" d-flex align-items-center justify-content-center">
                 <h2 className="fw-bold text-center ">Services</h2>
                 </div>
            </div>
             <div className="mt-5 text-center">
                 <h5 className="text-success">Services</h5>
                 <h2> Eye Care Services</h2>

             </div>
            <div className="cards">
                {
                   services.map(service => <SingleSer
                    key = {service.id}
                    service = {service}
                   ></SingleSer>)
                }
            </div>
        </div>
    );
};

export default Services;
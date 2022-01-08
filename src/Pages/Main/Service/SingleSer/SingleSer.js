import React from 'react';
import { Link } from 'react-router-dom';
import './SingleSer.css'

const SingleService = ({service}) => {
    const {name,img,cost,id,description} = service;
    return (
        <div className="service-card py-3 px-0 text-center container-fluid">
            <img className="w-75" src={img} alt="" />
            <h2>{name}</h2>
            <p className="fw-bold">Treatment-Cost: ${cost}</p>
            <p className="description m-auto mb-2"><span className="fw-bold">Description</span> : {description}</p>
            <div>
            <Link to={`/servicedetails/${id}`}
                 
                 >
                    <button className="btn btn-danger px-3 fw-bold">Details</button>
                 </Link>
            </div>
        </div>
    );
};

export default SingleService;

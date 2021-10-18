import React from 'react';
import { Link } from 'react-router-dom';
import './SingleService.css'

const SingleService = ({service}) => {
    const {name,img,cost,description,id} = service;
    return (
        <div className="service-card py-3 px-0">
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
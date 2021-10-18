import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './ServiceDetails.css'

const ServiceDetails = () => {
    let {id} = useParams();
    const [details,setDetails] = useState([]);
    // const [single,setSingle] = useState({})
    useEffect(() =>{
        fetch("../services.json")
        .then(res => res.json())
        .then(data => setDetails(data))
    },[])
    const ExactItem = details.filter(td => td.id === id)
    console.log(ExactItem);

    // useEffect(() =>{
    //     const foundService = details.find(ser => ser.id === id)
    //     setSingle(foundService);
    // },[details,id])
    return (
        <div className="d-flex justify-content-center">
            <div className="single-card my-5 py-5">
            <img className="w-50 rounded-pill" src={ExactItem[0]?.img} alt="" />
            <h3>{ExactItem[0]?.name}</h3>
            <p className="w-75 m-auto">{ExactItem[0]?.description}</p>
            <p className="mt-3 fw-bold">Treatment-Cost:$ {ExactItem[0]?.cost}</p>
            <Link to="/services" className="btn btn-danger mt-3 px-5">Back</Link>
            </div>
        </div>
    );
};

export default ServiceDetails;
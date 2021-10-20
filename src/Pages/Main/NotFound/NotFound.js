import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <img className="not-found" src="https://image.freepik.com/free-vector/glitch-error-404-page-background_23-2148088043.jpg" alt="" />
            {/* <div className="mb-5">
            <Link to="/homes" className="btn btn-primary fw-bold text-light mt-3 px-5">Home</Link>
            </div> */}
        </div>
    );
};

export default NotFound;
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img src="https://support.start.me/hc/article_attachments/360001139105/404_page_not_found.jpeg" alt="" />
            <div className="mb-5">
            <Link to="/homes" className="btn btn-primary fw-bold text-light mt-3 px-5">Home</Link>
            </div>
        </div>
    );
};

export default NotFound;
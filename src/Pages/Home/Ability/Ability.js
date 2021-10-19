import React from 'react';
import './Ability.css'

const Ability = () => {
    return (
        <div className="ability">
              <h2 className="heading">Our Reputation</h2>
            <div className="row">
                <div className="col-sm-12 col-md-4">
                    <img className="image w-100 p-4" src="https://themetechmount.com/html/optrica/images/single-img-01.jpg" alt="" />
                </div>
                <div className="col-sm-12 col-md-8 text-start">
                     <h1 className="title mt-5 ms-5 fw-bold">Everybody Deserves To See The World <span className="text-warning"> Clearly</span>.</h1>
                     <p className="w-75 text-start ms-5">We believe that everyone deserves to see the world clearly. That’s why we’ve made it our mission to provide patients with the best eye doctors, the most thorough an eye’s health exams, and a wide selection of eyewear delivered with the personal attention you deserve .enim ad et minim veniam.</p>
                     <div className="row container ms-3">
                         <div className="col-12 col-md-6">
                             <h2><span><i className="fas fa-chevron-circle-right"></i></span> We are Certified</h2>
                             <p>Certified by Government for excellence in Ophthalmic Technology</p>
                         </div>
                         <div className="col-12 col-md-6">
                             <h2><span><i className="fas fa-chevron-circle-right"></i></span> 20 Years Of Experience</h2>
                             <p>Community health and vision care to the area for over 20 years</p>
                         </div>
                         <div className="col-12 col-md-6">
                             <h2><span><i className="fas fa-chevron-circle-right"></i></span> Expert Doctors</h2>
                             <p>You will be treated with the most friendly & compassionate care</p>
                         </div>
                         <div className="col-12 col-md-6">
                             <h2><span><i className="fas fa-chevron-circle-right"></i></span> Excellent Services</h2>
                             <p>Today, we fit into the perfect frame of services for everyone</p>
                         </div>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default Ability;
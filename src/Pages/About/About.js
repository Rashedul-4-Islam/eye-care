import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            <div className="bg-image">
                <div className="overlay">
                    <h2 className="text-center">About</h2>
                </div>
            </div>

            <div className="row my-4">
                <div className="col-md-6">
                    <img className="w-75 rounded-pill" src="https://templates.hibootstrap.com/opnix/default/assets/images/about/main2.jpg" alt="" />
                </div>
                <div className="col-md-6 my-5 text-start">
                    <h5>About us</h5>
                    <h2>We Are Caring For Your Eye Health Hospital</h2>
                    <p>Primary eye care is the provision of appropriate, accessible, and affordable care that meets patients' eye care needs in a comprehensive and competent manner. Primary eye care provides the patient with the first contact for eye care as well as a lifetime of continuing care.</p>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <p><span><i class="fas fa-check-circle"></i></span> Conducts eye health checkups</p>
                            <p><span><i class="fas fa-check-circle"></i></span> Best lasik treatment</p>
                            <p><span><i class="fas fa-check-circle"></i></span> Treats minor illnesses</p>
                        </div>
                        <div className="col-md-6">
                        <p><span><i class="fas fa-check-circle"></i></span> Special eye exam</p>
                            <p><span><i class="fas fa-check-circle"></i></span> Contact lens service</p>
                            <p><span><i class="fas fa-check-circle"></i></span>Special Retina exam</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
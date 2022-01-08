import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className="abouts">
            <div className="bg-image">
                <div className="overlay">
                    <h2 className="text-center fw-bold">About</h2>
                </div>
            </div>

            <div className="row my-4 container-fluid">
                <div className="col-md-6">
                    <img className="w-75 rounded-pill" src="https://templates.hibootstrap.com/opnix/default/assets/images/about/main2.jpg" alt="" />
                </div>
                <div className="col-md-6 py-5 text-start">
                   <div className="about-text">
                   <h5>About us</h5>
                    <h2>We Are Caring For Your Eye Health Hospital</h2>
                    <p>Primary eye care is the provision of appropriate, accessible, and affordable care that meets patients' eye care needs in a comprehensive and competent manner. Primary eye care provides the patient with the first contact for eye care as well as a lifetime of continuing care.</p>
                   </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <p><span><i className="fas fa-check-circle"></i></span> Conducts eye health checkups</p>
                            <p><span><i className="fas fa-check-circle"></i></span> Best lasik treatment</p>
                            <p><span><i className="fas fa-check-circle"></i></span> Treats minor illnesses</p>
                        </div>
                        <div className="col-md-6">
                        <p><span><i className="fas fa-check-circle"></i></span> Special eye exam</p>
                            <p><span><i className="fas fa-check-circle"></i></span> Contact lens service</p>
                            <p><span><i className="fas fa-check-circle"></i></span>Special Retina exam</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 choose py-5 container-fluid text-center">
                <h5>Why Choose Us</h5>
                <h1 className="text-success fw-bold">Providing Care For The <span className="text-danger">Sickest</span></h1>
                <div className="items">
                    <div className="item">
                        <img className="images py-5 px-4" src="https://www.vhv.rs/dpng/d/89-894147_qualified-doctor-logo-hd-png-download.png" alt="" />
                        <h3>Qualified Doctors</h3>
                        <p className="text-start p-4">Someone who is qualified has passed the examinations that they need to pass in order to work in a particular profession.</p>
                    </div>
                    <div className="item">
                        <img className="images py-5 px-4" src="https://w7.pngwing.com/pngs/252/19/png-transparent-eye-computer-icons-symbol-eye-people-logo-human-eye.png" alt="" />
                        <h3>Eye Examination</h3>
                        <p className="text-start p-4">Someone who is qualified has passed the examinations that they need to pass in order to work in a particular profession.</p>
                    </div>
                    <div className="item">
                        <img className="images py-5 px-4" src="https://optometry.iu.edu/images/patient-care/trouble-contacts.jpg" alt="" />
                        <h3>Contact Lenses</h3>
                        <p className="text-start p-4">Someone who is qualified has passed the examinations that they need to pass in order to work in a particular profession.</p>
                    </div>
                    <div className=" item">
                        <img className="images py-5 px-4" src="https://media.istockphoto.com/vectors/laser-vision-correction-line-icon-vector-id826696300?k=20&m=826696300&s=612x612&w=0&h=7c6UM6EWF19pydKByz8RHanBEY30xaaHdjXmYxoMoSQ=" alt="" />
                        <h3>Laser Eye Correction</h3>
                        <p className="text-start p-4">Someone who is qualified has passed the examinations that they need to pass in order to work in a particular profession.</p>
                    </div>
                  
                </div>
            </div>
        </div>
    );
};

export default About;
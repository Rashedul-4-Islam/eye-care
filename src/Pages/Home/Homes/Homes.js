import React from 'react';
import Services from '../../Service/Services/Services';
import Ability from '../Ability/Ability';
import Banner from '../Banner/Banner';
import Patients from '../Patients/Patients';
import './Homes.css'

const Homes = () => {
    return (
        <div className='homes_width'>
            <Banner></Banner>
            <Services></Services>
            <Ability></Ability>
            <Patients></Patients>
        </div>
    );
};

export default Homes;
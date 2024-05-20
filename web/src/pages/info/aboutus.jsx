import React from 'react';
import CardsCEO from '../../components/Cards/cards-aboutus/cardsCEO';
import './aboutus.css';

function AboutUs() {
  return (
    <div>
      <h1 className='aboutus-title'>Bienvenido a GymCode</h1>
      <div className='aboutus-container'>
        <h2>¿Quienes somos?</h2>
        <CardsCEO/>
      </div>
    </div>
  );
}

export default AboutUs;

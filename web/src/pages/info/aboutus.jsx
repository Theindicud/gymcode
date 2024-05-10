import React from 'react';
import CardCEO from '../../components/Cards/CardCEO'
import './aboutus.css';

function AboutUs() {
  return (
    <div>
      <h1 className='aboutustitle'>Bienvenido a GymCode</h1>
      <div className='container'>
        <h2>¿Quienes somos?</h2>
        <CardCEO/>
      </div>
    </div>
  );
}

export default AboutUs;

import React from 'react';
import Cards from '../../components/Cards/CardCEOs';
import './aboutus.css';

function AboutUs() {
  return (
    <div>
      <h1>Bienvenido a GymCode</h1>
      <div className='container'>
        <h2>¿Quienes somos?</h2>
        <Cards />
      </div>
    </div>
  );
}

export default AboutUs;

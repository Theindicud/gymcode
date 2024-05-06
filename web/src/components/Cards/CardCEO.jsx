import React from 'react';
import Card from './Card';
import JoseRamon from '../../assets/img/photoscard/JoseRamon.jfif'; 
import RaquelMelo from '../../assets/img/photoscard/RaquelMelo.jfif'; 

export default function CardList() {
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
            <Card 
                imageSrc={JoseRamon}
                title="José Ramón Mosquera Farré"
                text="José Ramón es un apasionado del fitness y la salud. Con más de 10 años de experiencia en la industria, ha ayudado a innumerables personas a alcanzar sus objetivos de bienestar. Con su enfoque personalizado y su dedicación, es el entrenador perfecto para llevar tu forma física al siguiente nivel."
            />
            <Card 
                imageSrc={RaquelMelo}
                title="Raquel Melo Dorta"
                text="Raquel es una experta en nutrición y bienestar. Con un enfoque holístico para la salud, se dedica a ayudar a las personas a mejorar su calidad de vida a través de la alimentación y el estilo de vida. Con sus consejos prácticos y su conocimiento profundo, te guiará hacia una vida más saludable y equilibrada."
            />
        </div>
    );
}

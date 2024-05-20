import Card from '../../Cards/cards';
import './cards-home.css';

export default function CardsHome() {
    return (
        <>
        <div className='cards-title'>
        <h1>Cumple Tus Objetivos con GymCode</h1>
        </div>
        <div className='grid-home'>
            <div className='item-home'>
                <img
                    src="https://res.cloudinary.com/dznumjlzc/image/upload/v1716030928/gymcode/cardshome/gimnasio_dcng5l.png"
                />
                <div className='content-home'>
                    <h3>Entrenadores Expertos a tu Alcance</h3>
                    <div className='horizontal-line'></div>
                    <p>¿Necesitas un poco de orientación adicional? Nuestros entrenadores expertos están aquí para ayudarte.</p>

                </div>
            </div>
            <div className='item-home'>
                <img
                    src="https://res.cloudinary.com/dznumjlzc/image/upload/v1716210319/gymcode/cardshome/weightlifting_juw7kw.png"
                />
                <div className='content-home'>
                    <h3>Añade tus Rutinas Favoritas</h3>
                    <div className='horizontal-line'></div>
                    <p>Guarda tus rutinas de ejercicio favoritas con un solo clic. Organiza tu entrenamiento de manera fácil y eficiente.</p>

                </div>
            </div>
            <div className='item-home'>
                <img
                    src="https://res.cloudinary.com/dznumjlzc/image/upload/v1716030936/gymcode/cardshome/pesa_dt4ssa.png"
                />
                <div className='content-home'>
                    <h3>Comunidad Activa</h3>
                    <div className='horizontal-line'></div>
                    <p>Únete a nuestra comunidad activa de entusiastas del fitness. Conéctate, comparte y aprende de otros apasionados por el ejercicio.</p>

                </div>
            </div>

            <div className='item-home'>
                <img
                    src="https://res.cloudinary.com/dznumjlzc/image/upload/v1716030928/gymcode/cardshome/gimnasio_dcng5l.png"
                />
                <div className='content-home'>
                    <h3>Encuentra tu Gimnasio Más Cercano</h3>
                    <div className='horizontal-line'></div>
                    <p>Busca y descubre los gimnasios cercanos a ti. Con GymCode, nunca estarás lejos de tu lugar de entrenamiento ideal.</p>

                </div>
            </div>
        </div>
        </>
    )
}

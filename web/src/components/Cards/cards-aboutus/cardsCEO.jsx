import Card from '../../Cards/cards';
import './cardsCEO.css';
import JoseRamon from "../../../assets/img/photocard/JoseRamon.jfif";
import RaquelMelo from "../../../assets/img/photocard/RaquelMelo.jfif";

export default function CardList() {
    return (
        <div className="row row-cols-md-2">
            <Card
                imageSrc={JoseRamon}
                title="José Ramón Mosquera Farré"
                style={{marginRight: "100px"}}
                text={
                    <>
                        <img 
                            width="20" 
                            height="20" 
                            src="https://img.icons8.com/ios/50/user--v1.png" 
                            alt="user--v1" 
                            style={{ verticalAlign: 'text-bottom' }}
                        /> 
                        &nbsp; Soy fisioterapeuta de profesión y estoy finalizando un emocionante bootcamp en desarrollo web en IronHack.
                        <br />
                        <img 
                            width="20" 
                            height="20" 
                            src="https://img.icons8.com/ios/50/laptop--v1.png" 
                            alt="laptop--v1" 
                            style={{ verticalAlign: 'text-bottom' }}
                        /> 
                        &nbsp; Mi objetivo es combinar mi experiencia en fisioterapia con habilidades tecnológicas para innovar en el campo de la salud y el bienestar.
                    </>
                }
            />
            <Card
                imageSrc={RaquelMelo}
                title="Raquel Melo Dorta"
                text={
                    <>
                        <img 
                            width="20" 
                            height="20" 
                            src="https://img.icons8.com/ios/50/person-female--v2.png" 
                            alt="person-female--v2" 
                            style={{ verticalAlign: 'text-bottom' }}
                        /> 
                        &nbsp; Soy profesional de Relaciones Laborales y Recursos Humanos, y estoy finalizando un emocionante bootcamp en desarrollo web en IronHack.
                        <br />
                        <img 
                            width="20" 
                            height="20" 
                            src="https://img.icons8.com/forma-light/24/goal.png" 
                            alt="goal"
                            style={{ verticalAlign: 'text-bottom' }}
                        /> 
                        &nbsp; Mi objetivo es utilizar estas nuevas competencias para innovar en Recursos Humanos, mejorando la eficiencia y la experiencia de los empleados.
                    </>
                }
            />
        </div>
    );
    
    

}

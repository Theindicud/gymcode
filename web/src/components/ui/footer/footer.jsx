import React from 'react';
import './footer.css';

function Footer() {
    return (
        <div className="footer">
        <footer className="mt-auto py-1 bg-dark text-white">
                <div className="container-fluid p-2 pb-0">
                    <section>
                        <div className="row">
                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">GymCode</h6>
                                <p>
                                    ¡Experimenta tus entrenamientos favoritos con GymCode! 
                                    Desde clases de fitness y entrenamientos personalizados hasta nutrición y bienestar, ofrecemos una amplia gama de opciones.
                                </p>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3"></div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Enlaces útiles</h6>
                                <p>
                                    <a className="text-white" href="/aboutus">Sobre nosotros</a>
                                </p>
                                <p>
                                    <a className="text-white" href="/register">Registrate</a>
                                </p>
            
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Contacto</h6>
                                <p><i class="fa fa-info" aria-hidden="true"></i> info@gymcode.com</p>
                                <p><i class="fa fa-phone" aria-hidden="true"></i>+34 123 456 789</p>
                            </div>
                        </div>
                    </section>
                    <hr className="my-2" />
                    <section className="p-3 pt-0">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-7 col-lg-8 text-center text-md-start">
                                <div className="p-3">
                                    © 2024 Copyright. GymCode. Todos los derechos reservados.
                                </div>
                            </div>
                            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end"></div>
                        </div>
                    </section>
                </div>
            </footer>
        </div>
    );
}

export default Footer;

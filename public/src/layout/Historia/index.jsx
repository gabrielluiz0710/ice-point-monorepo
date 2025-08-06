import React from 'react';
import './historia.css';
import historia from '../../assets/Imagens/historia.png';
import { Link } from 'react-router-dom';

const Historia = () => {
    return (
        <section id="historia" className="section-historia">
            <div className="container-historia">       
                <div className="row-historia">
                    <div className="historia-col">
                        <h1>Como tudo começou...</h1>
                        <p style={{ fontFamily: 'Montserrat, serif', fontWeight: 400, color: '#000000', textAlign: 'left' }}>
                            Bem-vindo à Ice Point! Desde outubro de 2020, transformamos nossa paixão em sorvetes e picolés artesanais de alta qualidade. O que começou como uma pequena sorveteria familiar evoluiu, mas nosso compromisso com a satisfação e a alegria dos nossos clientes continua inabalável em cada sabor que oferecemos.
                        </p>
                        <Link to="/sobre" className="btn-saiba-mais">Saiba Mais</Link>
                    </div>
                    <div className="historia-col">
                        <div className="colagem">
                            <img src={historia} alt="História" className="imagem-colagem"/>
                        </div>
                    </div>
                </div>     
            </div>
        </section>
    );
};

export default Historia;

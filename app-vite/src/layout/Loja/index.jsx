import React from 'react';
import './loja.css';
import loja from '../../assets/Imagens/loja.jpg';

const Loja = () => {
    return (
        <section id="loja" className="section-loja">
            <div className="container-loja">       
                <div className="row-loja">
                    <div className="loja-col">
                        <div className="texto-loja">
                            <h1>Conheça nossa sorveteria</h1>
                            <p style={{ fontFamily: 'Montserrat, serif', fontWeight: 400, color: '#000000' }}>
                                Venha conhecer nossa sorveteria, que refresca o paladar de todos os consumidores!
                            </p>
                            <a href="https://maps.app.goo.gl/DwiB8HeVorB5jkaC7" className="btn-ver-loc">Ver localização</a>
                        </div>
                    </div>
                    <div className="loja-col">
                        <div className="class-img-loja">
                            <img src={loja} alt="Sorveteria" className="imagem-loja" id="imagem-loja"/>
                            <div className="borda-loja" id="borda-loja"></div>
                        </div>
                    </div>
                </div>     
            </div>
        </section>
    );
};

export default Loja;

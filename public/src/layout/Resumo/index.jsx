import React from 'react';
import './resumo.css';
import coracao from '../../assets/Imagens/coracao.png';
import ice_cream from '../../assets/Imagens/ice-cream.png';
import love from '../../assets/Imagens/in-love.png';
import money from '../../assets/Imagens/money.png';

const Resumo = () => {
    return (
        <section id="resumo" className="section-resumo">
            <div className="container-resumo">       
                <div className="row-resumo">
                    <div className="resumo-col">
                        <div className="elemento-resumo">
                            <img src={coracao} alt="Coração" className="icon-resumo"/>
                            <h1>Mais Amada da Região</h1>
                            <p>Quem prova, comprova: a melhor sorveteria para toda a família.</p>
                        </div>
                    </div>
                    <div className="resumo-col">
                        <div className="elemento-resumo">
                            <img src={ice_cream} alt="Sorvete" className="icon-resumo"/>
                            <h1>Variedade que Encanta</h1>
                            <p>Temos tudo que você procura: açaí, sorvete, picolés e muito mais!</p>
                        </div>
                    </div>
                    <div className="resumo-col">
                        <div className="elemento-resumo">
                            <img src={love} alt="Apaixonado" className="icon-resumo"/>
                            <h1>+50 Sabores Diferentes</h1>
                            <p>Mais de 50 opções irresistíveis de sabores únicos!</p>
                        </div>
                    </div>
                    <div className="resumo-col">
                        <div className="elemento-resumo">
                            <img src={money} alt="Dinheiro" className="icon-resumo"/>
                            <h1>Tudo com Preço de Fábrica</h1>
                            <p>Todos nossos produtos com preço de fábrica para você!</p>
                        </div>
                    </div>
                </div>     
            </div>
        </section>
    );
};

export default Resumo;

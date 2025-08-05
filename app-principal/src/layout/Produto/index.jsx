import styles from './produto.css';
import caracter2 from '../../assets/Imagens/caracter2.png';
import { Link } from 'react-router-dom';


function Produto() {
    return (
        <section id="produto" className="section-produto">
            <div className="container-produto">       
                <div className="row-produto">
                    <div className="produto-col1">
                        <div className="texto-produto">
                            <h2>😋 Venha descobrir o delicioso mundo da Ice Point!</h2>
                            <h1 style={{ fontWeight: 900 }}>Explosão de Sabores te Espera</h1>
                            <p style={{ fontFamily: 'Montserrat', fontWeight: 400, color: '#000000' }}>
                                Experimente cada pedacinho da felicidade: Nossos produtos são feitos com carinho para trazer sorrisos em cada mordida.
                            </p>
                            <Link to="produtos" className="btn-ver-produto">Ver Produtos</Link>
                        </div>
                    </div>
                    <div className="produto-col2">
                        <div className="class-img-produto">
                            <img src={caracter2} className="imagem-produto" id="imagem-produto"/>
                        </div>
                    </div>
                </div>     
            </div>
        </section>
    );
}


export default Produto;

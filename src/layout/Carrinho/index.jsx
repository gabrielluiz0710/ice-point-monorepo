import styles from './carrinho.css';
import carrinho from '../../assets/Imagens/carrinho.png';
import { Link } from 'react-router-dom';


function Carrinho() {
    return (
        <section id="produto" className="section-carrinho">
            <div className="container-carrinho">       
                <div className="row-carrinho">
                    <div className="carrinho-col1">
                        <div className="class-img-carrinho">
                            <img src={carrinho} className="imagem-carrinho" id="imagem-carrinho"/>
                        </div>
                    </div>
                    <div className="carrinho-col2">
                        <div className="texto-carrinho">
                            <h2>🥳 Encomende nosso carrinho de picolés para sua festa!</h2>
                            <h1 style={{ fontWeight: 900 }}>Encomende seu Carrinho!</h1>
                            <p style={{ fontFamily: 'Montserrat', fontWeight: 400, color: '#000000' }}>
                                Escolha seus picolés favoritos e faça sua festa ainda mais especial levando para seus convidados os sabores da Ice Point!
                            </p>
                            <Link to="/carrinho" className="btn-ver-carrinho">Montar Carrinho</Link>
                        </div>
                    </div>
                </div>     
            </div>
        </section>
    );
}


export default Carrinho;

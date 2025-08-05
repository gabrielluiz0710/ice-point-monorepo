import styles from './footer.css';
import logo from '../../assets/Imagens/logo_full.png';


function Footer() {
    return (
        <div>
            <footer>
                <div className="container-footer">
                    <div className="row-footer">
                        <div className="footer-col" style={{ textAlign: "center" }}>
                            <img src={logo} alt="Ice Point Sorveteria" height="200px" width="200px" />
                        </div>
                        <div className="footer-col">
                            <h4>Fale Conosco</h4>
                            <ul>
                                <li>
                                    <a href="tel:+5534999658035" target="_blank">
                                        <i className="fas fa-phone"></i> (34) 99965-8035
                                    </a>
                                </li>
                                <li>
                                    <a href="https://api.whatsapp.com/send?phone=5534999658035" target="_blank">
                                        <i className="fab fa-whatsapp"></i> (34) 99965-8035
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:icepointuberaba@gmail.com">
                                        <i className="far fa-envelope"></i> icepointuberaba@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Redes Sociais</h4>
                            <ul>
                                <li><a href="https://www.facebook.com/IcePointUberaba" target="_blank"><i className="fab fa-facebook"></i> /IcePointUberaba</a></li>
                                <li><a href="https://www.instagram.com/icepointuberaba" target="_blank"><i className="fab fa-instagram"></i> /icepointuberaba</a></li>
                                <li><a href="https://twitter.com/IcePointUberaba" target="_blank"><i className="fab fa-twitter"></i> /IcePointUberaba</a></li>
                                <li><a href="https://www.linkedin.com/company/icepointuberaba" target="_blank"><i className="fab fa-linkedin"></i> /icepointuberaba</a></li>
                                <li><a href="https://api.whatsapp.com/send?phone=5534999658035" target="_blank"><i className="fab fa-whatsapp"></i> (34) 99965-8035</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Conheça a Ice Point</h4>
                            <ul>
                                <li style={{ color: "white", fontSize: "14px" }}>
                                    O lugar onde a diversão e a doçura se encontram. Explore nossa seleção de sobremesas geladas e desfrute de momentos de felicidade pura em cada visita!
                                </li>
                            </ul>
                            <div className="medias-socias">
                                <a href="https://www.facebook.com/IcePointUberaba" target="_blank"> <i className="fab fa-facebook"></i> </a>
                                <a href="https://www.instagram.com/icepointuberaba" target="_blank"> <i className="fab fa-instagram"></i> </a>
                                <a href="https://twitter.com/IcePointUberaba" target="_blank"> <i className="fab fa-twitter"></i> </a>
                                <a href="https://www.linkedin.com/company/icepointuberaba" target="_blank"> <i className="fab fa-linkedin"></i> </a>
                                <a href="https://maps.app.goo.gl/DwiB8HeVorB5jkaC7" target="_blank"> <i className="fas fa-location-dot"></i> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div style={{ backgroundColor: "#198ca0" }}>
                <p style={{ textAlign: "center", fontFamily: "Montserrat", color: "#ffffff", fontWeight: 500, paddingTop: "20px", paddingBottom: "20px", marginLeft: "10px", marginRight: "10px" }}>
                    &copy; Copyright 2024 Ice Point Sorveteria - Todos os direitos reservados.
                </p>
            </div>
        </div>
    );
}

export default Footer;

import './home.css'
import Header from '../../layout/Header'
import Banner from '../../layout/Banner'
import Depoimentos from '../../layout/Depoimento'
import Footer from '../../layout/Footer'
import Produto from '../../layout/Produto'
import Carrinho from '../../layout/Carrinho'
import Historia from '../../layout/Historia'
import Resumo from '../../layout/Resumo'
import Loja from '../../layout/Loja'
import Slider from '../../layout/Cards/Slider'
import { SwiperSlide } from 'swiper/react';
import brigadeiro from '../../assets/Imagens/brigadeiro.png';
import tentacao from '../../assets/Imagens/tentacao.png';
import ituleitecondensado from '../../assets/Imagens/ituleitecondensado.png';
import itumaracuja from '../../assets/Imagens/itumaracuja.png';
import morangoleite from '../../assets/Imagens/morangoleite.png';

function Home() {
  const settings = {
    spaceBetween: 50,
    navigation: false,
    draggable: true,
    loop: true,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      // Quando a largura da tela for <= 420px
      0: {
        slidesPerView: 1,
      },
      // Quando a largura da tela for <= 980px
      720: {
        slidesPerView: 2,
      },
      1128: {
        slidesPerView: 3,
      },
      1441: {
        slidesPerView: 4,
      },
    },
  };

  return (
    <>
      <Header />
      <Banner />
      <div className="card__container">
        <h1>Destaques do momento</h1>
        <h2>Experimente nossos produtos e novidades!</h2>
        <div className="card__content">
          <Slider settings={settings}>
            <SwiperSlide>
              <div className="card__image">
                <img src={brigadeiro} alt="image" className="card__img" />
                <div className="card__shadow"></div>
              </div>
              <div className="card_back">
                <div className="card__data">
                  <h3 className="card__name">Brigadeiro</h3>
                  <p className="card__description">
                    Picolé de chocolate com casquinha de chocolate meio amargo e granulado.
                  </p>
                  <a href="#" className="card__button">Ver Mais</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card__image">
                <img src={tentacao} alt="image" className="card__img" />
                <div className="card__shadow"></div>
              </div>
              <div className="card_back">
                <div className="card__data">
                  <h3 className="card__name">Tentação</h3>
                  <p className="card__description">
                    Picolé de morango ao leite com casquinha de chocolate meio amargo.
                  </p>
                  <a href="#" className="card__button">Ver mais</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card__image">
                <img src={ituleitecondensado} alt="image" className="card__img" />
                <div className="card__shadow"></div>
              </div>
              <div className="card_back">
                <div className="card__data">
                  <h3 className="card__name">Ituzinho de Leite Condensado</h3>
                  <p className="card__description">
                    Picolé de leite condensado com recheio de morango.
                  </p>
                  <a href="#" className="card__button">Ver mais</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card__image">
                <img src={itumaracuja} alt="image" className="card__img" />
                <div className="card__shadow"></div>
              </div>
              <div className="card_back">
                <div className="card__data">
                  <h3 className="card__name">Ituzinho de Maracujá</h3>
                  <p className="card__description" style={{ marginTop: '1.5rem' }}>
                    Picolé de maracujá com recheio de maracujá.
                  </p>
                  <a href="#" className="card__button">Ver mais</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card__image">
                <img src={morangoleite} alt="image" className="card__img" />
                <div className="card__shadow"></div>
              </div>
              <div className="card_back">
                <div className="card__data">
                  <h3 className="card__name">Morango ao Leite</h3>
                  <p className="card__description"  style={{ marginTop: '1rem' }}>
                    Picolé de morango ao leite.
                  </p>
                  <a href="#" className="card__button"  style={{ marginTop: '1rem' }}>Ver mais</a>
                </div>
              </div>
            </SwiperSlide>
          </Slider>
        </div>
      </div>
      <Carrinho />
      <Produto />
      <Historia />
      <Resumo />
      <Loja />
      <Depoimentos />
      <Footer />
    </>
  )
}

export default Home;

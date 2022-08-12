import React from 'react';
import { useDispatch } from 'react-redux';
import { Carousel } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';
import { actions as modalActions } from '../../reducers/modal';
import { actions as cartActions } from '../../reducers/cart';
import { CREDITS_ID_3, CREDITS_ID_5, CREDITS_ID_10 } from '../../constants';

const BannerCredits = () => {
  const dispatch = useDispatch();
  const setCartModalIsOpen = bool => dispatch(modalActions.setCartModalIsOpen(bool));
  const handleBuyCredits = (id, position, list) => {
    setCartModalIsOpen(true);
    dispatch(cartActions.addRequest({ id, position, list }));
  };
  return (
    <ScrollableAnchor id="creditos">
      <section className="banner-creditos">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="banner-creditos__box">
                <div className="banner-creditos__box__text">
                  <h1 className="primary">Compre créditos</h1>
                  <p>
                    Compre com desconto agora, e escolha os cursos quando bem entender.
                    <strong className="primary"> 1 crédito equivale a 1 curso.</strong>
                  </p>
                </div>
                <div className="banner-creditos__box__cards d-none d-md-flex">
                  <div className="banner-creditos__box__cards__item">
                    <div className="banner-creditos__box__cards__item__offer">
                      <div className="banner-creditos__box__cards__item__offer__title">+ Em conta</div>
                      <div className="banner-creditos__box__cards__item__offer__credits">
                        3<span>créditos</span>
                      </div>
                      <div className="banner-creditos__box__cards__item__offer__price">249,00</div>
                    </div>
                    <div>
                      <p>Não expira</p>
                      <p>Cada curso sai por R$83,00</p>
                      <p>Equivale a 3 cursos</p>
                      <button
                        className="btn btn-lg btn-primary"
                        onClick={() => handleBuyCredits(CREDITS_ID_3, 1, 'Tabela de créditos')}
                      >
                        Comprar!
                      </button>
                    </div>
                  </div>
                  <div className="banner-creditos__box__cards__item">
                    <div className="banner-creditos__box__cards__item__offer">
                      <div className="banner-creditos__box__cards__item__offer__title">+ Popular</div>
                      <div className="banner-creditos__box__cards__item__offer__credits">
                        5<span>créditos</span>
                      </div>
                      <div className="banner-creditos__box__cards__item__offer__price">399,00</div>
                    </div>
                    <div>
                      <p>Não expira</p>
                      <p>Cada curso sai por R$79,80</p>
                      <p>Equivale a 5 cursos</p>
                      <button
                        className="btn btn-lg btn-primary"
                        onClick={() => handleBuyCredits(CREDITS_ID_5, 2, 'Tabela de créditos')}
                      >
                        Comprar!
                      </button>
                    </div>
                  </div>
                  <div className="banner-creditos__box__cards__item">
                    <div className="banner-creditos__box__cards__item__offer">
                      <div className="banner-creditos__box__cards__item__offer__title">Melhor custo benefício</div>
                      <div className="banner-creditos__box__cards__item__offer__credits">
                        10<span>créditos</span>
                      </div>
                      <div className="banner-creditos__box__cards__item__offer__price">749,00</div>
                    </div>
                    <div>
                      <p>Não expira</p>
                      <p>Cada curso sai por R$74,90</p>
                      <p>Equivale a 10 cursos</p>
                      <button
                        className="btn btn-lg btn-primary"
                        onClick={() => handleBuyCredits(CREDITS_ID_10, 3, 'Tabela de créditos')}
                      >
                        Comprar!
                      </button>
                    </div>
                  </div>
                </div>
                <Carousel className="d-md-none">
                  <Carousel.Item>
                    <div className="row">
                      <div className="banner-creditos__box__cards__item">
                        <div className="banner-creditos__box__cards__item__offer">
                          <div className="banner-creditos__box__cards__item__offer__title">+ Em conta</div>
                          <div className="banner-creditos__box__cards__item__offer__credits">
                            3<span>créditos</span>
                          </div>
                          <div className="banner-creditos__box__cards__item__offer__price">249,00</div>
                        </div>
                        <div>
                          <p>Não expira</p>
                          <p>Cada curso sai por R$83,00</p>
                          <p>Equivale a 3 cursos</p>
                          <button className="btn btn-lg btn-primary" onClick={() => handleBuyCredits(CREDITS_ID_3)}>
                            Comprar!
                          </button>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="row">
                      <div className="banner-creditos__box__cards__item">
                        <div className="banner-creditos__box__cards__item__offer">
                          <div className="banner-creditos__box__cards__item__offer__title">+ Popular</div>
                          <div className="banner-creditos__box__cards__item__offer__credits">
                            5<span>créditos</span>
                          </div>
                          <div className="banner-creditos__box__cards__item__offer__price">399,00</div>
                        </div>
                        <div>
                          <p>Não expira</p>
                          <p>Cada curso sai por R$79,80</p>
                          <p>Equivale a 5 cursos</p>
                          <button className="btn btn-lg btn-primary" onClick={() => handleBuyCredits(CREDITS_ID_5)}>
                            Comprar!
                          </button>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="row">
                      <div className="banner-creditos__box__cards__item">
                        <div className="banner-creditos__box__cards__item__offer">
                          <div className="banner-creditos__box__cards__item__offer__title">Menor custo beneficio</div>
                          <div className="banner-creditos__box__cards__item__offer__credits">
                            10<span>créditos</span>
                          </div>
                          <div className="banner-creditos__box__cards__item__offer__price">749,00</div>
                        </div>
                        <div>
                          <p>Não expira</p>
                          <p>Cada curso sai por R$74,90</p>
                          <p>Equivale a 10 cursos</p>
                          <button className="btn btn-lg btn-primary" onClick={() => handleBuyCredits(CREDITS_ID_10)}>
                            Comprar!
                          </button>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  );
};

export default BannerCredits;

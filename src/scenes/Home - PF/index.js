import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { parse } from 'query-string';
import ScrollLock from 'react-scrolllock';
import powerFriday from '../../assets/images/power-friday.gif';
import powerFridayMobile from '../../assets/images/power-friday-mobile.gif';

import Plans from '../../components/PfPlans';
import Footer from '../../descola-frontend-components/Footer';
import GreyCard from '../../components/GreyCard';
import ModalPassword from '../../descola-frontend-components/ModalPassword';

import { actions as testimonialsActions } from '../../reducers/testimonials';
import { actions as coursesActions } from '../../reducers/courses';
import { actions as modalActions } from '../../reducers/modal';
import { actions as cartActions } from '../../reducers/cart';
import Head from '../../descola-frontend-components/Head';
import { CREDITS_ID_ALL } from '../../constants';

const Home = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const courses = useSelector(state => state.courses);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [resetPasswordModalIsOpen, setResetPasswordModal] = useState(false);
  const [coursesAllIds, setCoursesAllIds] = useState([]);
  const { token } = parse(location?.search);
  const setCartModalIsOpen = bool => dispatch(modalActions.setCartModalIsOpen(bool));
  const handleBuyCredits = (id, position, list) => {
    setCartModalIsOpen(true);
    dispatch(cartActions.addRequest({ id, position, list }));
  };
  const year = new Date().getFullYear();

  useEffect(() => {
    const onLoadPage = () => {
      dispatch(testimonialsActions.getRequest());
      dispatch(coursesActions.getHomeRequest());
      dispatch(coursesActions.getAllWithFilterRequest({ limit: 10000, sort: 'date', order: 'DESC' }));
      if (token) {
        setResetPasswordModal(true);
      }
    };
    onLoadPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    if (courses.total && coursesAllIds.length === 0) {
      setCoursesAllIds(courses.allIds.filter(i => courses.byId[i].typeName !== 'Bundle'));
    }
  }, [courses, coursesAllIds]);

  const onArrowClick = (direction) => {
    const length = Math.floor(courses.allIds.filter(i => courses.byId[i].typeName !== 'Bundle').length / 4);
    if (
      carouselIndex + direction >= 0 &&
      carouselIndex + direction < length
    ) {
      setCarouselIndex(carouselIndex + direction);
    }
  };

  return (
    <>
      <ScrollLock isActive={resetPasswordModalIsOpen} />
      {resetPasswordModalIsOpen && <ModalPassword token={token} setResetPasswordModal={setResetPasswordModal} />}
      <Head title="Home" />
      <div className="main index pf-friday">
        <section className="pf-banner">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-12 col-md-8 d-flex">
                <img className="pf-img m-auto" src={powerFriday} alt={`Power Friday ${year}`} />
                <img className="pf-img pf-img-mobile m-auto" src={powerFridayMobile} alt={`Power Friday ${year}`} />
              </div>
              <div className="col-8 col-md-4 pf-main-card p-3 p-lg-4 px-lg-5">
                <span>PACOTE</span>
                <h1>TODOS OS CURSOS</h1>
                <p className="pf-main-p">Powerskills para que você possa desenvolver sua carreira. 108 cursos que vão te levar mais longe.</p>
                <p className="pf-main-sub">Desenvolva novas habilidades por apenas:</p>
                <p className="pf-main-price"><span>12x de</span> R$119,00</p>
                <a
                  onClick={() => handleBuyCredits(CREDITS_ID_ALL, 1, `Power Friday ${year} - Tabela de créditos`)}
                  className="btn btn-primary pf-btn"
                  href="/#"
                >
                  COMPRAR!
                </a>
              </div>
            </div>
          </div>
          <div className="pf-break">
            <div className="container pf-break-content">
              <h1>NOSSA POWER FRIDAY NÃO TERMINA POR AQUI</h1>
              <p>Quer investir um pouco menos e ainda aproveitar descontos imperdíveis? Compare as ofertas disponíveis:</p>
            </div>
          </div>
        </section>
        <section className="pf-plans py-4">
          <div className="container">
            <Plans />
            <h1>A EXPERIÊNCIA DESCOLA</h1>
            <div className="pf-greycards row d-flex">
              <GreyCard
                icon="monitor"
                title="Cursos 100% online"
                description="Assista o curso no seu computador, celular ou tablet."
              />
              <GreyCard
                icon="clock"
                title="Acessos para vida toda"
                description="Faça o curso no seu tempo, quantas vezes quiser."
              />
              <GreyCard
                icon="material"
                title="Material complementar"
                description="Ebook e ferramentas para aprofundar, reforçar e dar novos caminhos."
              />
              <GreyCard
                icon="certificate"
                title="Certificado"
                description="Ao completar o curso você tem acesso ao certificado do curso."
              />
            </div>
          </div>
        </section>
        {
          coursesAllIds?.length ? (
            <section className="pf-courses">
              <div className="container">
                <h1>SÃO 108 CURSOS PARA VOCÊ ESCOLHER:</h1>
                <div className="row px-4">
                  <button className="d-block pf-arrow-left" onClick={() => onArrowClick(-1)}><i className="pf-arrow-left-icon" /></button>
                  <Carousel activeIndex={carouselIndex}>
                  {courses.allIds.filter(i => courses.byId[i].typeName !== 'Bundle').map((id, index) => {
                    const course1 = courses.byId[id];
                    const course2 = courses.byId[coursesAllIds[index + 1]];
                    const course3 = courses.byId[coursesAllIds[index + 2]];
                    const course4 = courses.byId[coursesAllIds[index + 3]];
                    if ((index + 1) % 4 === 0) {
                      return (
                        <Carousel.Item key={course1?.id} style={{ height: '50%' }}>
                          <div className="row">
                            <div className="d-flex col-6 col-lg-3">
                              <div className="pf-courses-img">
                                <img src={course1.primaryImage} alt="Thumbnail Curso" />
                              </div>
                            </div>
                            {course2?.id && (
                              <div className="d-flex col-6 col-lg-3">
                                <div className="pf-courses-img">
                                  <img src={course2.primaryImage} alt="Thumbnail Curso" />
                                </div>
                              </div>
                            )}
                            {course3?.id && (
                              <div className="d-flex col-6 col-lg-3 mt-4 mt-lg-0">
                                <div className="pf-courses-img">
                                  <img src={course3.primaryImage} alt="Thumbnail Curso" />
                                </div>
                              </div>
                            )}
                            {course4?.id && (
                              <div className="d-flex col-6 col-lg-3 mt-4 mt-lg-0">
                                <div className="pf-courses-img">
                                  <img src={course4.primaryImage} alt="Thumbnail Curso" />
                                </div>
                              </div>
                            )}
                          </div>
                        </Carousel.Item>
                      );
                    }
                    return null;
                  })}
                </Carousel>
                <button className="d-block pf-arrow-right" onClick={() => onArrowClick(1)}><i className="pf-arrow-right-icon" /></button>
                </div>
                <button href="/#" className="btn btn-large pf-btn pf-btn-blue">COMPRE AGORA!</button>
              </div>
            </section>
          ) : null
        }

        <section className="pf-rules">
          <div className="col-10 col-md-8 container">
            <h1>REGULAMENTO</h1>
            <p>Promoção válida apenas até às 23h59 do dia 30/11/{year}.</p>
            <h2>PACOTE TODOS OS CURSOS</h2>
            <p>
              O Pacote Todos os Cursos da Power Friday {year} contempla todos os cursos que foram lançados e que estão disponíveis no site hoje.
              Cursos lançados posteriormente a esta data não entram no pacote promocional.
            </p>
            <p>
              Independente se o aluno já adquiriu qualquer curso da Descola, o valor negociado de 12 parcelas de R$119,00 não poderá ser alterado.
            </p>
            <p>Parcelamento em 12x apenas no cartão de crédito. O aluno pode adquirir também no boleto, na opção à vista.</p>
            <p>
              Ao adquirir os cursos da Descola, o aluno pode assistir aos cursos quando e quantas vezes quiser, no seu tempo, sem data de validade.
            </p>
            <p>
              O acesso ao curso é pessoal e intransferível. A Descola reserva o direito de
              cancelar a inscrição uma vez que seja identificado o compartilhamento de logins ou uso dos cursos com fins comerciais.
            </p>
            <h2>PACOTES DE CRÉDITOS</h2>
            <p>Os pacotes contemplam o número de créditos que você adquiriu no momento da compra, podendo variar entre 5, 10, 20 ou mais créditos.</p>
            <p>
              1 crédito corresponde a 1 curso de qualquer valor.
              Isso não se aplica às Trilhas, que têm seu valor em créditos calculados com base no número total de cursos incluídos em seu programa.
              Cursos gratuitos não são cobrados na compra de uma Trilha por créditos.
            </p>
            <p>Os créditos adquiridos não possuem período de validade e não é necessário trocar todos os cursos em uma única vez.</p>
            <p>Os créditos só podem ser trocados por cursos.</p>
            <p>Como uma compra normal, as compras por crédito não permitem fazer trocas entre os cursos escolhidos, ou devoluções dos mesmos.</p>
            <p>
              Após adquiridos os créditos, não é possível trocar os seus créditos na função presente.
              As trocas só podem ser feitas para o usuário que adquiriu o pacote.
            </p>
            <h2>CERTIFICADOS DE CONCLUSÃO E MATERIAIS COMPLEMENTARES</h2>
            <p>Certificados de conclusão e materiais complementares (ebooks e ferramentas) em suas versões digitais estão incluídos no pacote.</p>
            <p className="pf-rules-lastp">
              Qualquer outra questão não respondida aqui pode ser feita pelo chat do site ou pelo telefone (11) 3042-0043
            </p>
          </div>
        </section>
      </div>
      <Footer type='public' />
    </>
  );
};

export default Home;

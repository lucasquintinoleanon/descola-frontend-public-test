import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Footer from '../../descola-frontend-components/Footer';
import Head from '../../descola-frontend-components/Head';
import ScrollToTop from '../../descola-frontend-components/ScrollToTop';
import FormCompany from '../../components/FormCompany';
import { BASE_URL_CDN, TYPE_CURTOM_COURSES, TYPE_LMS, TYPE_PLATAFORM_CREDITS } from '../../constants';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Vimeo from '@u-wave/react-vimeo';
import PreviewImage from '../../components/PreviewImage';

const backPersonalizados = `${BASE_URL_CDN}app/assets/images/back-personalizados.png`;
const creditos = `${BASE_URL_CDN}app/assets/images/creditos.png?v2`;
const humaaan = `${BASE_URL_CDN}app/assets/images/humaaan.png`;
const lms = `${BASE_URL_CDN}app/assets/images/lms.png`;
const mockDashboard = `${BASE_URL_CDN}app/assets/images/mock-dashboard2.png`;
const mockLms = `${BASE_URL_CDN}app/assets/images/mock-lms.png`;
const personalizados = `${BASE_URL_CDN}app/assets/images/personalizados.png?v2`;
const relatorio = `${BASE_URL_CDN}app/assets/images/relatorio-min.png`;

// users
// const avatarUser = `${BASE_URL_CDN}app/assets/images/avatar-user.png`;
const luisaSada = `${BASE_URL_CDN}app/assets/images/luisa-sada.jpeg?w=106&h=106, ${BASE_URL_CDN}app/assets/images/luisa-sada.jpeg?w=212&h=212 2x`;
const pamSankhya = `${BASE_URL_CDN}app/assets/images/pam-sankhya.jpeg?w=106&h=106, ${BASE_URL_CDN}app/assets/images/pam-sankhya.jpeg?w=212&h=212 2x`;
const renataBbseg = `${BASE_URL_CDN}app/assets/images/renata-bbseg.jpeg?w=106&h=106, ${BASE_URL_CDN}app/assets/images/renata-bbseg.jpeg?w=212&h=212 2x`;

// logos
const bradesco = `${BASE_URL_CDN}app/assets/images/bradesco2.png?w=133&h=31, ${BASE_URL_CDN}app/assets/images/bradesco2.png?w=266&h=62 2x`;
const comgas = `${BASE_URL_CDN}app/assets/images/comgas.png?w=133&h=33, ${BASE_URL_CDN}app/assets/images/comgas.png?w=266&h=66 2x`;
const digio = `${BASE_URL_CDN}app/assets/images/digio.png?w=133&h=63, ${BASE_URL_CDN}app/assets/images/digio.png?w=266&h=126 2x`;
const grendene = `${BASE_URL_CDN}app/assets/images/grendene.png?w=133&h=18, ${BASE_URL_CDN}app/assets/images/grendene.png?w=266&h=36 2x`;
const grupoMoura = `${BASE_URL_CDN}app/assets/images/grupo-moura.png?w=133&h=35, ${BASE_URL_CDN}app/assets/images/grupo-moura.png?w=266&h=70 2x`;
const heineken = `${BASE_URL_CDN}app/assets/images/heineken.png?w=133&h=19, ${BASE_URL_CDN}app/assets/images/heineken.png?w=266&h=38 2x`;
const honda = `${BASE_URL_CDN}app/assets/images/Honda.png?w=133&h=21, ${BASE_URL_CDN}app/assets/images/Honda.png?w=266&h=42 2x`;
const kroton = `${BASE_URL_CDN}app/assets/images/kroton.png?w=133&h=45, ${BASE_URL_CDN}app/assets/images/kroton.png?w=266&h=90 2x`;
const portoSeguro = `${BASE_URL_CDN}app/assets/images/porto-seguro.png?w=133&h=41, ${BASE_URL_CDN}app/assets/images/porto-seguro.png?w=266&h=82 2x`;
const raizen = `${BASE_URL_CDN}app/assets/images/raizen.png?w=133&h=55, ${BASE_URL_CDN}app/assets/images/raizen.png?w=266&h=110 2x`;
const sankhya = `${BASE_URL_CDN}app/assets/images/sankhya.png?w=133&h=31, ${BASE_URL_CDN}app/assets/images/sankhya.png?w=266&h=62 2x`;
const sulAmerica = `${BASE_URL_CDN}app/assets/images/sul-america.png?w=133&h=34, ${BASE_URL_CDN}app/assets/images/sul-america.png?w=266&h=68 2x`;

const ForCompanies = () => {
  const [modelType, setModelType] = useState(0);
  const [play, setPlay] = useState(false);
  return (
    <>
      <ScrollToTop />

      <Head title="Para empresas" />

      <div className="main">
        <article className="article article--for-companies">
          <div id="home" className={classNames('sections-companies banner banner--grey--dark banner--grey')}>
            <div className="container container-2">
              <div className="row">
                <div className="col-sm-12 col-lg-6">
                  <h1>
                    Criamos experiências de aprendizagem para que o <span class="font-weight-bold">colaborador</span> desenvolva{' '}
                    <span className="secondary font-weight-bold no-wrap">POWER SKILLS</span>
                  </h1>
                  <div className="buttons">
                    <a href="#tarja1">
                      <button className="btn btn-lg btn-secondary">Quero conhecer!</button>
                    </a>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <div className="img aspectRatio--397x223 purple-rectangle">
                    {!play ? (
                      <PreviewImage
                        urls={{
                          large:
                            'https://i.vimeocdn.com/video/1402912425-192f852457150dcd61baa248f6a888d2ab794b62bcf7b625d8aae6b13d2ace50-d?mw=1100&mh=618&q=70',
                          large2x:
                            'https://i.vimeocdn.com/video/1402912425-192f852457150dcd61baa248f6a888d2ab794b62bcf7b625d8aae6b13d2ace50-d?mw=1100&mh=618&q=70',
                          medium:
                            'https://i.vimeocdn.com/video/1402912425-192f852457150dcd61baa248f6a888d2ab794b62bcf7b625d8aae6b13d2ace50-d?mw=700&mh=395&q=70',
                          medium2x:
                            'https://i.vimeocdn.com/video/1402912425-192f852457150dcd61baa248f6a888d2ab794b62bcf7b625d8aae6b13d2ace50-d?mw=700&mh=395&q=70',
                          small:
                            'https://i.vimeocdn.com/video/1402912425-192f852457150dcd61baa248f6a888d2ab794b62bcf7b625d8aae6b13d2ace50-d?mw=400&mh=225&q=70',
                          small2x:
                            'https://i.vimeocdn.com/video/1402912425-192f852457150dcd61baa248f6a888d2ab794b62bcf7b625d8aae6b13d2ace50-d?mw=700&mh=395&q=70'
                        }}
                        setPlay={setPlay}
                        isForCompanies
                      />
                    ) : (
                      <Vimeo video={'https://player.vimeo.com/video/693207981?h=e82e4af275'} autoplay />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="tarja1" class="targe">
            <div className="row purple-targe">
              <div className="container container-2">
                <div className="col-12">
                  <h3 className="text-center">
                    Tecnologia, inovação, criatividade e agilidade para atender as escolas corporativas em 3 diferentes soluções:
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <section className="sections-companies" id="plans">
            <div className="container container-2">
              <div className="row no-mobile">
                <div className="col-12 col-md-4">
                  <div className="cardType">
                    <picture>
                      <source srcSet={lms} media="(min-width: 768px)" />
                      <img
                        srcSet={`${lms}?w=300&h=216, ${lms}?w=600&h=432 2x`}
                        alt="Imagem com filtro roxo de um homem sentado assistindo um curso em vídeo Descola no computador"
                        loading="lazy"
                        width={300}
                        height={216}
                      />
                    </picture>

                    <h1 class="cardType-plan">Plataformas Corporativas (LMS)</h1>

                    <p>Licenciamento dos cursos, em pacote SCORM, para as universidades corporativas.</p>

                    <div className="cardType-button">
                      <a href="#lms">
                        <button className="btn btn-lg btn-outline-secondary" onClick={() => setModelType(TYPE_LMS)}>
                          Saiba mais
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-4">
                  <div className="cardType">
                    <picture>
                      <source srcSet={creditos} media="(min-width: 768px)" />
                      <img
                        srcSet={`${creditos}?w=300&h=204, ${creditos}?w=600&h=408 2x`}
                        alt="Imagem com filtro roxo de um notebook sobre o colo de uma pessoa; na tela é exibido a página de cursos do site da Descola"
                        loading="lazy"
                        width={300}
                        height={204}
                      />
                    </picture>

                    <h1 class="cardType-plan">Créditos plataforma Descola</h1>

                    <p>
                      Para empresas que querem treinar pequenas áreas ou não possuem uma plataforma LMS. Os créditos equivalem a
                      cursos específicos ou à escolha do colaborador.
                    </p>

                    <div className="cardType-button">
                      <a href="#credits">
                        <button className="btn btn-lg btn-outline-secondary" onClick={() => setModelType(TYPE_PLATAFORM_CREDITS)}>
                          Saiba mais
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-4">
                  <div className="cardType">
                    <picture>
                      <source srcSet={personalizados} media="(min-width: 768px)" />
                      <img
                        srcSet={`${personalizados}?w=300&h=210, ${personalizados}?w=600&h=420 2x`}
                        alt="Imagem com filtro roxo de dois homens e uma mulher entre eles, todos apontando e sorrindo para notas adesivas coloridas."
                        loading="lazy"
                        width={300}
                        height={210}
                      />
                    </picture>

                    <h1 class="cardType-plan">Cursos Personalizados</h1>

                    <p>
                      Demandas específicas de clientes que desejam criar conteúdos únicos para a organização a partir da
                      metodologia Descola.
                    </p>

                    <div className="cardType-button">
                      <a href="#customized">
                        <button className="btn btn-lg btn-outline-secondary" onClick={() => setModelType(TYPE_CURTOM_COURSES)}>
                          Saiba mais
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mobile-only">
                <div className="col-12">
                  <Carousel>
                    <Carousel.Item>
                      <div className="col-12">
                        <div className="cardType">
                          <img
                            loading="lazy"
                            srcSet={`${lms}?w=590&h=402, ${lms}?w=1180&h=804 2x`}
                            alt="Imagem com filtro roxo de um homem sentado assistindo um curso em vídeo Descola no computador"
                            width={590}
                            height={402}
                            className="img-fluid"
                          />

                          <h1 class="cardType-plan">Plataformas Corporativas (LMS)</h1>

                          <p>Licenciamento dos cursos, em pacote SCORM, para as universidades corporativas.</p>

                          <div className="cardType-button">
                            <a href="#lms">
                              <button className="btn btn-lg btn-outline-secondary" onClick={() => setModelType(TYPE_LMS)}>
                                Saiba mais
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Carousel.Item>

                    <Carousel.Item>
                      <div className="col-12">
                        <div className="cardType">
                          <img
                            loading="lazy"
                            srcSet={`${creditos}?w=590&h=402, ${creditos}?w=1180&h=804 2x`}
                            alt="Imagem com filtro roxo de um notebook sobre o colo de uma pessoa; na tela é exibido a página de cursos do site da Descola"
                            width={590}
                            height={402}
                            className="img-fluid"
                          />

                          <h1 class="cardType-plan">Créditos plataforma Descola</h1>

                          <p>
                            Para empresas que querem treinar pequenas áreas ou não possuem uma plataforma LMS. Os créditos
                            equivalem a cursos específicos ou à escolha do colaborador.
                          </p>

                          <div className="cardType-button">
                            <a href="#credits">
                              <button
                                className="btn btn-lg btn-outline-secondary"
                                onClick={() => setModelType(TYPE_PLATAFORM_CREDITS)}
                              >
                                Saiba mais
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Carousel.Item>

                    <Carousel.Item>
                      <div className="col-12">
                        <div className="cardType">
                          <img
                            loading="lazy"
                            srcSet={`${personalizados}?w=590&h=402, ${personalizados}?w=1180&h=804 2x`}
                            width={590}
                            height={402}
                            className="img-fluid"
                            alt="Imagem com filtro roxo de dois homens e uma mulher entre eles, todos apontando e sorrindo para notas adesivas coloridas."
                          />

                          <h1 class="cardType-plan">Cursos Personalizados</h1>

                          <p>
                            Demandas específicas de clientes que desejam criar conteúdos únicos para a organização a partir da
                            metodologia Descola.
                          </p>

                          <div className="cardType-button">
                            <a href="#customized">
                              <button
                                className="btn btn-lg btn-outline-secondary"
                                onClick={() => setModelType(TYPE_CURTOM_COURSES)}
                              >
                                Saiba mais
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            </div>
          </section>

          <section className="sections-companies" id="catalog">
            <div className="container">
              <div className="row plan-content">
                <div className="col-sm-12 col-lg-7">
                  <p>
                    Nosso catálogo tem mais de 100 cursos dentro do universo da inovação, que abordam ferramentas, habilidades e
                    comportamentos como Liderança e Gestão, Tomada de decisão, Ferramentas e Frameworks, Pensamento crítico e
                    analítico e comunicação interpessoal.
                  </p>
                  <p>
                    Lançamos em média 3 cursos novos todos os meses, para que seus colaboradores desenvolvam novas competências,
                    liderem iniciativas e pessoas, construam repertório e embasamento para tomadas de decisões.
                  </p>
                  <p class="secondary font-weight-bold">
                    Faça download do nosso relatório de tendências 2022 e conheça um pouco mais sobre o olhar da Descola para a
                    criação de novos conteúdos!
                  </p>
                </div>
                <div className="col-sm-12 col-lg-5 centralize-image relatorio">
                  <img
                    loading="lazy"
                    srcSet={`${relatorio}?w=378&h=397, ${relatorio}?w=756&h=794 2x`}
                    width={378}
                    height={397}
                    className="img-fluid"
                    alt="Imagem com dois livros sobrepostos. A capa é metade vermelha, metade azul respectivamente, tendo sobre elas o título 'Relatório de tendências para o mercado de trabalho' juntamente do número 2022 e do logo da Descola; ao lado, na capa, há um homem com uma lupa em seu olho esquerdo."
                  />
                  <div className="buttons">
                    <a
                      href="https://ebooks.descola.org/ebook-tendencias?source=site-b2b"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="btn btn-lg btn-outline-secondary">Baixar relatório</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="sections-companies" id="lms">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h2 className="secondary text-center">Plataformas Corporativas (LMS)</h2>
                  <p>
                    Escolas, academias e universidades corporativas encontram em nossa rica prateleira diversas alternativas para
                    seus programas de capacitação e desenvolvimento.
                  </p>
                  <p>
                    Todos os cursos da Descola podem ser disponibilizados em plataformas LMS, sem que o colaborador precise sair
                    do ambiente de educação da empresa.
                  </p>
                  <p>
                    Contribuímos com a curadoria de temas, a partir dos desafios de DHO para que os clientes organizem jornadas
                    completas sobre liderança, comunicação, diversidade, transformação digital, colaboração, entre outros.
                  </p>
                  <p className="mobile-only">
                    <span className="secondary">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>{' '}
                    Pacote SCORM 1.2, compatível com todas as plataformas LMS do mercado
                  </p>
                  <p className="mobile-only">
                    <span className="secondary">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>{' '}
                    O formato plug & play dos nossos pacotes permite o início rápido e prático dos treinamentos
                  </p>
                  <p className="mobile-only">
                    <span className="secondary">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>{' '}
                    Design responsivo para qualquer formato (web, mobile e tablet)
                  </p>
                  <p className="mobile-only">
                    <span className="secondary">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>{' '}
                    Experiência de aprendizagem garantida pela Descola
                  </p>
                </div>
              </div>

              <div className="row plan-content">
                <div className="col-sm-6 col-md-5 centralize-image">
                  <img
                    loading="lazy"
                    srcSet={`${mockLms}?w=378&h=223, ${mockLms}?w=756&h=446 2x`}
                    width={378}
                    height={223}
                    className="img-fluid"
                    alt="Imagem com dois livros sobrepostos. A capa é metade vermelha, metade azul respectivamente, tendo sobre elas o título 'Relatório de tendências para o mercado de trabalho' juntamente do número 2022 e do logo da Descola; ao lado, na capa, há um homem com uma lupa em seu olho esquerdo."
                  />
                </div>

                <div className="col-sm-6 offset-md-1 col-md-6 no-mobile">
                  <p>
                    <span className="secondary">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>{' '}
                    Pacote SCORM 1.2, compatível com todas as plataformas LMS do mercado
                  </p>
                  <p>
                    <span className="secondary">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>{' '}
                    O formato plug & play dos nossos pacotes permite o início rápido e prático dos treinamentos
                  </p>
                  <p>
                    <span className="secondary">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>{' '}
                    Design responsivo para qualquer formato (web, mobile e tablet)
                  </p>
                  <p>
                    <span className="secondary">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>{' '}
                    Experiência de aprendizagem garantida pela Descola
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="targe">
            <div className="row purple-targe">
              <div className="container">
                <div className="col-md-8">
                  <h3>Quer bater um papo e receber uma proposta exclusiva para os desafios de capacitação da sua organização?</h3>
                </div>

                <div className="col-md-4 offset-md-1 targe-button">
                  <a href="#form">
                    <button className="btn btn-lg btn-quaternary" onClick={() => setModelType(TYPE_LMS)}>
                      Falar com especialista
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <section className="sections-companies" id="credits">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h2 className="secondary text-center">Créditos plataforma Descola</h2>
                  <p>
                    A plataforma da Descola viabiliza planos de desenvolvimento bastante versáteis, com foco em competências
                    corporativas, individuais e/ou das áreas.
                  </p>
                  <p>
                    O acesso por um domínio exclusivo para a empresa, permite que os colaboradores sejam direcionados a um curso
                    ou jornada específica e até escolham os de seus interesses.
                  </p>
                  <p>
                    <span className="secondary">1 crédito = 1 curso/pessoa</span>
                  </p>
                  <p>
                    Os pacotes corporativos são disponibilizados a partir de 20 créditos e podem ser utilizados por até 12 meses,
                    em todos os nossos cursos.
                  </p>
                  <p>
                    A experiência nos bastidores dos treinamentos também foi desenhada para se tornar imprescindível nos desafios
                    da educação corporativa.
                  </p>
                  <p className="mobile-only">
                    <span className="secondary">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>{' '}
                    Disponibilizamos um ambiente de fácil navegação para que gestores tenham autonomia e agilidade para cadastrar
                    times e colaboradores, distribuir créditos e acompanhar simultaneamente o empenho e evolução nos cursos
                    através do dashboard.
                  </p>
                  <p className="mobile-only">
                    <span className="secondary">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>{' '}
                    Os relatórios oferecem dados estratégicos para a criação de programas cada vez mais assertivos e
                    personalizados.
                  </p>
                </div>
              </div>

              <div className="row plan-content">
                <div className="col-sm-6 col-md-6 no-mobile">
                  <p>
                    <span className="secondary">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>{' '}
                    Disponibilizamos um ambiente de fácil navegação para que gestores tenham autonomia e agilidade para cadastrar
                    times e colaboradores, distribuir créditos e acompanhar simultaneamente o empenho e evolução nos cursos
                    através do dashboard.
                  </p>
                  <p>
                    <span className="secondary">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>{' '}
                    Os relatórios oferecem dados estratégicos para a criação de programas cada vez mais assertivos e
                    personalizados.
                  </p>
                </div>

                <div className="col-sm-6 offset-md-1 col-md-5 centralize-image">
                  <img
                    loading="lazy"
                    srcSet={`${mockDashboard}?w=378&h=303, ${mockDashboard}?w=756&h=606 2x`}
                    width={378}
                    height={303}
                    className="img-fluid"
                    alt="Imagem com dois livros sobrepostos. A capa é metade vermelha, metade azul respectivamente, tendo sobre elas o título 'Relatório de tendências para o mercado de trabalho' juntamente do número 2022 e do logo da Descola; ao lado, na capa, há um homem com uma lupa em seu olho esquerdo."
                  />
                </div>
              </div>
            </div>
          </section>

          <div className="targe">
            <div className="row purple-targe">
              <div className="container">
                <div className="col-md-8">
                  <h3>Quer receber uma proposta ou agendar uma conversa?</h3>
                </div>

                <div className="col-md-4 offset-md-1 targe-button">
                  <a href="#form">
                    <button className="btn btn-lg btn-quaternary" onClick={() => setModelType(TYPE_PLATAFORM_CREDITS)}>
                      Falar com especialista
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <section className="sections-companies" id="customized">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h2 className="secondary text-center">Cursos personalizados (sob demanda)</h2>
                  <p>
                    Produzir conteúdo relevante que desperte interesse e engajamento é uma tarefa complexa, exigindo estratégia,
                    técnica e tempo dos profissionais de treinamento e desenvolvimento.
                  </p>
                  <p>
                    Aqui na Descola, asseguramos que para garantir qualidade de entrega e resultado efetivo nas capacitações não é
                    necessário montar uma estrutura interna de produção, mas ter o parceiro certo, sim!
                  </p>
                  <p className="mobile-only">
                    <span className="secondary">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>{' '}
                    Unimos o expertise do design instrucional com o conhecimento específico para criar experiências de
                    aprendizagem customizadas.
                  </p>
                  <p className="mobile-only">
                    <span className="secondary">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>{' '}
                    Profissionais especializados são alocados para os projetos e conduzem cada uma das etapas da construção do
                    curso personalizado, em total sinergia com o cliente.
                  </p>
                </div>
              </div>

              <div className="row plan-content">
                <div className="col-sm-6 col-md-5 centralize-image">
                  <img
                    loading="lazy"
                    srcSet={`${backPersonalizados}?w=378&h=254, ${backPersonalizados}?w=756&h=508 2x`}
                    width={378}
                    height={254}
                    className="img-fluid"
                    alt="Imagem com dois livros sobrepostos. A capa é metade vermelha, metade azul respectivamente, tendo sobre elas o título 'Relatório de tendências para o mercado de trabalho' juntamente do número 2022 e do logo da Descola; ao lado, na capa, há um homem com uma lupa em seu olho esquerdo."
                  />
                </div>

                <div className="col-sm-6 offset-md-1 col-md-6 no-mobile">
                  <p>
                    <span className="secondary">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>{' '}
                    Unimos o expertise do design instrucional com o conhecimento específico para criar experiências de
                    aprendizagem customizadas.
                  </p>
                  <p>
                    <span className="secondary">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>{' '}
                    Profissionais especializados são alocados para os projetos e conduzem cada uma das etapas da construção do
                    curso personalizado, em total sinergia com o cliente.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="targe">
            <div className="row purple-targe">
              <div className="container">
                <div className="col-md-8">
                  <h3>O processo começa com uma profunda escuta e entendimento dos objetivos. Vamos abrir esta conversa?</h3>
                </div>

                <div className="col-md-4 offset-md-1 targe-button">
                  <a href="#form">
                    <button className="btn btn-lg btn-quaternary" onClick={() => setModelType(TYPE_CURTOM_COURSES)}>
                      Agendar curadoria
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <section className="sections-companies" id="customers">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2 className="text-center">Nossos Clientes</h2>
                  <p>
                    Nos tornamos parceiros estratégicos de nossos clientes, porque entendemos o perfil de cada empresa, com seus
                    desafios de treinamento e desenvolvimento para oferecer os melhores conteúdos, criar jornadas de aprendizado
                    contínuo.
                  </p>
                  <p>Mais de 200 empresas usam nossos cursos em seus programas de capacitação. Veja alguns de nossos clientes:</p>
                </div>
              </div>

              <div className="row carousel-logos no-mobile">
                <div className="col-12">
                  <Carousel>
                    <Carousel.Item>
                      <div className="row">
                        <div className="col-3 col-md-2 text-center">
                          <img loading="lazy" srcSet={bradesco} alt="Bradesco" width={133} height={31} />
                        </div>

                        <div className="col-3 col-md-2 text-center">
                          <img loading="lazy" srcSet={sulAmerica} alt="SulAmérica" width={133} height={34} />
                        </div>

                        <div className="col-3 col-md-2 text-center">
                          <img loading="lazy" srcSet={sankhya} alt="Sankhya" width={133} height={31} />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-3 col-md-2 text-center">
                          <img loading="lazy" srcSet={portoSeguro} alt="Porto Seguro" width={133} height={41} />
                        </div>

                        <div className="col-3 col-md-2 text-center">
                          <img loading="lazy" srcSet={raizen} alt="Raízen" width={133} height={55} />
                        </div>

                        <div className="col-3 col-md-2 text-center">
                          <img loading="lazy" srcSet={honda} alt="Honda" width={133} height={21} />
                        </div>
                      </div>
                    </Carousel.Item>

                    <Carousel.Item>
                      <div className="row">
                        <div className="col-3 col-md-2 text-center">
                          <img loading="lazy" srcSet={heineken} alt="Heineken" width={133} height={19} />
                        </div>

                        <div className="col-3 col-md-2 text-center">
                          <img loading="lazy" srcSet={digio} alt="Digio" width={133} height={63} />
                        </div>

                        <div className="col-3 col-md-2 text-center">
                          <img loading="lazy" srcSet={kroton} alt="Kroton" width={133} height={45} />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-3 col-md-2 text-center">
                          <img loading="lazy" srcSet={grendene} alt="Grendene" width={133} height={18} />
                        </div>

                        <div className="col-3 col-md-2 text-center">
                          <img loading="lazy" srcSet={grupoMoura} alt="Grupo Moura" width={133} height={35} />
                        </div>

                        <div className="col-3 col-md-2 text-center">
                          <img loading="lazy" srcSet={comgas} alt="Comgás" width={133} height={33} />
                        </div>
                      </div>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>

              <div className="row carousel-logos mobile-only">
                <div className="col-12">
                  <Carousel>
                    <Carousel.Item>
                      <div className="row">
                        <div className="col-5 col-md-2 text-center">
                          <img loading="lazy" srcSet={bradesco} alt="Bradesco" width={103} height={24} />
                        </div>

                        <div className="col-5 col-md-2 text-center">
                          <img loading="lazy" srcSet={sulAmerica} alt="SulAmérica" width={103} height={26} />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-5 col-md-2 text-center">
                          <img loading="lazy" srcSet={sankhya} alt="Sankhya" width={103} height={24} />
                        </div>

                        <div className="col-5 col-md-2 text-center">
                          <img loading="lazy" srcSet={portoSeguro} alt="Porto Seguro" width={103} height={32} />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-5 col-md-2 text-center">
                          <img loading="lazy" srcSet={raizen} alt="Raízen" width={103} height={43} />
                        </div>

                        <div className="col-5 col-md-2 text-center">
                          <img loading="lazy" srcSet={honda} alt="Honda" width={103} height={16} />
                        </div>
                      </div>
                    </Carousel.Item>

                    <Carousel.Item>
                      <div className="row">
                        <div className="col-5 col-md-2 text-center">
                          <img loading="lazy" srcSet={heineken} alt="Heineken" width={103} height={15} />
                        </div>

                        <div className="col-5 col-md-2 text-center">
                          <img loading="lazy" srcSet={digio} alt="Digio" width={103} height={49} />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-5 col-md-2 text-center">
                          <img loading="lazy" srcSet={kroton} alt="Kroton" width={103} height={35} />
                        </div>

                        <div className="col-5 col-md-2 text-center">
                          <img loading="lazy" srcSet={grendene} alt="Grendene" width={103} height={14} />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-5 col-md-2 text-center">
                          <img loading="lazy" srcSet={grupoMoura} alt="Grupo Moura" width={103} height={27} />
                        </div>

                        <div className="col-5 col-md-2 text-center">
                          <img loading="lazy" srcSet={comgas} alt="Comgás" width={103} height={25} />
                        </div>
                      </div>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            </div>
          </section>

          <section className="sections-companies" id="testimonial">
            <div className="container container-2">
              <div className="row">
                <div className="col-12">
                  <h2 className="secondary text-center">Depoimentos</h2>
                </div>

                <div className="row no-mobile">
                  <div className="col-12 col-md-4">
                    <div className="cardTestimonial">
                      <div className="userInfo text-center">
                        <img
                          loading="lazy"
                          className="userInfo-image"
                          width={106}
                          height={106}
                          srcSet={luisaSada}
                          alt="Imagem com filtro roxo de um homem sentado assistindo um curso em vídeo Descola no computador"
                        />

                        <div class="userInfo-about">
                          <p className="secondary">Luisa Medioli</p>
                          <p className="secondary">Estratégia e Inovação | Sada</p>
                        </div>
                      </div>

                      <p className="text-center">
                        Em parceria com a Descola nós formamos 20 multiplicadores aqui no Grupo SADA, realizamos uma trilha de
                        cursos onde aprendemos conceitos e ferramentas de inovação e na sequência lançamos desafios corporativos
                        para a disseminação do conteúdo. O programa foi um sucesso, hoje já temos mais de 300 colaboradores
                        impactados.
                      </p>
                    </div>
                  </div>

                  <div className="col-12 col-md-4 ">
                    <div className="cardTestimonial">
                      <div className="userInfo text-center">
                        <img
                          loading="lazy"
                          className="userInfo-image"
                          width={106}
                          height={106}
                          srcSet={pamSankhya}
                          alt="Imagem com filtro roxo de um homem sentado assistindo um curso em vídeo Descola no computador"
                        />

                        <div class="userInfo-about">
                          <p className="secondary">Pamella Flor</p>
                          <p className="secondary">Diretoria de Pessoas e Cultura | Sankhya</p>
                        </div>
                      </div>

                      <p className="text-center">
                        Na Sankhya valorizamos muito o desenvolvimento contínuo de cada profissional e a Descola é uma das
                        principais ações que oferecemos. Identificamos grande potencial na plataforma, pois contam com cursos
                        super didáticos e materiais de apoio, fácil de fazer gestão com relatórios completos sobre a utilização.
                        Temos mais de 3 mil cursos realizados e uma taxa de conclusão de 92%, isso se dá pelos temas atualizados
                        com frequência e acompanhamento próximo para medir a satisfação dos clientes.
                      </p>
                    </div>
                  </div>

                  <div className="col-12 col-md-4">
                    <div className="cardTestimonial">
                      <div className="userInfo text-center">
                        <img
                          loading="lazy"
                          className="userInfo-image"
                          width={106}
                          height={106}
                          srcSet={renataBbseg}
                          alt="Imagem com filtro roxo de um homem sentado assistindo um curso em vídeo Descola no computador"
                        />

                        <div class="userInfo-about">
                          <p className="secondary">Renata Moreira Tridico Silveira</p>
                          <p className="secondary">Gerência de Desenvolvimento e Performance | Brasilseg</p>
                        </div>
                      </div>

                      <p className="text-center">
                        Os cursos da Descola nos apoiam na estratégia de desenvolver pessoas e potencializar o melhor de cada
                        colaborador. Além de didáticos, apresentam conteúdos atuais e necessários para aprimoramento dos soft
                        skills dos times. A Descola está sempre inovando e lançando conteúdos novos, sendo assim um excelente
                        parceiro da nossa empresa.
                      </p>
                    </div>
                  </div>
                </div>

                <Carousel className="mobile-only">
                  <Carousel.Item>
                    <div className="col-12">
                      <div className="cardTestimonial">
                        <div className="userInfo text-center">
                          <img
                            loading="lazy"
                            className="userInfo-image"
                            width={106}
                            height={106}
                            srcSet={luisaSada}
                            alt="Imagem com filtro roxo de um homem sentado assistindo um curso em vídeo Descola no computador"
                          />

                          <div class="userInfo-about">
                            <p className="secondary">Luisa Medioli</p>
                            <p className="secondary">Estratégia e Inovação | Sada</p>
                          </div>
                        </div>

                        <p className="text-center">
                          Em parceria com a Descola nós formamos 20 multiplicadores aqui no Grupo SADA, realizamos uma trilha de
                          cursos onde aprendemos conceitos e ferramentas de inovação e na sequência lançamos desafios corporativos
                          para a disseminação do conteúdo. O programa foi um sucesso, hoje já temos mais de 300 colaboradores
                          impactados.
                        </p>
                      </div>
                    </div>
                  </Carousel.Item>

                  <Carousel.Item>
                    <div className="col-12">
                      <div className="cardTestimonial">
                        <div className="userInfo text-center">
                          <img
                            loading="lazy"
                            className="userInfo-image"
                            width={106}
                            height={106}
                            srcSet={pamSankhya}
                            alt="Imagem com filtro roxo de um homem sentado assistindo um curso em vídeo Descola no computador"
                          />

                          <div class="userInfo-about">
                            <p className="secondary">Pamella Flor</p>
                            <p className="secondary">Diretoria de Pessoas e Cultura | Sankhya</p>
                          </div>
                        </div>

                        <p className="text-center">
                          Na Sankhya valorizamos muito o desenvolvimento contínuo de cada profissional e a Descola é uma das
                          principais ações que oferecemos. Identificamos grande potencial na plataforma, pois contam com cursos
                          super didáticos e materiais de apoio, fácil de fazer gestão com relatórios completos sobre a utilização.
                          Temos mais de 3 mil cursos realizados e uma taxa de conclusão de 92%, isso se dá pelos temas atualizados
                          com frequência e acompanhamento próximo para medir a satisfação dos clientes.
                        </p>
                      </div>
                    </div>
                  </Carousel.Item>

                  <Carousel.Item>
                    <div className="col-12">
                      <div className="cardTestimonial">
                        <div className="userInfo text-center">
                          <img
                            loading="lazy"
                            className="userInfo-image"
                            width={106}
                            height={106}
                            srcSet={renataBbseg}
                            alt="Imagem com filtro roxo de um homem sentado assistindo um curso em vídeo Descola no computador"
                          />

                          <div class="userInfo-about">
                            <p className="secondary">Renata Moreira Tridico Silveira</p>
                            <p className="secondary">Gerência de Desenvolvimento e Performance | Brasilseg</p>
                          </div>
                        </div>

                        <p className="text-center">
                          Os cursos da Descola nos apoiam na estratégia de desenvolver pessoas e potencializar o melhor de cada
                          colaborador. Além de didáticos, apresentam conteúdos atuais e necessários para aprimoramento dos soft
                          skills dos times. A Descola está sempre inovando e lançando conteúdos novos, sendo assim um excelente
                          parceiro da nossa empresa.
                        </p>
                      </div>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </section>

          <section className="sections-companies" id="form">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-12">
                  <h2 className="secondary text-center">Quer fazer parte desta lista? Entre em contato!</h2>
                </div>

                <div className="col-12 col-md-6">
                  <p>
                    Experimente os cursos da Descola para entender porque estamos ajudando grandes empresas na transformação da
                    educação
                  </p>

                  <p>Solicite seu trial e veja:</p>
                  <p>
                    <span className="secondary">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>{' '}
                    Experiência aprendizagem Descola
                  </p>
                  <p>
                    <span className="secondary">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>{' '}
                    Formatação de conteúdo e materiais complementares
                  </p>
                  <p>
                    <span className="secondary">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>{' '}
                    Linguagem e professores
                  </p>
                  <p>
                    <span className="secondary">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>{' '}
                    Temas diversos
                  </p>

                  <img
                    loading="lazy"
                    className="no-mobile"
                    srcSet={`${humaaan}?w=460&h=241, ${humaaan}?w=920&h=482 2x`}
                    alt="Imagem com filtro roxo de um homem sentado assistindo um curso em vídeo Descola no computador"
                    width={460}
                    height={241}
                  />
                </div>

                <div className="col-12 col-md-6 mt-60 text-center">
                  <FormCompany modelType={modelType} setModelType={setModelType} />
                </div>
              </div>
            </div>
          </section>
        </article>
      </div>
      <Footer type='public' />
    </>
  );
};

export default ForCompanies;

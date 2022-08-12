import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { isValid, format } from 'date-fns';
import Footer from '../../descola-frontend-components/Footer';
import CourseCard from '../../descola-frontend-components/CourseCard';
import { actions as coursesActions } from '../../reducers/courses';
import { actions as modalActions } from '../../reducers/modal';
import useCardActions from '../../hooks/useCardActions';
import formatToCurrency from '../../utils/formatToCurrency';
import FavoriteButton from '../../descola-frontend-components/FavoriteButton';
import BuyCourseButton from '../../descola-frontend-components/BuyCourseButton';
import Head from '../../descola-frontend-components/Head';

const Track = ({ id }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const course = useSelector(state => state.courses.byId[id]);
  const cart = useSelector(state => state.cart);
  const { handleWatch } = useCardActions();
  const [YOffset, setYOffset] = useState(window.pageYOffset);
  const {
    title,
    slug,
    subtitle,
    canWatch,
    description = '',
    prices = [],
    related = [],
    item = [],
    properties = [],
    favorite,
    metaDescription,
    metaKeywords,
    secondaryImage,
    preOrder,
    launchDate,
    onSale
  } = course || {};
  const free = prices.price === 0;
  const onCart = cart?.products?.some(product => product.productId === parseInt(id, 10));

  const setCartModalIsOpen = bool => dispatch(modalActions.setCartModalIsOpen(bool));

  useEffect(() => {
    const onLoadPage = () => {
      dispatch(coursesActions.getOneTrackRequest({ id, history }));
    };
    onLoadPage();
  }, [dispatch, history, id]);

  useEffect(() => {
    const listenToScroll = () => setYOffset(window.pageYOffset);
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, [course]);

  return (
    <>
      <Head
        title={`Trilha ${title}`}
        description={metaDescription}
        keywords={metaKeywords}
        image={secondaryImage}
      />
      <div className="main index">
        <section className={classNames('banner banner--grey--dark banner--grey')}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <span className="badge badge-secondary">Trilhas</span>

                {preOrder && <span className="ml-2 badge badge-dark">Pré-venda</span>}
                {onSale && <span className="ml-2 badge badge-info">Promoção</span>}
                {free && <span className="ml-2 badge badge-success">Gratuito</span>}
              </div>
              <div className="col-sm-6 col-md-7 col-lg-9">
                <h1>{title}</h1>
                <p className="sub-title">{subtitle}</p>
                <p>{description}</p>
                <p className="banner--grey__dada">
                  <span>
                    <span className="icon icon-sm icon-camera-w" />
                    {item.length} cursos
                  </span>
                  <span>
                    <span className="icon icon-sm icon-clock-sm-w" />
                    {properties.find(p => p.slug === 'watching-time-course')?.value} de vídeo
                  </span>
                  <span>
                    <span className="icon icon-sm icon-book-w" />
                    {properties.find(p => p.slug === 'reading-time')?.value} de leitura
                  </span>
                </p>
              </div>
              <div className="col-sm-6 col-md-5 col-lg-3">
                <div className="banner--grey__action">
                  <FavoriteButton isFavorite={favorite} id={id} type="secondary" />
                  <div className="banner--grey__action__price">
                    R$ {formatToCurrency(prices?.salePrice || prices?.price)}
                    {prices?.creditsPrice && (
                      <div>
                        ou,
                        <strong className="secondary">
                          {' '}
                          {prices.creditsPrice} crédito{prices.creditsPrice > 1 && 's'}
                        </strong>
                      </div>
                    )}
                  </div>
                  {(canWatch || free) && (
                    <BuyCourseButton preOrder={preOrder} watch large courseId={parseInt(id, 10)} courseSlug={slug} />
                  )}
                  {!canWatch && !free && (
                    <BuyCourseButton
                      large
                      type="secondary"
                      courseId={parseInt(id, 10)}
                      courseSlug={slug}
                      onSale
                      onCart={onCart}
                      list="Página do curso"
                    />
                  )}
                  {preOrder && (
                    <p className="text-sm text-center">
                      Atenção: Este curso está em pré-venda e estará disponível para assistir a partir do dia{' '}
                      {isValid(launchDate * 1000) && format(launchDate * 1000, 'dd/MM/yyyy')}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className={classNames('banner banner--grey--dark banner--grey banner--grey--fixed', {
            'banner--grey--fixed--on': YOffset >= 450
          })}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <span className="badge badge-secondary">Trilhas</span>
              </div>
              <div className="col-sm-6 col-md-7 col-lg-9">
                <h1>{title}</h1>
                <p className="sub-title">{subtitle}</p>
                <p>{description}</p>
                <p className="banner--grey__dada">
                  <span>
                    <span className="icon icon-sm icon-camera-w" />
                    XX cursos
                  </span>
                  <span>
                    <span className="icon icon-sm icon-clock-sm-w" />
                    xx de video
                  </span>
                  <span>
                    <span className="icon icon-sm icon-book-w" />
                    xx de leitura
                  </span>
                </p>
              </div>
              <div className="col-sm-6 col-md-5 col-lg-3">
                <div className="banner--grey__action">
                  <FavoriteButton isFavorite={favorite} id={id} type="secondary" />
                  <div className="banner--grey__action__price">
                    R$ {formatToCurrency(prices?.salePrice || prices?.price)}
                    {prices?.creditsPrice && (
                      <div>
                        ou,
                        <strong className="secondary">
                          {' '}
                          {prices.creditsPrice} crédito{prices.creditsPrice > 1 && 's'}
                        </strong>
                      </div>
                    )}
                  </div>
                  {(canWatch || free) && (
                    <button className="btn btn-lg btn-block btn-success" onClick={() => handleWatch(slug)}>
                      Assistir
                    </button>
                  )}
                  {!canWatch && !free && (
                    <BuyCourseButton
                      large
                      type="secondary"
                      courseId={parseInt(id, 10)}
                      courseSlug={slug}
                      onSale
                      onCart={onCart}
                      list="Página do curso"
                    />
                  )}
                  {preOrder && (
                    <p className="text-sm text-center">
                      Atenção: Este curso está em pré-venda e estará disponível para assistir a partir do dia{' '}
                      {isValid(launchDate * 1000) && format(launchDate * 1000, 'dd/MM/yyyy')}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="trail-steps">
                  {item.map((course, index) => (
                    <div key={course.id} className={classNames('trail-steps__item', { 'active': false })}>
                      <div className="trail-steps__item__number">
                        <span>{index + 1}</span>
                      </div>
                      <div className="trail-steps__item__card">
                        <div className="trail-steps__item__card__l">
                          <img
                            width="100%"
                            height="100%"
                            loading="lazy"
                            className="trail-steps__item__card__l__img"
                            srcSet={`${course.secondaryImage}?w=250&h=250, ${course.secondaryImage}?w=500&h=500 2x`}
                            alt="Thumbnail curso"
                          />
                          <div className="trail-steps__item__card__l__info">
                            <h3 className="secondary">Sobre</h3>
                            <p>
                              <span className="icon icon-sm icon-camera" />
                              20 video aulas (2h 30m)
                            </p>
                            <p>
                              <span className="icon icon-sm icon-book" />
                              Ebook para aprofundamento
                            </p>
                            <p>
                              <span className="icon icon-sm icon-material-sm" />3 ferramentas extras
                            </p>
                            <p>
                              <span className="icon icon-sm icon-certificate-sm" />
                              Certificado digital incluso
                            </p>
                            <p>
                              <span className="icon icon-sm icon-globe" />
                              100% online com acesso ilimitado
                            </p>
                            <h3 className="secondary">Professores</h3>
                            <div className="text-center">
                              <img
                                loading="lazy"
                                src="https://via.placeholder.com/135x135"
                                className="rounded-circle"
                                alt="Professores Nome"
                              />
                              <h3>Nome Sobrenome</h3>
                              <img
                                loading="lazy"
                                src="https://via.placeholder.com/135x135"
                                className="rounded-circle"
                                alt="Professores Nome Sobrenome"
                              />
                              <h3>Nome Sobrenome</h3>
                            </div>
                          </div>
                        </div>
                        <div>
                          <img
                            width="100%"
                            height="100%"
                            loading="lazy"
                            srcSet={`${course.primaryImage}?w=300&h=200, ${course.primaryImage}?w=600&h=400 2x`}
                            alt="Thumbnail curso"
                            className="trail-steps__item__card__img-m"
                          />
                        </div>

                        <div className="trail-steps__item__card__r">
                          <div className="trail-steps__item__card__r__intro">
                            <h1>{course.title}</h1>
                            <p>
                              {course.description}{' '}
                              <strong>
                                <a href={course.slug} rel="noopener noreferrer" target="_blank">
                                  {' '}
                                  Saiba mais
                                </a>
                              </strong>
                            </p>
                          </div>

                          <div className="trail-steps__item__card__r__video" />
                          <div className="trail-steps__item__card__r__content">
                            <h1>CNV: Comunicação Não Violenta</h1>
                            <p>
                              TEXTO ABERTO As falhas de comunicação têm derrubado projetos, negócios e nações ao redor do mundo.
                              Seja na vida pessoal ou no trabalho, se tornou essencial desenvolver uma comunicação interpessoal
                              mais clara, empática e construtiva.{' '}
                            </p>
                            <p>
                              As falhas de comunicação têm derrubado projetos, negócios e nações ao redor do mundo. Seja na vida
                              pessoal ou no trabalho, se tornou essencial desenvolver uma comunicação interpessoal mais clara,
                              empática e construtiva.{' '}
                            </p>
                            <p>
                              As falhas de comunicação têm derrubado projetos, negócios e nações ao redor do mundo. Seja na vida
                              pessoal ou no trabalho, se tornou essencial desenvolver uma comunicação interpessoal mais clara,
                              empática e construtiva.{' '}
                            </p>
                            <p>
                              As falhas de comunicação têm derrubado projetos, negócios e nações ao redor do mundo. Seja na vida
                              pessoal ou no trabalho, se tornou essencial desenvolver uma comunicação interpessoal mais clara,
                              empática e construtiva.{' '}
                            </p>
                            <p>
                              As falhas de comunicação têm derrubado projetos, negócios e nações ao redor do mundo. Seja na vida
                              pessoal ou no trabalho, se tornou essencial desenvolver uma comunicação interpessoal mais clara,
                              empática e construtiva.{' '}
                            </p>
                            <p>
                              As falhas de comunicação têm derrubado projetos, negócios e nações ao redor do mundo. Seja na vida
                              pessoal ou no trabalho, se tornou essencial desenvolver uma comunicação interpessoal mais clara,
                              empática e construtiva.{' '}
                            </p>
                            <p>
                              As falhas de comunicação têm derrubado projetos, negócios e nações ao redor do mundo. Seja na vida
                              pessoal ou no trabalho, se tornou essencial desenvolver uma comunicação interpessoal mais clara,
                              empática e construtiva.{' '}
                            </p>
                            <p>
                              As falhas de comunicação têm derrubado projetos, negócios e nações ao redor do mundo. Seja na vida
                              pessoal ou no trabalho, se tornou essencial desenvolver uma comunicação interpessoal mais clara,
                              empática e construtiva.{' '}
                            </p>
                          </div>
                        </div>
                        {/* <button className="btn btn-arrow-b" /> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {related?.length > 0 && (
          <section>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1 className="border-l secondary">Produtos relacionados</h1>
                </div>
              </div>
              <div className="row">
                {related.map((relatedCourse, index) => (
                  <div key={relatedCourse.id} className="col-12 col-sm-6 col-lg-3">
                    <CourseCard
                      course={relatedCourse}
                      setCartModalIsOpen={setCartModalIsOpen}
                      position={index + 1}
                      list="Produtos Relacionados"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
      <Footer type='public' />
    </>
  );
};

Track.propTypes = {
  id: PropTypes.number.isRequired
};

export default Track;

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { isValid, format } from 'date-fns';
import Footer from '../../descola-frontend-components/Footer';
import BundlePageCard from '../../components/BundlePageCard';
import CourseCard from '../../descola-frontend-components/CourseCard';
import { actions as coursesActions } from '../../reducers/courses';
import { actions as modalActions } from '../../reducers/modal';
import FavoriteButton from '../../descola-frontend-components/FavoriteButton';
import Head from '../../descola-frontend-components/Head';
import formatToCurrency from '../../utils/formatToCurrency';
import BuyCourseButton from '../../descola-frontend-components/BuyCourseButton';
import CourseCardLoader from '../../descola-frontend-components/CourseCard/loader';

const Bundle = ({ id }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isFetching = useSelector(state => state.courses.isFetching);
  const course = useSelector(state => state.courses.byId[id]);
  const {
    title,
    subtitle,
    slug,
    onSale,
    onCart,
    related,
    description,
    longDescription,
    prices,
    favorite,
    metaDescription,
    metaKeywords,
    secondaryImage,
    item = [],
    properties = [],
    preOrder,
    launchDate,
    free
  } = course || {};
  const [YOffset, setYOffset] = useState(window.pageYOffset);

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

  const setCartModalIsOpen = bool => dispatch(modalActions.setCartModalIsOpen(bool));

  return (
    <>
      <Head
        title={`Pacote ${title}`}
        description={metaDescription}
        keywords={metaKeywords}
        image={secondaryImage}
      />
      <div className="main index">
        <section className={classNames('banner banner--grey')}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <span className="badge badge-tertiary">Pacotes</span>
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
                    <span className="icon icon-sm icon-camera" />
                    {item.length} cursos
                  </span>
                  <span>
                    <span className="icon icon-sm icon-clock-sm" />
                    {properties.find(p => p.slug === 'watching-time-course')?.value} de vídeo
                  </span>
                  <span>
                    <span className="icon icon-sm icon-book" />
                    {properties.find(p => p.slug === 'reading-time')?.value} de leitura
                  </span>
                </p>
              </div>
              <div className="col-sm-6 col-md-5 col-lg-3">
                <div className="banner--grey__action">
                  <FavoriteButton isFavorite={favorite} id={id} type="tertiary" />
                  <div className="banner--grey__action__price">
                    R$ {formatToCurrency(prices?.salePrice || prices?.price)}
                    {prices?.creditsPrice > 0 && (
                      <div>
                        ou,
                        <strong className="tertiary">
                          {' '}
                          {prices.creditsPrice} crédito{prices.creditsPrice > 1 && 's'}
                        </strong>
                      </div>
                    )}
                  </div>

                  <BuyCourseButton
                    preOrder={preOrder}
                    large
                    type="tertiary"
                    courseId={parseInt(id, 10)}
                    courseSlug={slug}
                    onSale={onSale}
                    onCart={onCart}
                    list="Página do curso"
                  />
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
        <section className={classNames('banner banner--grey banner--grey--fixed', { 'banner--grey--fixed--on': YOffset > 450 })}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <span className="badge badge-tertiary">Pacotes</span>

                {preOrder && <span className="ml-2 badge badge-tertiary">Pré-venda</span>}
              </div>
              <div className="col-sm-6 col-md-7 col-lg-9">
                <h1>{title}</h1>
                <p className="sub-title">{subtitle}</p>
                <p>{description}</p>
              </div>
              <div className="col-sm-6 col-md-5 col-lg-3">
                <div className="banner--grey__action">
                  <FavoriteButton isFavorite={favorite} id={id} type="tertiary" />
                  <div className="banner--grey__action__price">
                    R$ {formatToCurrency(prices?.salePrice || prices?.price)}
                    {prices?.creditsPrice > 0 && (
                      <div>
                        ou,
                        <strong className="tertiary">
                          {' '}
                          {prices.creditsPrice} crédito{prices.creditsPrice > 1 && 's'}
                        </strong>
                      </div>
                    )}
                  </div>

                  <BuyCourseButton
                    large
                    type="tertiary"
                    courseId={parseInt(id, 10)}
                    courseSlug={slug}
                    onSale={onSale}
                    onCart={onCart}
                    list="Página do curso"
                  />
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
        {longDescription && (
          <section>
            <div className="container">
              <div className="row mb-60">
                <div dangerouslySetInnerHTML={{ __html: longDescription }} />
              </div>
            </div>
          </section>
        )}
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="border-l tertiary">Produtos do Pacote</h1>
              </div>
            </div>
            <div className="row">
              {isFetching
                ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(id => (
                    <div key={id} className="col-12 col-sm-6 col-lg-3">
                      <CourseCardLoader />
                    </div>
                  ))
                : item?.map(courseItem => (
                    <div key={courseItem?.id} className="col-12 col-sm-6 col-lg-3">
                      <BundlePageCard course={courseItem} />
                    </div>
                  ))}

              {/* <div className="col-12 text-center mt-50">
                <button className="btn btn-lg btn-outline-tertiary">Tem mais cursos nesse pacote, veja aqui</button>
              </div> */}
            </div>
          </div>
        </section>
        {related?.length > 0 && (
          <section>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1 className="border-l tertiary">Produtos relacionados</h1>
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

Bundle.propTypes = {
  id: PropTypes.number.isRequired
};

export default Bundle;

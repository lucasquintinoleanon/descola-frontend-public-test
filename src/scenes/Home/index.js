import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { parse } from 'query-string';
import ScrollLock from 'react-scrolllock';
import Footer from '../../descola-frontend-components/Footer';
import Testimonial from '../../components/Testimonial';
import GreyCard from '../../components/GreyCard'
// import GreyCard from '../../components/GreyCard';
import CourseCard from '../../descola-frontend-components/CourseCard';
import TrackCard from '../../descola-frontend-components/TrackCard';
import ModalPassword from '../../descola-frontend-components/ModalPassword';
import BannerCredits from './bannerCredits';
import CourseCardLoader from '../../descola-frontend-components/CourseCard/loader';
import { actions as testimonialsActions } from '../../reducers/testimonials';
import { actions as coursesActions } from '../../reducers/courses';
import { actions as modalActions } from '../../reducers/modal';
import { PAGE_COURSES, BASE_URL_CDN } from '../../constants';
import Head from '../../descola-frontend-components/Head';
import { actions as cartActions } from '../../reducers/cart';

const index = `${BASE_URL_CDN}app/assets/images/index.png`;

const Home = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const { token } = parse(location?.search);
  const testimonials = useSelector(state => state.testimonials);
  const courses = useSelector(state => state.courses);
  const [resetPasswordModalIsOpen, setResetPasswordModal] = useState(false);
  const { home } = courses;
  const setCartModalIsOpen = bool => dispatch(modalActions.setCartModalIsOpen(bool));
  useEffect(() => {
    const onLoadPage = () => {
      dispatch(testimonialsActions.getRequest());
      dispatch(coursesActions.getHomeRequest());
      if (token) {
        setResetPasswordModal(true);
      }
    };
    onLoadPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    const onLoadPage = async () => {
      const { cart } = parse(location.search);
      const queryParams = new URLSearchParams(location.search);

      if (cart) {
        dispatch(cartActions.recoverRequest(cart));
        setCartModalIsOpen(true);
        queryParams.delete('cart');
        history.replace({
          search: queryParams.toString()
        });
      }
    };
    onLoadPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <>
      <ScrollLock isActive={resetPasswordModalIsOpen} />
      {resetPasswordModalIsOpen && <ModalPassword token={token} setResetPasswordModal={setResetPasswordModal} />}
      <Head title="Home" />
      <div className="main index">
        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6 d-flex">
                <div className="m-auto">
                  <h1 className="hero-title ">
                    Aprendizados para toda a vida. Power Skills para o <span className="primary">mundo de hoje.</span>
                  </h1>
                </div>
              </div>
              <div className="col-12 col-sm-6  banner__img">
                <picture>
                  <source srcSet={index} media="(min-width: 768px)" />
                  <img
                    srcSet={`${index}?w=360&h=280, ${index}?w=720&h=560 2x`}
                    alt="Aprendizados para toda a vida. Power Skills para o mundo de hoje."
                    //loading="lazy"
                    width={560}
                    height={409}
                  />
                </picture>
                {/* <img
                  src={index}
                  alt="Aprendizados para toda a vida. Power Skills para o mundo de hoje."
                  width={560}
                  height={409}
                /> */}
              </div>
            </div>
            <div className="row d-none d-md-flex">
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
        </div>
        <section className="cursos-destaque">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="title-bar">
                  <h1 className="border-l primary">Cursos em destaque</h1>
                  <Link to={PAGE_COURSES} className="btn btn-primary">
                    Veja todos os nossos cursos
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              {home.isFetching
                ? [1, 2, 3, 4].map(id => (
                    <div key={id} className="col-12 col-sm-6 col-lg-3">
                      <CourseCardLoader />
                    </div>
                  ))
                : home.highlighted.allIds.slice(0, 4).map((id, index) => {
                    const highlightedCourse = home.highlighted.byId[id];
                    return (
                      <div key={id} className="col-12 col-sm-6 col-lg-3">
                        <CourseCard
                          course={highlightedCourse}
                          setCartModalIsOpen={setCartModalIsOpen}
                          position={index + 1}
                          list="Cursos em destaque"
                        />
                      </div>
                    );
                  })}
            </div>
            <div className="row">
              {Boolean(home.onSale.allIds.length) && (
                <div className="col-12 col-lg-6">
                  <div className="title-bar">
                    <h1 className="border-l primary">Cursos em promoção</h1>
                  </div>
                  <div className="row">
                    {home.isFetching
                      ? [1, 2].map(id => (
                          <div key={id} className="col-12 col-sm-6">
                            <CourseCardLoader />
                          </div>
                        ))
                      : home.onSale.allIds.slice(0, 2).map((id, index) => {
                          const onSaleCourse = home.onSale.byId[id];
                          return (
                            <div key={id} className="col-12 col-sm-6">
                              <CourseCard
                                course={onSaleCourse}
                                setCartModalIsOpen={setCartModalIsOpen}
                                position={index + 5}
                                list="Cursos em promoção"
                              />
                            </div>
                          );
                        })}
                  </div>
                </div>
              )}
              <div className={classNames('col-12', { 'col-lg-6': Boolean(home.onSale.allIds.length) })}>
                <div className="title-bar">
                  <h1 className="border-l primary">Cursos gratuitos</h1>
                </div>
                <div className="row">
                  {home.isFetching
                    ? [1, 2].map(id => (
                        <div
                          key={id}
                          className={classNames('col-12', {
                            'col-lg-6': Boolean(home.onSale.allIds.length),
                            'col-sm-6 col-lg-3': !home.onSale.allIds.length
                          })}
                        >
                          <CourseCardLoader />
                        </div>
                      ))
                    : home.free.allIds.slice(0, 2).map((id, index) => {
                        const freeCourse = home.free.byId[id];
                        return (
                          <div key={id} className="col-12 col-sm-6">
                            <CourseCard
                              course={freeCourse}
                              setCartModalIsOpen={setCartModalIsOpen}
                              position={index + 7}
                              list="Cursos gratuitos"
                            />
                          </div>
                        );
                      })}
                </div>
              </div>
            </div>
          </div>
        </section>
        <BannerCredits />
        <section className="cursos-trilhas">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="title-bar">
                  <h1 className="border-l secondary">Trilhas de cursos</h1>
                  <Link to={`${PAGE_COURSES}?type=trilhas`} className="btn btn-secondary">
                    Veja todas as nossas trilhas
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              {home.isFetching
                ? [1, 2, 3, 4].map(id => (
                    <div key={id} className="col-lg-3 col-sm-6">
                      <CourseCardLoader />
                    </div>
                  ))
                : home.tracks.allIds.slice(0, 4).map((id, index) => {
                    const trackCourse = home.tracks.byId[id];
                    return (
                      <div key={id} className="col-lg-3 col-sm-6">
                        <TrackCard
                          course={trackCourse}
                          setCartModalIsOpen={setCartModalIsOpen}
                          position={index + 9}
                          list="Trilhas de cursos"
                        />
                      </div>
                    );
                  })}
            </div>
          </div>
        </section>
        <section className="mb-60">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="title-bar">
                  <h1 className="border-l primary">Depoimentos</h1>
                </div>
              </div>
            </div>
            <Carousel>
              {testimonials.allIds.map((id, index) => {
                const testimonial1 = testimonials.byId[id];
                const testimonial2 = testimonials.byId[id + 1];
                const testimonial3 = testimonials.byId[id + 2];
                if ((index + 1) % 3 === 0) {
                  return (
                    <Carousel.Item key={testimonial1.id}>
                      <div className="row">
                        <Testimonial name={testimonial1.name} testimonial={testimonial1.text} />
                        {testimonial2.id && <Testimonial name={testimonial2.name} testimonial={testimonial2.text} />}
                        {testimonial3.id && <Testimonial name={testimonial3.name} testimonial={testimonial3.text} />}
                      </div>
                    </Carousel.Item>
                  );
                }
                return null;
              })}
            </Carousel>
          </div>
        </section>
      </div>
      <Footer type='public' />
    </>
  );
};

export default Home;

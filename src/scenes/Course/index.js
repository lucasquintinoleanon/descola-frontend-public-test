import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ScrollLock from 'react-scrolllock';
import classNames from 'classnames';
import { Carousel } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { postLogin } from '../../api/users';
import { format, isValid } from 'date-fns';
import Footer from '../../descola-frontend-components/Footer';
import Modal from '../../components/Modal';
import ModalPreview from '../../components/ModalPreview';
import CourseCard from '../../descola-frontend-components/CourseCard';
import Description from '../../components/CourseDetails/description';
import Testimonials from '../../components/CourseDetails/testimonials';
import Content from '../../components/CourseDetails/content';
import Head from '../../descola-frontend-components/Head';
import VideoPlayer from '../../descola-frontend-components/VideoPlayer';
import PreviewImage from '../../components/PreviewImage';
import { actions as modalActions } from '../../reducers/modal';
import FavoriteButton from '../../descola-frontend-components/FavoriteButton';
import BuyCourseButton from '../../descola-frontend-components/BuyCourseButton';
import formatToCurrency from '../../utils/formatToCurrency';
import { TYPE_EBOOK, DESCRIPTION, CONTENT, TESTIMONIALS, TEACHERS, MORE_INFORMATION, PAGE_COURSES } from '../../constants';

import { getToken } from '../../utils/statePersistence';
import { saveState } from '../../utils/statePersistence';
import snakeToCamel from '../../utils/snakeToCamel';

const Course = ({ product }) => {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const currentUser = useSelector(state => state.user);
  const [play, setPlay] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [preferences, setPreferences] = useState();
  const [selectedAccordion, setSelectedAccordion] = useState(DESCRIPTION);
  const [modalWarningIsOpen, setModalWarningIsOpen] = useState(false);
  const [modalPreviewIsOpen, setModalPreviewIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [modalType, setModalType] = useState('');
  const [YOffset, setYOffset] = useState(window.pageYOffset);
  const setCartModalIsOpen = bool => dispatch(modalActions.setCartModalIsOpen(bool));

  const {
    id,
    title,
    slug,
    subtitle,
    video_preview: videoPreview = '',
    can_watch: canWatch,
    description = '',
    long_description: longDescription = '',
    details = '',
    related = [],
    badges = [],
    categories = [],
    tags = [],
    testimonials = [],
    modules = [],
    teachers = [],
    attachments = [],
    properties = [],
    favorite,
    meta_keywords: metaKeywords,
    meta_description: metaDescription,
    secondary_image: secondaryImage,
    pre_order: preOrder,
    launch_date: launchDate
  } = product || {};
  const { prices } = snakeToCamel(product);

  const onSale = Boolean(prices.salePrice);
  const free = prices.price === 0;
  const onCart = cart?.products?.some(product => product.productId === parseInt(id, 10));
  const attachmentsQuantity = attachments.reduce((prev, curr) => prev + Number(curr.type !== TYPE_EBOOK), 0);

  useEffect(() => {
    if (videoPreview) {
      const small = videoPreview?.previews?.find(item => item.width === 295)?.url;
      const small2x = videoPreview?.previews?.find(item => item.width === 640)?.url;
      const medium = small2x;
      const medium2x = videoPreview?.previews?.find(item => item.width === 1280)?.url;
      const large = videoPreview?.previews?.find(item => item.width === 1920)?.url;
      const large2x = large;
      const imagePreviews = { small, small2x, medium, medium2x, large, large2x };
      if (imagePreviews) setPreviewImage(imagePreviews);
    }
  }, [videoPreview]);

  useEffect(() => {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection || null;
    if (!currentUser?.preferences) {
      setPreferences({
        preferences: {
          0: {
            resolutionVideo: localStorage.getItem('preferences')
              ? localStorage.getItem('preferences')
              : connection
              ? 'high'
              : '540'
          }
        }
      });
    }
  }, [videoPreview, currentUser]);

  useEffect(() => {
    const listenToScroll = () => setYOffset(window.pageYOffset);
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, [product]);

  const handleSelectAccordion = selectedAccordion => {
    setSelectedAccordion(selectedAccordion);
    document.getElementById('accordion-header').scrollIntoView();
  };

  useEffect(() => {
    const token = getToken();
    const getAcessToken = async () => {
      const res = await postLogin({
        'grant_type': 'client_credentials',
        'client_id': 1,
        'client_secret': process.env.REACT_APP_SECRET
      });
      const { accessToken } = snakeToCamel(res?.data);
      saveState(accessToken, 'accessToken');
    };
    if (!token) getAcessToken();
  }, [product]);

  return (
    <>
      <ScrollLock isActive={modalWarningIsOpen} />
      {modalWarningIsOpen && <Modal setModalWarningIsOpen={setModalWarningIsOpen} />}
      {modalPreviewIsOpen && (
        <ModalPreview setModalPreviewIsOpen={setModalPreviewIsOpen} content={modalContent} type={modalType} />
      )}

      <Head
        title={`Curso ${title}`}
        description={metaDescription}
        keywords={metaKeywords}
        image={secondaryImage}
      />
      <div className="main index">
        <section className="banner banner--grey">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <span className="badge badge-primary">Cursos</span>
                {preOrder && <span className="ml-2 badge badge-dark">Pré-venda</span>}
                {onSale && <span className="ml-2 badge badge-info">Promoção</span>}
                {free && <span className="ml-2 badge badge-success">Gratuito</span>}
              </div>
              <div className=" col-sm-7 col-lg-9">
                <h1>{title}</h1>
                <p className="sub-title">{subtitle}</p>
                <p>{description}</p>
              </div>
              <div className="col-sm-5 col-lg-3">
                <div className="banner--grey__action">
                  <FavoriteButton isFavorite={favorite} id={id} />
                  <div className="banner--grey__action__price">
                    {free ? (
                      <>
                        Gratuito
                        <div className="mt-0 text-md">
                          sério <strong>é de graça</strong>
                        </div>
                      </>
                    ) : (
                      <>
                        R$ {formatToCurrency(prices?.salePrice || prices?.price)}
                        {prices?.creditsPrice && (
                          <div>
                            ou,
                            <strong className="primary">
                              {' '}
                              {prices.creditsPrice} crédito{prices.creditsPrice > 1 && 's'}
                            </strong>
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  {(canWatch || free) && (
                    <>
                      <BuyCourseButton preOrder={preOrder} watch large courseId={parseInt(id, 10)} courseSlug={slug} />
                    </>
                  )}
                  {!canWatch && !free && (
                    <BuyCourseButton
                      large
                      type="primary"
                      courseId={parseInt(id, 10)}
                      courseSlug={slug}
                      onSale={onSale}
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
        <section className={classNames('banner banner--grey banner--grey--fixed', { 'banner--grey--fixed--on': YOffset >= 450 })}>
          <div className="container">
            <div className="row">
              <div className="col-sm-7 col-lg-9">
                <h1>{title}</h1>
              </div>
              <div className="col-sm-5 col-lg-3">
                <div className="banner--grey__action">
                  <FavoriteButton isFavorite={favorite} id={id} />
                  <div className="banner--grey__action__price">
                    {free ? (
                      <>
                        Gratuito
                        <div className="mt-0 text-md">
                          sério <strong>é de graça</strong>
                        </div>
                      </>
                    ) : (
                      <>
                        R$ {formatToCurrency(prices?.salePrice || prices?.price)}
                        {prices?.creditsPrice && (
                          <div>
                            ou,
                            <strong className="primary">
                              {' '}
                              {prices.creditsPrice} crédito{prices.creditsPrice > 1 && 's'}
                            </strong>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                  {(canWatch || free) && (
                    <BuyCourseButton preOrder={preOrder} watch large courseId={parseInt(id, 10)} courseSlug={slug} />
                  )}
                  {!canWatch && !free && (
                    <BuyCourseButton
                      large
                      type="primary"
                      courseId={parseInt(id, 10)}
                      courseSlug={slug}
                      onSale={onSale}
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
        <section className="course-descripion">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-lg-9">
                <div className="resp-video">
                  {!play
                    ? previewImage && <PreviewImage urls={previewImage} setPlay={setPlay} />
                    : videoPreview && (
                        <VideoPlayer
                          currentUser={currentUser?.preferences ? currentUser : preferences}
                          files={videoPreview?.files}
                          videoTracks={videoPreview?.tracks}
                          content={videoPreview?.id}
                        />
                      )}
                </div>
                <div className="accordion accordion-tabs" id="accordion-header">
                  <div className="accordion-tabs__header">
                    <button
                      className={classNames('btn btn-link', { collapsed: selectedAccordion !== DESCRIPTION })}
                      onClick={() => handleSelectAccordion(DESCRIPTION)}
                    >
                      O Curso
                    </button>
                    <div className="accordion-tabs__content">
                      {selectedAccordion === DESCRIPTION && <Description description={`${longDescription}${details}`} />}
                    </div>
                    <button
                      className={classNames('btn btn-link', { collapsed: selectedAccordion !== CONTENT })}
                      onClick={() => handleSelectAccordion(CONTENT)}
                    >
                      Conteúdo
                    </button>
                    <div className="accordion-tabs__content">
                      {selectedAccordion === CONTENT && (
                        <Content
                          modules={modules}
                          setModalPreviewIsOpen={setModalPreviewIsOpen}
                          setModalContent={setModalContent}
                          setModalType={setModalType}
                        />
                      )}
                    </div>
                    <button
                      className={classNames('btn btn-link', { collapsed: selectedAccordion !== TESTIMONIALS })}
                      onClick={() => handleSelectAccordion(TESTIMONIALS)}
                    >
                      Depoimentos
                    </button>
                    <div className="accordion-tabs__content">
                      {selectedAccordion === TESTIMONIALS && <Testimonials testimonials={testimonials} />}
                    </div>
                    <button
                      className={classNames('btn btn-link d-md-none', { collapsed: selectedAccordion !== TEACHERS })}
                      onClick={() => handleSelectAccordion(TEACHERS)}
                    >
                      Professores
                    </button>
                    <div className="accordion-tabs__content">
                      {selectedAccordion === TEACHERS && (
                        <div className="collapse show">
                          <div className="">
                            <Carousel>
                              {teachers.map(({ id, name, picture, bio }) => (
                                <Carousel.Item key={id}>
                                  <div className="text-center">
                                    <picture>
                                      <source
                                        srcSet={
                                          picture
                                            ? `${picture}?w=480&h=480, ${picture}?w=960&h=960 2x`
                                            : 'https://via.placeholder.com/135x135'
                                        }
                                        media="(min-width: 768px)"
                                      />
                                      <img
                                        srcSet={
                                          picture
                                            ? `${picture}?w=240&h=240, ${picture}?w=480&h=480 2x`
                                            : 'https://via.placeholder.com/135x135'
                                        }
                                        className="rounded-circle mb-2 img-fluid"
                                        loading="lazy"
                                        width={440}
                                        height={440}
                                        alt="Foto do(a) Professor(a)"
                                      />
                                    </picture>

                                    <h3>{name}</h3>
                                    <p className="text-sm">{bio}</p>
                                  </div>
                                </Carousel.Item>
                              ))}
                            </Carousel>
                          </div>
                        </div>
                      )}
                    </div>
                    <button
                      className={classNames('btn btn-link d-md-none', { collapsed: selectedAccordion !== MORE_INFORMATION })}
                      onClick={() => handleSelectAccordion(MORE_INFORMATION)}
                    >
                      Mais Informações
                    </button>
                    <div className="accordion-tabs__content">
                      {selectedAccordion === MORE_INFORMATION && (
                        <div className="collapse show">
                          <div className="">
                            <h3 className="primary">Sobre</h3>
                            <p>
                              <span className="icon icon-sm icon-camera" />
                              {modules.reduce((prev, cur) => prev + cur.lectures.length, 0)} capítulos
                            </p>
                            <p>
                              <span className="icon icon-sm icon-clock-sm" />
                              {properties.find(p => p.slug === 'watching-time-course')?.value} de vídeo aulas
                            </p>
                            <p>
                              <span className="icon icon-sm icon-book" />
                              {properties.find(p => p.slug === 'reading-time')?.value} de leitura de ebook
                            </p>
                            {/* <p>
                              <span className="icon icon-sm icon-book" />
                              Ebook para aprofundamento
                            </p> */}
                            {attachmentsQuantity > 0 && (
                              <p>
                                <span className="icon icon-sm icon-material-sm" />
                                {attachmentsQuantity} ferramentas extras
                              </p>
                            )}
                            <p>
                              <span className="icon icon-sm icon-certificate-sm" />
                              Certificado digital incluso
                            </p>
                            <p>
                              <span className="icon icon-sm icon-globe" />
                              100% online com acesso ilimitado
                            </p>
                            <h3 className="primary">Categorias</h3>
                            <p>{categories.map(category => category.title).join(', ')}</p>
                            <h3 className="primary">Tags</h3>
                            <p>
                              {tags.map(({ id, title, slug }) => (
                                <Link key={id} to={`${PAGE_COURSES}?tag=${slug}`} className="btn btn-sm btn-primary mr-2 mb-2">
                                  {title}
                                </Link>
                              ))}
                            </p>
                            <h3 className="primary">Badges</h3>
                            {badges.map(({ id, title, icon, description }) => (
                              <React.Fragment key={id}>
                                <h3>{title}</h3>
                                <div className="badges-block">
                                  <div className="badge-icon orange">
                                    <div className="circle">
                                      {' '}
                                      <i className={`fas fa-${icon}`} />
                                    </div>
                                  </div>
                                  <div className="badges-block__text">
                                    <p>{description}</p>
                                  </div>
                                </div>
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="course-description__info col-md-4 col-lg-3 d-none d-md-block">
                <Carousel>
                  {teachers.map(({ id, name, picture, bio }) => (
                    <Carousel.Item key={id}>
                      <div className="text-center">
                        <img
                          loading="lazy"
                          src={picture ?? 'https://via.placeholder.com/135x135'}
                          className="rounded-circle img-fluid"
                          alt="Foto do(a) Professor(a)"
                          width={265}
                          height={265}
                        />
                        <h3>{name}</h3>
                        <p className="text-sm">{bio}</p>
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
                <div />
                <h3 className="primary">Sobre</h3>
                <p>
                  <span className="icon icon-sm icon-camera" />
                  {modules.reduce((prev, cur) => prev + cur.lectures.length, 0)} capítulos
                </p>
                <p>
                  <span className="icon icon-sm icon-clock-sm" />
                  {properties.find(p => p.slug === 'watching-time-course')?.value} de vídeo aulas
                </p>
                <p>
                  <span className="icon icon-sm icon-book" />
                  {properties.find(p => p.slug === 'reading-time')?.value} leitura de ebook
                </p>
                {/* <p>
                  <span className="icon icon-sm icon-book" />
                  Ebook para aprofundamento
                </p> */}
                {attachmentsQuantity > 0 && (
                  <p>
                    <span className="icon icon-sm icon-material-sm" />
                    {attachmentsQuantity} ferramentas extras
                  </p>
                )}
                <p>
                  <span className="icon icon-sm icon-certificate-sm" />
                  Certificado digital incluso
                </p>
                <p>
                  <span className="icon icon-sm icon-globe" />
                  100% online com acesso ilimitado
                </p>
                <h3 className="primary">Categorias</h3>
                <p>{categories.map(category => category.title).join(', ')}</p>
                <h3 className="primary">Tags</h3>
                <p>
                  {tags.map(({ id, title, slug }) => (
                    <Link key={id} to={`${PAGE_COURSES}?tag=${slug}`} className="btn btn-sm btn-primary mr-2 mb-2">
                      {title}
                    </Link>
                  ))}
                </p>
                <h3 className="primary">Badges</h3>
                {badges.map(({ id, title, icon, description }) => (
                  <React.Fragment key={id}>
                    <h3>{title}</h3>
                    <div className="badges-block">
                      <div className="badge-icon orange">
                        <div className="circle">
                          {' '}
                          <i className={`fas fa-${icon}`} />
                        </div>
                      </div>
                      <div className="badges-block__text">
                        <p>{description}</p>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>
        {related?.length > 0 && (
          <section>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1 className="border-l primary">Produtos relacionados</h1>
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

Course.propTypes = {
  id: PropTypes.number.isRequired
};

export default Course;

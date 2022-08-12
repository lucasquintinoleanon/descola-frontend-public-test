import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import queryString from 'query-string';
import { actions as coursesActions } from '../../reducers/courses';
import { actions as abilitiesActions } from '../../reducers/abilities';
import { actions as categoriesActions } from '../../reducers/categories';
import { actions as modalActions } from '../../reducers/modal';

import Footer from '../../descola-frontend-components/Footer';
import CourseCard from '../../descola-frontend-components/CourseCard';
import TrackCard from '../../descola-frontend-components/TrackCard';
import BundleCard from '../../descola-frontend-components/BundleCard';
import Ability from '../../components/Ability';
import Category from '../../components/Category';
import ScrollToTop from '../../descola-frontend-components/ScrollToTop';
import CourseCardLoader from '../../descola-frontend-components/CourseCard/loader';
import Head from '../../descola-frontend-components/Head';
import convertForGTM from '../../utils/convertForGTM';
import Plans from '../../components/PfPlans';

import {
  FILTER_NEWER,
  FILTER_OLDER,
  FILTER_MORE_EXPENSIVE,
  FILTER_CHEAPER,
  FILTER_ALPHABETICAL,
  FILTER_ALPHABETICAL_REVERSE,
  NUMBER_COURSES_VISIBLE,
  TYPE_TRACKS,
  TYPE_COURSES,
  TYPE_BUNDLES,
  BASE_URL_CDN,
  IS_POWER_FRIDAY_ACTIVE
} from '../../constants';

const lupa = `${BASE_URL_CDN}app/assets/images/lupa.svg`;

const Courses = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { category } = useParams();
  const allCourses = useSelector(state => state.courses);
  const allIdsCourses = useSelector(state => state.courses.allIds);
  const abilities = useSelector(state => state.abilities);
  const categories = useSelector(state => state.categories);
  const [search, setSearch] = useState('');
  const [numberVisible, setNumberVisible] = useState(NUMBER_COURSES_VISIBLE);
  const [selectedFilter, setSelectedFilter] = useState(FILTER_NEWER);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [abilitiesState, setAbilitiesState] = useState(abilities);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [orderedCourses, setOrderedCourses] = useState([]);
  const [openFilters, setOpenFilters] = useState(false);
  const [disabledFilter, setDisabledFilter] = useState(true);
  const [searchFilter, setSearchFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState({
    course: false,
    bundle: false,
    track: false
  });
  const [filterQueries, setFilterQueries] = useState({
    type: '',
    category: '',
    tag: '',
    sort: '',
    search: ''
  });
  const [tagsFromUrl, setTagFsromUrl] = useState();

  const setCartModalIsOpen = bool => dispatch(modalActions.setCartModalIsOpen(bool));

  useEffect(() => {
    // get queries from url
    const { type, category, tag, search } = queryString.parse(location.search);
    const arrayType = type?.split(',');
    const arrayTag = tag?.split(',');
    setSearchFilter(search);
    // setting queries values on states
    setSelectedCategory(Number(category));

    setAbilitiesState();

    setTypeFilter({
      course: arrayType?.find(item => item === '3' || item === 'cursos'),
      bundle: arrayType?.find(item => item === '7' || item === 'pacotes'),
      track: arrayType?.find(item => item === '1' || item === 'trilhas')
    });
    setTagFsromUrl(arrayTag);

    // setting queries on filter stater that will be used to pass at request
    setFilterQueries({
      ...filterQueries,
      type: type ? `type=${type}` : '',
      category: category ? `category=${category}` : '',
      tag: tag ? `tag=${tag}` : '',
      search: search ? `search=${search}` : ''
    });

    // in case of apresents query make a request
    location.search &&
      dispatch(
        coursesActions.getWithFilter({
          ...filterQueries,
          type: type ? `type=${type}` : '',
          category: category ? `category=${category}` : '',
          tag: tag ? `tag=${tag}` : '',
          search: search ? `search=${search}` : ''
        })
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  useEffect(() => {
    setDisabledFilter(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterQueries]);

  const setSearchFilterQuery = search => {
    setSearchFilter(search);
    setNumberVisible(NUMBER_COURSES_VISIBLE);
    let searchQuery = `search=${search}`;
    if (searchQuery === 'search=') { searchQuery = ''; }

    setSelectedCategory();
    setAbilitiesState();
    dispatch(abilitiesActions.getRequest(''));
    setTypeFilter({
      course: false,
      bundle: false,
      track: false
    });
    setFilterQueries({ type: '', category: '', tag: '', sort: filterQueries.sort, search: searchQuery });
    dispatch(coursesActions.getWithFilter({ type: '', category: '', tag: '', sort: filterQueries.sort, search: searchQuery }));
  };

  // Function that identify types and construct a query to make a request
  const setTypeFilterQuery = types => {
    setTypeFilter(types);
    setNumberVisible(NUMBER_COURSES_VISIBLE);
    const { course, bundle, track } = types;
    const typeArray = [track && '1', course && '3', bundle && '7'].filter(Boolean);
    let typeQuery = `type=${typeArray.join()}`;
    if (typeQuery === 'type=') { typeQuery = 'type=1,3,7'; }
    setFilterQueries({ ...filterQueries, type: typeQuery });
    dispatch(coursesActions.getWithFilter({ ...filterQueries, type: typeQuery }));
  };

  // Function that identify categories and construct a query to make a request
  const setCategoryFilterQuery = category => {
    setSelectedCategory(category);
    setNumberVisible(NUMBER_COURSES_VISIBLE);
    const categoryQuery = category ? `category=${category}` : '';
    setFilterQueries({ ...filterQueries, category: categoryQuery });
    dispatch(coursesActions.getWithFilter({ ...filterQueries, category: categoryQuery }));
  };

  // Function that identify tags and construct a query to make a request
  const setTagFilterQuery = tags => {
    setAbilitiesState(tags);
    setNumberVisible(NUMBER_COURSES_VISIBLE);
    const tagArray = Object.values(tags?.byId);
    const selectedTags = tagArray.filter(tag => tag.value);
    const selectedTagsIds = selectedTags.map(tag => tag.id);
    const tagQuery = selectedTagsIds.length ? `tag=${selectedTagsIds.join()}` : '';
    setFilterQueries({ ...filterQueries, tag: tagQuery });
    dispatch(coursesActions.getWithFilter({ ...filterQueries, tag: tagQuery }));
  };

  // Function that identify sorts and construct a query to make a request
  const setSortFilterQuery = sort => {
    setSelectedFilter(sort);
    setNumberVisible(NUMBER_COURSES_VISIBLE);
    const sortArray = sort?.split(',');
    const sortQuery = `sort=${sortArray[0]}&order=${sortArray[1]}`;
    setFilterQueries({ ...filterQueries, sort: sortQuery });
    dispatch(coursesActions.getWithFilter({ ...filterQueries, sort: sortQuery }));
  };

  const loadMore = () => {
    setNumberVisible(numberVisible + NUMBER_COURSES_VISIBLE);
    dispatch(coursesActions.getMoreRequest({ quantity: numberVisible, filter: filterQueries }));
  };

  useEffect(() => {
    const onLoadAbilities = () => {
      if (abilitiesState?.allIds.length > 0) {
        setAbilitiesState({
          byId: {
            ...abilities.byId,
            ...abilitiesState?.byId
          },
          allIds: abilities.allIds,
          total: abilities.total,
          isFetching: abilities.isFetching
        });
      } else {
        setAbilitiesState(abilities);
        // in case of exists tags on url
        const array = {};
        if (tagsFromUrl) {
          // eslint-disable-next-line
          tagsFromUrl.map(tag => {
            const ability =
              abilities.byId[Number(tag)] || Object.values(abilities?.byId).find(ability => ability.slug === tag) || {};
            array[ability.id] = { ...ability, value: true };
          });
          setAbilitiesState({
            ...abilities,
            byId: { ...abilities.byId, ...array }
          });
        }
      }
    };
    onLoadAbilities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [abilities, tagsFromUrl, searchFilter]);

  useEffect(() => {
    const onLoadAllCourses = () => {
      if (!allCourses.isFetching) {
        setFilteredCourses(allCourses.allIds);
        setDisabledFilter(false);
      }
    };
    onLoadAllCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allIdsCourses]);

  const orderCourses = () => {
    const arrayAllCourses = filteredCourses.map(id => allCourses.byId[id]);
    switch (selectedFilter) {
      case FILTER_NEWER: {
        const orderedCourses = [...arrayAllCourses].sort((a, b) => b.launchDate - a.launchDate);
        setOrderedCourses(orderedCourses.map(doc => doc.id));
        return;
      }
      case FILTER_OLDER: {
        const orderedCourses = [...arrayAllCourses].sort((a, b) => a.launchDate - b.launchDate);
        setOrderedCourses(orderedCourses.map(doc => doc.id));
        return;
      }
      case FILTER_MORE_EXPENSIVE: {
        const orderedCourses = [...arrayAllCourses].sort(
          (a, b) => (b.prices.salePrice || b.prices.price) - (a.prices.salePrice || a.prices.price)
        );
        setOrderedCourses(orderedCourses.map(doc => doc.id));
        return;
      }
      case FILTER_CHEAPER: {
        const orderedCourses = [...arrayAllCourses].sort(
          (a, b) => (a.prices.salePrice || a.prices.price) - (b.prices.salePrice || b.prices.price)
        );
        setOrderedCourses(orderedCourses.map(doc => doc.id));
        return;
      }
      case FILTER_ALPHABETICAL: {
        const orderedCourses = [...arrayAllCourses].sort((a, b) => a.title.localeCompare(b.title));
        setOrderedCourses(orderedCourses.map(doc => doc.id));
        return;
      }
      default: {
        setOrderedCourses(filteredCourses);
      }
    }
  };

  useEffect(() => {
    const onFilterCourses = () => {
      orderCourses();
    };
    onFilterCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredCourses, selectedFilter]);

  useEffect(() => {
    const onLoadPage = () => {
      !location.search && dispatch(coursesActions.getAllRequest());
      dispatch(abilitiesActions.getRequest(''));
      dispatch(categoriesActions.getRequest());
    };
    onLoadPage();
  }, [category, dispatch, location]);

  useEffect(() => {
    const onUpdateCoursesView = () => {
      if (orderedCourses?.length > 0) {
        const coursesGMT = orderedCourses.slice(0, numberVisible).map(id => ({
          ...allCourses.byId[id]
        }));
        window.dataLayer.push({
          'event': 'productListing',
          'ecommerce': {
            'currencyCode': 'BRL',
            'impressions': [...convertForGTM(coursesGMT, 'Página de cursos', 1)]
          }
        });
      }
    };
    onUpdateCoursesView();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderedCourses, numberVisible]);

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      setSearchFilterQuery(search.toLowerCase());
    }
  };

  function collapseBanner() {
    const banner = document.getElementById('pf-plans');
    const btn = document.getElementById('pf-banner-toggle');

    btn.classList.toggle('pf-chevron-up-icon');
    btn.classList.toggle('pf-chevron-down-icon');
    banner.classList.toggle('d-flex');
    banner.classList.toggle('d-none');
  }
  const tagSearch = queryString.parse(location.search)?.tag;
  const metaTitle = tagSearch ? `Tag: ${tagSearch}` : 'Cursos';
  return (
    <>
      <ScrollToTop />

      <Head title={metaTitle} />
      <div className="main">
        {IS_POWER_FRIDAY_ACTIVE ? (
          <section className="pf-banner pf-banner-courses pf-friday pf-plans py-4 mb-4">
            <div className="container">
              <div className="pf-banner-text">
                <h1>
                  OFERTAS <strong>POWER FRIDAY</strong> { new Date().getFullYear()}
                </h1>
                <p>Confira as condições especiais que preparamos para você:</p>
              </div>
              <Plans />
              <i id="pf-banner-toggle" className="pf-chevron-up-icon" onClick={collapseBanner} />
            </div>
          </section>
        ) : null}

        <section>
          <div className="container">
            <div className="row">
              <div className="col-8 flex-start">
                <h1 className="border-l primary">Nossos Cursos</h1>
              </div>
              {searchFilter && (
                <div className="col-4">
                  <h3 className="text-right ">
                    Você buscou por: <strong>{searchFilter}</strong>{' '}
                    <span onClick={() => setSearchFilterQuery('')} className="clean">
                      X
                    </span>
                  </h3>
                </div>
              )}
            </div>
            <div className="row">
              <div className={classNames('col-md-12 col-lg-3 search-filters', { 'search-filters--open': openFilters })}>
                <div className="search-filters__content">
                  <h2 className="border-l primary">Filtre por tipo</h2>
                  <ul className="checkbox-link checkbox-link-3">
                    <li>
                      <input
                        type="checkbox"
                        name="cursos"
                        id="cursos"
                        disabled={disabledFilter}
                        value={typeFilter.course}
                        checked={typeFilter.course}
                        onChange={() => {
                          setTypeFilterQuery({ ...typeFilter, course: !typeFilter.course });
                        }}
                      />
                      <label className="primary" htmlFor="cursos">
                        <h3>Cursos</h3>
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        name="trilhas"
                        id="trilhas"
                        disabled={disabledFilter}
                        value={typeFilter.track}
                        checked={typeFilter.track}
                        onChange={() => {
                          setTypeFilterQuery({ ...typeFilter, track: !typeFilter.track });
                        }}
                      />
                      <label className="secondary" htmlFor="trilhas">
                        <h3>Trilhas</h3>
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        name="pacotes"
                        id="pacotes"
                        disabled={disabledFilter}
                        value={typeFilter.bundle}
                        checked={typeFilter.bundle}
                        onChange={() => {
                          setTypeFilterQuery({ ...typeFilter, bundle: !typeFilter.bundle });
                        }}
                      />
                      <label className="tertiary" htmlFor="pacotes">
                        <h3>Pacotes</h3>
                      </label>
                    </li>
                  </ul>
                  <h2 className="border-l primary">Filtre por categorias</h2>
                  <ul className="checkbox-link">
                    {categories.allIds.map(id => {
                      const category = categories.byId[id];
                      return category?.visible ? (
                        <Category
                          key={id}
                          disabled={disabledFilter}
                          category={category}
                          value={selectedCategory === id}
                          onHandleCategory={() => setCategoryFilterQuery(selectedCategory === id ? '' : id)}
                        />
                      ) : null;
                    })}
                  </ul>

                  <h2 className="border-l primary">Filtre por tags</h2>
                  <div className="checkbox-tag--group text-xxs">
                    {abilities.allIds.map(id => {
                      const ability = abilitiesState?.byId[id] || {};
                      return ability.id ? (
                        <Ability
                          tagsFromUrl={tagsFromUrl}
                          setTagFsromUrl={setTagFsromUrl}
                          key={id}
                          disabled={disabledFilter}
                          ability={ability}
                          onHandleAbility={() =>
                            setTagFilterQuery({
                              ...abilitiesState,
                              byId: { ...abilitiesState?.byId, [id]: { ...ability, value: !abilitiesState.byId[id].value } }
                            })
                          }
                        />
                      ) : null;
                    })}
                  </div>
                  {abilities.allIds.length < abilities.total && (
                    <button
                      id="abilitiesInput"
                      className="btn btn-plus"
                      onClick={() => dispatch(abilitiesActions.getRequest(abilities.allIds.length))}
                    >
                      Mais tags
                    </button>
                  )}
                  <button className="btn btn-block btn-outline-primary" onClick={() => setOpenFilters(!openFilters)}>
                    Filtrar
                  </button>
                </div>
              </div>
              <div className="col-md-12 col-lg-9">
                <div className="row">
                  <div className="col-sm-7 col-md-6 col-lg-4 search-filters--call">
                    <select
                      id="ordenar"
                      defaultValue={FILTER_NEWER}
                      onChange={e => setSortFilterQuery(e.target.value)}
                      disabled={disabledFilter}
                      className="ord-selector"
                    >
                      <option value="1" disabled>
                        Ordernar por...
                      </option>
                      <option value={FILTER_NEWER}>Mais novo</option>
                      <option value={FILTER_OLDER}>Mais antigo</option>
                      <option value={FILTER_MORE_EXPENSIVE}>Maior preço</option>
                      <option value={FILTER_CHEAPER}>Menor preço</option>
                      <option value={FILTER_ALPHABETICAL}>Alfabética A-Z</option>
                      <option value={FILTER_ALPHABETICAL_REVERSE}>Alfabética Z-A</option>
                    </select>
                    <button className="btn btn-primary" onClick={() => setOpenFilters(!openFilters)}>
                      Filtros
                    </button>
                  </div>
                  <div className="col-sm-5 col-md-6 col-lg-4 offset-lg-4">
                    <div className="search__bar">
                      <input
                        type="text"
                        placeholder="Procure pelo nome"
                        value={search}
                        disabled={disabledFilter}
                        onChange={e => setSearch(e.currentTarget.value)}
                        onKeyPress={handleKeyPress}
                      />
                      <button
                        className="btn btn-icon"
                        onClick={() => setSearchFilterQuery(search.toLowerCase())}
                        disabled={disabledFilter}
                      >
                        <img src={lupa} alt="Pesquisar" width={14} height={17} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="row search__results">
                  {!!allCourses.allIds?.length &&
                    !disabledFilter &&
                    allCourses?.allIds.map((id, index) => {
                      const course = allCourses.byId[id];
                      return (
                        <div key={id} className="col-md-6 col-lg-4">
                          {course.type === TYPE_TRACKS && (
                            <TrackCard
                              course={course}
                              setCartModalIsOpen={setCartModalIsOpen}
                              position={index + 1}
                              list="Página de cursos"
                            />
                          )}
                          {course.type === TYPE_COURSES && (
                            <CourseCard
                              course={course}
                              setCartModalIsOpen={setCartModalIsOpen}
                              position={index + 1}
                              list="Página de cursos"
                            />
                          )}
                          {course.type === TYPE_BUNDLES && (
                            <BundleCard
                              course={course}
                              setCartModalIsOpen={setCartModalIsOpen}
                              position={index + 1}
                              list="Página de cursos"
                            />
                          )}
                        </div>
                      );
                    })}
                  {allCourses.isFetching &&
                    [1, 2, 3, 4, 5, 6, 7, 8, 9].map(id => (
                      <div key={id} className="col-12 col-md-6 col-lg-4">
                        <CourseCardLoader />
                      </div>
                    ))}
                  {!allCourses.total && (
                    <div className="col-12 d-flex justify-content-center align-items-center mt-5">
                      <h2 className="col-8 text-center"> Ops. Não encontramos nenhum curso com os critérios escolhidos :(</h2>
                    </div>
                  )}
                </div>

                <div className="buttons-bar mb-60">
                  <button
                    className="btn btn-lg btn-primary load-more-scroll"
                    onClick={loadMore}
                    disabled={allCourses.total <= allCourses.allIds.length}
                  >
                    Carregar mais
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer type='public' />
    </>
  );
};

export default Courses;

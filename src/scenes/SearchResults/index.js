import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { parse } from 'query-string';
import { actions as coursesActions } from '../../reducers/courses';
import { actions as modalActions } from '../../reducers/modal';

import Footer from '../../descola-frontend-components/Footer';
import { TYPE_TRACKS, TYPE_COURSES, TYPE_EBOOK, TYPE_BUNDLES, PAGE_SEARCH_RESULTS, BASE_URL_CDN } from '../../constants';
import CourseCardLoader from '../../descola-frontend-components/CourseCard/loader';
import OwnedCourseCard from '../../descola-frontend-components/OwnedCourseCard';
import CourseCard from '../../descola-frontend-components/CourseCard';
import TrackCard from '../../descola-frontend-components/TrackCard';
import BundleCard from '../../descola-frontend-components/BundleCard';
import Head from '../../descola-frontend-components/Head';

const lupa = `${BASE_URL_CDN}app/assets/images/lupa.svg`;

const SearchResults = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const { query } = parse(location?.search);
  const allCourses = useSelector(state => state.courses);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [search, setSearch] = useState('');

  const setCartModalIsOpen = bool => dispatch(modalActions.setCartModalIsOpen(bool));

  useEffect(() => {
    const onLoadPage = () => {
      dispatch(coursesActions.searchRequest(query));
    };
    onLoadPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    const onLoadCourses = () => {
      setFilteredCourses(allCourses.allIds);
    };
    onLoadCourses();
  }, [allCourses]);

  const filter = () => {
    const filteredByType = !selectedType
      ? allCourses.allIds
      : allCourses.allIds.filter(id => {
          const course = allCourses.byId[id];
          return course.type === selectedType ? id : null;
        });

    setFilteredCourses(filteredByType);
  };

  useEffect(() => {
    const onSelectType = () => {
      filter();
    };
    onSelectType();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedType]);

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      history.push(`${PAGE_SEARCH_RESULTS}?query=${search}`);
    }
  };

  return (
    <>
      <Head title="Resultado da Pesquisa" />
      <div className="main">
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="border-l primary">Resultado da busca</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-3 search-results__filters">
                <h3>
                  Você buscou por:
                  <br />
                  <strong>{query}</strong>
                </h3>
                <div className="search__bar">
                  <input
                    type="text"
                    placeholder="Procure um curso"
                    maxLength="255"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                  <button className="btn btn-icon" onClick={() => history.push(`${PAGE_SEARCH_RESULTS}?query=${search}`)}>
                    <img src={lupa} alt="Pesquisar" width={14} height={17} />
                  </button>
                </div>
                <ul className="checkbox-link">
                  <li>
                    <input type="radio" name="filter" id="all" checked={!selectedType} onChange={() => setSelectedType('')} />
                    <label htmlFor="all">Todos os resultados</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="filter"
                      id="cursos"
                      checked={selectedType === TYPE_COURSES}
                      onChange={() => setSelectedType(TYPE_COURSES)}
                    />
                    <label htmlFor="cursos">Cursos</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="filter"
                      id="trilhas"
                      checked={selectedType === TYPE_TRACKS}
                      onChange={() => setSelectedType(TYPE_TRACKS)}
                    />
                    <label htmlFor="trilhas">Trilhas</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="filter"
                      id="ebooks"
                      checked={selectedType === TYPE_EBOOK}
                      onChange={() => setSelectedType(TYPE_EBOOK)}
                    />
                    <label htmlFor="ebooks">Ebooks</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="filter"
                      id="kits"
                      checked={selectedType === 22}
                      onChange={() => setSelectedType(22)}
                    />
                    <label htmlFor="kits">Kits</label>
                  </li>
                </ul>
              </div>
              <div className="col-md-12 col-lg-9">
                <div className="row search__results">
                  {allCourses.isFetching
                    ? [1, 2, 3, 4, 5, 6, 7].map(id => (
                        <div key={id} className="col-4">
                          <CourseCardLoader />
                        </div>
                      ))
                    : filteredCourses.map((id, index) => {
                        const course = allCourses.byId[id];
                        const { canWatch, prices, type } = course || {};
                        return canWatch && prices?.price > 0 ? (
                          <div key={id} className="col-md-6 col-lg-4">
                            <OwnedCourseCard course={course} position={index + 1} />
                          </div>
                        ) : (
                          <div key={id} className="col-md-6 col-lg-4">
                            {type === TYPE_TRACKS && (
                              <TrackCard
                                course={course}
                                setCartModalIsOpen={setCartModalIsOpen}
                                position={index + 1}
                                list="Página de resultados"
                              />
                            )}
                            {type === TYPE_COURSES && (
                              <CourseCard
                                course={course}
                                setCartModalIsOpen={setCartModalIsOpen}
                                position={index + 1}
                                list="Página de resultados"
                              />
                            )}
                            {type === TYPE_BUNDLES && (
                              <BundleCard
                                course={course}
                                setCartModalIsOpen={setCartModalIsOpen}
                                position={index + 1}
                                list="Página de resultados"
                              />
                            )}
                          </div>
                        );
                      })}
                  {filteredCourses.length === 0 && (
                    <div className="col-12 text-center">Nenhum resultado encontrado. Tente uma pesquisa diferente.</div>
                  )}
                </div>
                {/* <div className="buttons-bar mb-60">
                  <button
                    className="btn btn-lg btn-primary"
                  >
                    Carregar mais
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer type='public' />
    </>
  );
};

export default SearchResults;

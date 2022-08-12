import React, { Suspense } from 'react';
import { loadProgressBar } from 'axios-progress-bar';
import { Switch, Redirect } from 'react-router-dom';
import urljoin from 'url-join';
import { ToastContainer } from 'react-toastify';
import LoaderRoute from './descola-frontend-components/LoaderRoute';
import Header from './descola-frontend-components/Header';
import CookieBar from './descola-frontend-components/CookieBar';
import api from './api/api';
import {
  PAGE_HOME,
  PAGE_ERROR,
  PAGE_COURSES,
  PAGE_ABOUT,
  PAGE_TERMS_AND_CONDITIONS,
  PAGE_COOKIES_POLICY,
  PAGE_PRIVACY_POLICY,
  PAGE_HELP,
  PAGE_FOR_COMPANIES,
  PAGE_CONTACT,
  PAGE_PRESS_OFFICE,
  PAGE_SOCIAL_RETURN,
  PAGE_SEARCH_RESULTS,
  PAGE_CONTENT_SLUG,
  IS_POWER_FRIDAY_ACTIVE
} from './constants';

import 'react-toastify/dist/ReactToastify.css';

const ErrorPage = React.lazy(() => import('./scenes/Error'));
const SocialReturn = React.lazy(() => import('./scenes/SocialReturn'));
const Courses = React.lazy(() => import('./scenes/Courses'));
const SearchResults = React.lazy(() => import('./scenes/SearchResults'));
const ForCompanies = React.lazy(() => import('./scenes/ForCompanies'));
const About = React.lazy(() => import('./scenes/About'));
const Help = React.lazy(() => import('./scenes/Help'));
const Contact = React.lazy(() => import('./scenes/Contact'));
const PressOffice = React.lazy(() => import('./scenes/PressOffice'));
const TermsAndConditions = React.lazy(() => import('./scenes/TermsAndConditions'));
const CookiesPolicy = React.lazy(() => import('./scenes/CookiesPolicy'));
const PrivacyPolicy = React.lazy(() => import('./scenes/PrivacyPolicy'));
const Slug = React.lazy(() => import('./scenes/Slug'));

loadProgressBar(null, api);

let Home;

if (IS_POWER_FRIDAY_ACTIVE) {
  Home = React.lazy(() => import('./scenes/Home - PF'));
} else {
  Home = React.lazy(() => import('./scenes/Home'));
}

const App = () => (
  <>
    <Header type='public'/>
    <ToastContainer />
    <Suspense fallback={<div></div>}>
      <Switch>
        <LoaderRoute path={`${PAGE_SOCIAL_RETURN}`} component={SocialReturn} />
        <LoaderRoute path={`${PAGE_COURSES}/categories/:category`} component={Courses} />
        <LoaderRoute path={PAGE_COURSES} component={Courses} />
        <LoaderRoute path={PAGE_SEARCH_RESULTS} component={SearchResults} />
        <LoaderRoute path={PAGE_ABOUT} component={About} />
        <LoaderRoute path={PAGE_FOR_COMPANIES} component={ForCompanies} />
        <LoaderRoute path={PAGE_HELP} component={Help} />
        <LoaderRoute path={PAGE_CONTACT} component={Contact} />
        <LoaderRoute path={PAGE_PRESS_OFFICE} component={PressOffice} />
        <LoaderRoute path={PAGE_TERMS_AND_CONDITIONS} component={TermsAndConditions} />
        <LoaderRoute path={PAGE_COOKIES_POLICY} component={CookiesPolicy} />
        <LoaderRoute path={PAGE_PRIVACY_POLICY} component={PrivacyPolicy} />
        <LoaderRoute path={PAGE_ERROR} component={ErrorPage} />
        <LoaderRoute path={PAGE_HOME} exact component={Home} />
        <LoaderRoute path={urljoin(PAGE_CONTENT_SLUG, ':slug')} component={Slug} />
        <Redirect to={PAGE_ERROR} />
      </Switch>
    </Suspense>
    <CookieBar />
  </>
);

export default App;

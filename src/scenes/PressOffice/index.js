import React from 'react';

import Footer from '../../descola-frontend-components/Footer';
import ScrollToTop from '../../descola-frontend-components/ScrollToTop';
import Head from '../../descola-frontend-components/Head';
import ContactForm from '../../components/ContactForm';

const PressOffice = () => (
  <>
    <ScrollToTop />

    <Head title="Impressa" />
    <ContactForm isPressOffice />
    <Footer type='public' />
  </>
);

export default PressOffice;

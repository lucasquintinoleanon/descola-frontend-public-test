import React from 'react';

import Footer from '../../descola-frontend-components/Footer';
import ScrollToTop from '../../descola-frontend-components/ScrollToTop';
import ContactForm from '../../components/ContactForm';
import Head from '../../descola-frontend-components/Head';

const Contact = () => (
  <>
    <ScrollToTop />
    <Head title="Contato" />
    <ContactForm />
    <Footer type='public' />
  </>
);

export default Contact;

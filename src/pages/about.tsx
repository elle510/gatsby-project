import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const AboutPage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>I'm Ahn, a full-stack developer living in beautiful Seoul.</h2>
      <p>
        Need a developer? <a href="/contact">Contact me.</a>
      </p>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  );
};

export default AboutPage;

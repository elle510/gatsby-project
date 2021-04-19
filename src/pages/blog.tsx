import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';

const blogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <h1>Blog</h1>
      <p>Posts will show up here later on.</p>
      <ol>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <li>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default blogPage;
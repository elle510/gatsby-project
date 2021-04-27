import React from 'react';
import { graphql } from 'gatsby';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/layout';
import SEO from '../components/seo';

// TODO: body { json } 이 없음 - 확인필요
export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
      }
    }
  }
`;

const Contentful = (props) => {
  const options = {
    renderNode: {
      'embedded-asset-block': (node) => {
        const alt = node.data.target.fields.title['en-US'];
        const url = node.data.target.fields.file['en-US'].url;
        return <img alt={alt} src={url} />;
      },
    },
  };

  return (
    <Layout>
      <SEO title={props.data.contentfulBlogPost.title} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {/* {documentToReactComponents(props.data.contentfulBlogPost.body.raw, options)} */}
    </Layout>
  );
};

export default Contentful;

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

// TODO: tsx 파일로 하면 Helmet 에러남 @types/react-helmet 설치해야 하는지 확인
// seo.js 파일에 이미 구현 되어 있음. 이것은 그냥 스터디 참고용
const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Helmet title={`${title} | ${data.site.siteMetadata.title}`}>
      <title></title>
    </Helmet>
  );
};

export default Head;

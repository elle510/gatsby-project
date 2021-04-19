/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNode, createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md');
    // console.log(JSON.stringify(node, undefined, 4));
    // console.log('@@@@@@@@@@@@@@@@@', slug);
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

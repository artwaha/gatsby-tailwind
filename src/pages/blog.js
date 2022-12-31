import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const BlogPage = ({ data }) => {
  const nodes = data.allFile.nodes;
  //   console.log(nodes);

  return (
    <Layout pageTitle="My Blog Posts">
      {nodes.map((node) => (
        <li key={node.name}> {node.name} </li>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;

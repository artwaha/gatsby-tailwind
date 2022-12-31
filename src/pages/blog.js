import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const BlogPage = ({ data }) => {
  //   console.log(data);
  const nodes = data.allMdx.nodes;
  //   console.log(nodes);

  return (
    <Layout pageTitle="My Blog Posts">
      {nodes.map((node) => (
        <article key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>Posted: {node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;

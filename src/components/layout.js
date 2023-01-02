import * as React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  // console.log(data);

  return (
    <div className="font-sans max-w-lg m-auto">
      <header className="text-5xl text-gray-500 font-bold my-12 mx-0">
        {data.site.siteMetadata.title}
      </header>
      <nav>
        <ul className="flex list-none pl-0">
          <li className="pr-8">
            <Link to="/" className="text-black">
              Home
            </Link>
          </li>
          <li className="pr-8">
            <Link to="/about" className="text-black">
              About
            </Link>
          </li>
          <li className="pr-8">
            {" "}
            <Link to="/blogs" className="text-black">
              Blogs
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className="text-purple-800">{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;

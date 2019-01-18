import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <div>
          {/*Left Col*/}
          <div className="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6">
            <p className="uppercase tracking-loose">Witty Tagline</p>
            <h1 className="my-4">My Super App</h1>
            <p className="leading-normal mb-4">
              Enter your super app's description here... The key is to find the
              right length. Don't want it to be too long, but then don't want it
              to be too short so that it looks weird between the title and
              button below.
            </p>
            <button className="bg-transparent hover:bg-black text-black hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-black hover:border-transparent">
              Super Button
            </button>
          </div>
          {/*Right Col*/}
          <div className="w-full lg:w-1/2 lg:py-6 text-center">
            {/*Add your product image here*/}
            <svg
              className="fill-current text-black w-3/5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M17 6V5h-2V2H3v14h5v4h3.25H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6zm-5.75 14H3a2 2 0 0 1-2-2V2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5.75zM11 8v8h6V8h-6zm3 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
          </div>
        </div>

        <section className="pb-24 pt-12 md:pt-24">
        <div className="container mx-auto flex justify-start items-start flex-wrap">
          {posts.map(({ node: post }) => (
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <a href="" className="block no-underline bg-white transition shadow-lg hover:shadow hover:-translateY-sm rounded-lg overflow-hidden">
                <div
                  className="w-full"
                  key={post.id}
                >
                  <p>
                    <Link className="has-text-primary" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <small>{post.frontmatter.date}</small>
                  </p>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="button is-small" to={post.fields.slug}>
                      Keep Reading →
                    </Link>
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
        </section>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;

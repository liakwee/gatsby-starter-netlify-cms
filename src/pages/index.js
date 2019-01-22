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
        <div
          className="w-full py-24 px-6 bg-cover bg-no-repeat bg-center relative z-12"
          style={{ backgroundImage: 'url("http://placehold.it/1800x800")' }}
        >
          <div className="container max-w-xl mx-auto text-center">
            <h1 className="text-2xl md:text-4xl text-center text-grey-lightest mb-3 ">
              Lorem ipsum dolor sit amet
            </h1>
            <p className="text-md md:text-lg text-center text-white ">
              Ut enim ad minim veniam, quis nostrud exercitation
            </p>
            <a
              href="/register"
              className="mt-6 inline-block bg-white text-black no-underline px-4 py-3 shadow-lg"
            >
              Find out more
            </a>
          </div>
        </div>

        <section>
          <div className="container mx-auto my-12">
            <h2>Projects</h2>
            <div className="flex justify-start items-start flex-wrap mb-16">
              {posts.map(({ node: post }) => (
                <div
                  key={`${post.fields.slug}-div`}
                  className="h-full w-full md:w-1/3 lg:w-1/4 p-4"
                >
                  <a
                    href={post.fields.slug}
                    className="hover-block block relative w-full h-auto"
                  >
                    <img
                      src={post.frontmatter.cover.childImageSharp.resolutions.src}
                      alt=""
                      className="block pin z-0"
                    />
                    <div
                      className="pointer-events-none w-full absolute pin z-1 p-4"
                      key={post.id}
                    >
                      <h3 className="text-lg text-white text-shadow">
                        {post.frontmatter.title}
                      </h3>
                    </div>
                  </a>
                </div>
              ))}
            </div>
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
      filter: { frontmatter: { templateKey: { eq: "projects-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 100)
          id
          fields {
            slug
          }
          frontmatter {
            title
            tags
            cover {
              childImageSharp {
                resolutions(width: 520) {
                  width
                  height
                  src
                  srcSet
                }
              }
            }
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;

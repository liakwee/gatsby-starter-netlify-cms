import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const ProjectsPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  cover
}) => {
  const PostContent = contentComponent || Content;
  console.log('cover: ', cover);
  return (
    <section className="section">
      {helmet || ''}
      <div
        className="h-64 md:h-half mt-24 md:mt-0 md:mb-12 bg-cover bg-right flex items-center"
        style={{
          backgroundImage: 'url(' + cover.childImageSharp.resolutions.src + ')'
        }}
      />

      <div className="container mx-auto mb-8">
        <div className="w-full -mt-12 xl:-mt-32 px-0">
          <div className="bg-white rounded overflow-hidden shadow mx-1">
            <div className="p-3 sm:p-6 lg:p-8 text-grey-darker leading-normal text-base md:text-xl md:flex items-start py-8 px-6">
              <div className="w-full md:pr-8 mb-8">
                <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                  {title}
                </h1>
                <p>{description}</p>
                <PostContent content={content} />
              </div>
              {tags && tags.length ? (
              <div className="w-full md:w-64">
                <aside className="rounded shadow overflow-hidden mb-6">
                  <h3 className="text-sm bg-grey-lighter text-grey-darker py-3 px-4 border-b">
                    Technologies
                  </h3>
                  <div className="p-4">
                    <ul className="list-reset leading-normal">
                    {tags.map(tag => (
                      <li key={tag + `tag`}>
                        <Link className="text-grey-darkest text-sm" to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </li>
                    ))}
                    </ul>
                  </div>
                </aside>
              </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ProjectsPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const ProjectsPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ProjectsPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        cover={post.frontmatter.cover}
      />
    </Layout>
  );
};

ProjectsPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default ProjectsPost;

export const pageQuery = graphql`
  query ProjectsPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        cover {
          childImageSharp {
            resolutions(width: 1920) {
              width
              height
              src
              srcSet
            }
          }
        }
        tags
      }
    }
  }
`;

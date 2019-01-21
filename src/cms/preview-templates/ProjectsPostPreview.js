import React from 'react'
import PropTypes from 'prop-types'
import { ProjectsPostTemplate } from '../../templates/projects-post'

const ProjectsPostPreview = ({ entry, widgetFor }) => (
  <ProjectsPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
    slider={entry.getIn(['data', 'slider'])}
  />
)

ProjectsPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ProjectsPostPreview

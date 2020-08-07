import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTech } from '../../actions/techActions';

const TechItem = ({ tech, deleteTech }) => {
  return (
    <li className='collection-item'>
      <a href='#edit-tech-modal'>
        <span className='black-text'>{tech.firstName}</span>{' '}
        <span className='black-text'>{tech.lastName}</span>
      </a>
      <a
        href='#!'
        className='secondary-content'
        onClick={() => deleteTech(tech.id)}
      >
        <i className='material-icons grey-text'>delete</i>
      </a>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
};

export default connect(null, { deleteTech })(TechItem);

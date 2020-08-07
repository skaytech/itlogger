import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techActions';
import PropTypes from 'prop-types';
import TechItem from './TechItem';
import Preloader from '../layout/Preloader';

const TechListModal = ({ tech: { techs }, getTechs }) => {
  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, []);

  // if (techs === null) {
  //   return <Preloader />;
  // }

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>List of Technicians</h4>
        <br />
        <ul className='collection with-header'>
          {techs === null || techs.length === 0 ? (
            <h5 style={{ textAlign: 'center' }}>No Technicians...</h5>
          ) : (
            techs.map((tech) => <TechItem key={tech.id} tech={tech} />)
          )}
        </ul>
      </div>

      <div className='modal-footer'>
        <a href='#!' className='modal-close waves-effect waves-light blue btn'>
          Close
        </a>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  getTechs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechListModal);

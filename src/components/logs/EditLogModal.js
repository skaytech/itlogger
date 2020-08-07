import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateLog } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const EditLogModal = ({ current, updateLog }) => {
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState(false);
  const [assigned, setAssigned] = useState('');

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setSeverity(current.severity);
      setAssigned(current.assigned);
    }
  }, [current]);

  const onSubmit = () => {
    if (message === '' || assigned === '') {
      M.toast({ html: 'Please enter a message & tech' });
    } else {
      const uptObj = {
        id: current.id,
        message,
        severity,
        assigned,
        date: new Date(),
      };
      updateLog(uptObj);
      clearFields();
    }
  };

  const clearFields = () => {
    setMessage('');
    setAssigned('');
    setSeverity(false);
  };

  return (
    <div id='edit-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Edit System Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <select
              name='assigned'
              value={assigned}
              className='browser-default'
              onChange={(e) => setAssigned(e.target.value)}
            >
              <option value='' disabled>
                Select Technician
              </option>
              <option value='Sam Smith'>Sam Smith</option>
              <option value='Laura Ponds'>Laura Ponds</option>
              <option value='Peter Jones'>Peter Jones</option>
            </select>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={severity}
                  value={severity}
                  onChange={(e) => setSeverity(!severity)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect waves-light blue btn'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

EditLogModal.propTypes = {
  updateLog: PropTypes.func.isRequired,
};

const modalStyle = {
  width: '75%',
  height: '75%',
};

const mapStateToProps = (state) => ({
  current: state.log.current,
});

export default connect(mapStateToProps, { updateLog })(EditLogModal);

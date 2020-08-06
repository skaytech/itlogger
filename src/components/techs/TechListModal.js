import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TechItem from './TechItem';

const TechListModal = () => {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, []);

  const getTechs = async () => {
    try {
      const res = await axios.get('/techs');
      setTechs(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>List of Technicians</h4>
        <br />
        <ul className='collection with-header'>
          {techs.length === 0 ? (
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

export default TechListModal;

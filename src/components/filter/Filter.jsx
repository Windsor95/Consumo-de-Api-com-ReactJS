import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StyledFilter from './styles';
import ClearFilters from '../../assets/img-clear.svg'

export default function Filter({ setStatus, setSpecies, setGender }) {
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedSpecies, setSelectedSpecies] = useState('');
  const [selectedGender, setSelectedGender] = useState('');

  const statuses = [
    'alive', 
    'dead', 
    'unknown'
  ];

  const species = [
    'human',
    'alien',
    'humanoid',
    'poopybutthole',
    'mythological',
    'animal',
    'disease',
    'robot',
    'cronenberg',
    'planet',
    'unknown',
  ];

  const genders = [
    'male', 
    'female', 
    'genderless'
  ];

  function clearFilters() {
    setStatus('');
    setSpecies('');
    setGender('');

    setSelectedStatus('');
    setSelectedSpecies('');
    setSelectedGender('');
  }

  const handleStatusClick = (status) => {
    setStatus(status);
    setSelectedStatus(status);
  };

  const handleSpeciesClick = (species) => {
    setSpecies(species);
    setSelectedSpecies(species);
  };

  const handleGenderClick = (gender) => {
    setGender(gender);
    setSelectedGender(gender);
  };

  return (
    <StyledFilter>
      <div className="boxClear">
          <h2>Filters</h2>
          <img onClick={clearFilters} src={ClearFilters} alt="" />
      </div>
      <div className="filters">
        <h3>Status</h3>
        <ul className="status">
            {statuses.map((status) => (
              <li
                key={status}
                onClick={() => handleStatusClick(status)}
                className={selectedStatus === status ? 'active' : ''}
              >
                {status}
              </li>
            ))}
        </ul>

        <h3>Species</h3>
        <ul className="species">
            {species.map((specie) => (
              <li
                key={specie}
                onClick={() => handleSpeciesClick(specie)}
                className={selectedSpecies === specie ? 'active' : ''}
              >
                {specie}
              </li>
          ))}
        </ul>

        <h3>Gender</h3>
        <ul className="gender">
            {genders.map((gender) => (
              <li
                key={gender}
                onClick={() => handleGenderClick(gender)}
                className={selectedGender === gender ? 'active' : ''}
              >
                {gender}
              </li>
            ))}
        </ul>
      </div>
    </StyledFilter>
  );
}

Filter.propTypes = {
  setStatus: PropTypes.func.isRequired,
  setSpecies: PropTypes.func.isRequired,
  setGender: PropTypes.func.isRequired,
};

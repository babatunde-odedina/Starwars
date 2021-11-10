import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import Avatar from './image/pic-3.png';

const Peopledetails = () => {
  const { id } = useParams();
  const {
    data: results,
    error,
    isLoading,
  } = useFetch(`https://swapi.dev/api/people/${id}`);

  return (
    <div className='people-details'>
      {isLoading && <div> Loading...</div>}
      {error && <div>{error}</div>}
      {results && (
        <div className='details_info'>
          <img src={Avatar} alt='' />
          <h2> {results.name}</h2>
          <p>
            year of birth:
            <span style={{ fontWeight: 'bolder' }}>{results.birth_year}</span>
          </p>
          <p>
            gender:
            <span style={{ fontWeight: 'bolder' }}> {results.gender}</span>
          </p>
          <div>
            height:
            <span style={{ fontWeight: 'bolder' }}>{results.height}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Peopledetails;

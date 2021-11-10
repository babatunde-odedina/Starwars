import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from './image/pic-3.png';

const Peoplelist = ({ people, title }) => {
  return (
    <div className='people-list'>
      <h2> {title}</h2>
      {people.results.map((person, index) => (
        <div className='info-preview' key={index}>
          <Link to={`/people/${index + 1}`}>
            <div>
              <h2>{person.name}</h2>
              <p>
                gender:
                <span style={{ fontWeight: 'bolder' }}> {person.gender}</span>
              </p>
              <p>
                height:
                <span style={{ fontWeight: 'bolder' }}> {person.height}</span>
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Peoplelist;

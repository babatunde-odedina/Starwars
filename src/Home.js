import React from 'react';
import Peoplelist from './PeopleList';
import useFetch from './useFetch';

const Home = () => {
  const {
    data: people,
    error,
    isLoading,
  } = useFetch('https://swapi.dev/api/people');

  console.log(people);
  return (
    <div className='home'>
      {error && <div> {error} </div>}
      {isLoading && <div>Loading...</div>}
      {people && <Peoplelist people={people} title={'Cast'} />}
    </div>
  );
};

export default Home;

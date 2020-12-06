import React, { useEffect, useState } from "react";
import Key from '../server/APIkey.js';
import Axios from 'axios';

//component imports
import RestaurantListItem from './components/restaurantListItem.jsx';
import RestaurantList from './components/restaurantList.jsx';
import FilterByGenre from './components/filterByGenre.jsx';
import FilterByState from './components/filterByState.jsx';
import SearchField from './components/searchField.jsx';

const App = () => {
const [restaurants, setRestaurants] = useState([]);
const [searchInput, setSearchInput] = useState('');

const handleListItemClick = (item, searchString) => {
  console.log(item)
  const filteredRestaurants = restaurants.filter(row => row[searchString].includes(item))
  setRestaurants(filteredRestaurants)
}

const handleSearchInput = (e) => {
  setSearchInput(e.target.value)
  console.log(e.target.value)
}


//retrieves all restaurants and sorts them alphabetically by name
const retrieveAllRestaurants = () => {
  Axios.get('https://code-challenge.spectrumtoolbox.com/api/restaurants', {
    headers: {
      Authorization: `${Key}`,
    }
  })
  .then(data => {
    data.data.sort(function(a, b){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
  })
    setRestaurants(data.data)
  })
}

  useEffect(() => {
    retrieveAllRestaurants()
  }, [])



  return (
    <div>
      <SearchField inputHandler={handleSearchInput} />
      <button className="reset" onClick={function() { retrieveAllRestaurants() }}>Reset Filters</button>
      <FilterByState list={restaurants} handleListItemClick={handleListItemClick}/>
      <FilterByGenre list={restaurants} handleListItemClick={handleListItemClick}/>
      <RestaurantList list={restaurants}/>
    </div>

  );
}

export default App;
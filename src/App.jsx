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
const [inputText, setInputText] = useState('');

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
//initial render
  useEffect(() => {
    retrieveAllRestaurants()
  }, [])
  //triggers a filter based off of the item that was clicked
  const handleListItemClick = (item, searchString) => {
    console.log(item)
    const filteredRestaurants = restaurants.filter(row => row[searchString].includes(item))
    setRestaurants(filteredRestaurants)
  }
  //updates state based on what is typed in the input field
  const handleSearchInput = (e) => {
    setInputText(e.target.value)
  }
  //submit button handler
  const handleSubmit = () => {
    if (inputText === '') {
      retrieveAllRestaurants();
    } else {
      const filteredRestaurants = restaurants.filter(row => row.name.toLowerCase().includes(inputText.toLowerCase()))
      setRestaurants(filteredRestaurants)
    }
  }

  return (
    <div>
      <h1>Search Our List of Restaurants:</h1>
     <div className="app-bar">
     <SearchField handleSearchInput={handleSearchInput} handleSubmit={handleSubmit}/>
      <button className="reset" onClick={function() { retrieveAllRestaurants() }}>Reset Filters</button>
      <FilterByState list={restaurants} handleListItemClick={handleListItemClick}/>
      <FilterByGenre list={restaurants} handleListItemClick={handleListItemClick}/>
     </div>
      <RestaurantList list={restaurants}/>
    </div>

  );
}

export default App;
import React, { useEffect, useState } from "react";
import Key from '../server/APIkey.js';
import Axios from 'axios';

import RestaurantListItem from './components/restaurantListItem.jsx';
import RestaurantList from './components/restaurantList.jsx';

const App = () => {

const [restaurants, setRestaurants] = useState([]);


  useEffect(() => {
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
      console.log(data.data)
    })
  }, [])



  return (
    <div>
      <RestaurantList list={restaurants}/>
    </div>

  );
}

export default App;
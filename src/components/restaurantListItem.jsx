import React from 'react';
import RestaurantList from './restaurantList.jsx';

const RestaurantListItem = (props) => {
  return (
    <div>
      {props.item.name}
    </div>
  )
}

export default RestaurantListItem;
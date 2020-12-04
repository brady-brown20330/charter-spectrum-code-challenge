import React from 'react';
import RestaurantListItem from './restaurantListItem.jsx';

const RestaurantList = (props) => {
  return (
    <div>
    {props.list.map((item, key) => (
    <RestaurantListItem item={item}/>
  ))}
    </div>
  )
}

export default RestaurantList;
import React from 'react';
import RestaurantListItem from './restaurantListItem.jsx';

const RestaurantList = (props) => {
  return (
    <table>
      <thead>
        <tr>
        <th>Name</th>
        <th>City</th>
        <th>State</th>
        <th>Phone</th>
        <th>Genre</th>
        </tr>
      </thead>
    <tbody>
    {props.list.map((item, key) => (
    <RestaurantListItem item={item} key={key}/>

  ))}
    </tbody>
    </table>
  )
}

export default RestaurantList;
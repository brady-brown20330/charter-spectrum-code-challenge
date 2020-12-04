import React from 'react';
import RestaurantList from './restaurantList.jsx';

const RestaurantListItem = (props) => {
  return (
      <tr key={props.key}>
        <td>{props.item.name}</td>
        <td>{props.item.city}</td>
        <td>{props.item.telephone}</td>
        <td>{props.item.genre}</td>
      </tr>
  )
}

export default RestaurantListItem;
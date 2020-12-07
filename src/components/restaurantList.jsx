import React, { useEffect, useState } from "react";
import RestaurantListItem from './restaurantListItem.jsx';

const RestaurantList = (props) => {
const [pageRange, setPageRange] = useState([0, 10])

  return (
    <div>
      <button onClick={function () { setPageRange([0, 10]) }}>Previous</button>
      <button onClick={function () { setPageRange([10, 20]) }}>Next</button>
        <table className="content-table">
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
        {props.list.slice(pageRange[0], pageRange[1]).map((item, key) => (
        <RestaurantListItem item={item} key={key}/>
      ))}
        </tbody>
        </table>
    </div>
      )
}


export default RestaurantList;
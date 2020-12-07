import React, { useEffect, useState } from "react";
import RestaurantListItem from './restaurantListItem.jsx';

const RestaurantList = (props) => {

const [pageRange, setPageRange] = useState([0, 10])

const handleNext = () => {
  let start = pageRange[0];
  let end = pageRange[1];
  if (end >= props.list.length) {
    alert('End of Collection')
    return;
  }
  setPageRange([start+=10, end+=10])
  console.log(pageRange)
}

const handlePrevious = () => {
  let start = pageRange[0];
  let end = pageRange[1];
  if (start === 0) {
    alert('Beginning of collection')
    return;
  }
  setPageRange([start-=10, end-=10])
  console.log(pageRange)
  }

  return (
    <div>
      <button onClick={function () { handlePrevious() }}>Previous</button>
      <button onClick={function () { handleNext() }}>Next</button>
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
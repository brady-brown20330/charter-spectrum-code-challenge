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
    <div className="center">
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
        {props.list.length > 0 ? props.list.slice(pageRange[0], pageRange[1]).map((item, key) => (
        <RestaurantListItem item={item} key={key}/>
      )) : <h2 style={{textAlign: "center"}}>Looks like we couldnt find any matches. Try resetting filters and try again</h2>}
        </tbody>
        </table>
        <div className="footer">
        <button className="page" onClick={function () { handlePrevious() }}>Previous</button>
      <button className="page" onClick={function () { handleNext() }}>Next</button>
        </div>
    </div>
      )

}


export default RestaurantList;
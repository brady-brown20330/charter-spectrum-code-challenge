import React, { useEffect, useState } from "react";

let FilterByState = (props) => {
const [open, setOpen] = useState(false)
let states = [];
const handleClick = () => {
  if (open === false) {
    setOpen(true)
  } else {
    setOpen(false)
  }
}

const getAllStates = () => {
  for (var i = 0; i < props.list.length; i++) {
    console.log('an entry: ', props.list[i].state)
    if (states.indexOf(props.list[i].state) === -1) {
      states.push(props.list[i].state)
    }
  }
}
getAllStates()

  if (open === false) {
    return (
      <div className="container">
      <button type="button" className="button" onClick={function () { handleClick() }}>
        Filter by State:
      </button>
      </div>
    )
  } else {
    return (
      <div className="container">
      <button type="button" className="button" onClick={function () { handleClick() }}>
        Filter by State:
      </button>
      <div className="dropdown">
        <ul>
          {states.map((item) => (
            <li onClick={function() { props.handleListItemClick(item, "state") }}>{item}</li>
          ))}
        </ul>
      </div>
    </div>

    )
  }
}

export default FilterByState;
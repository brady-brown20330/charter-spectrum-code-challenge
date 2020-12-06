import React, { useEffect, useState } from "react";

let FilterByState = (props) => {
const [open, setOpen] = useState(false)

const handleClick = () => {
  if (open === false) {
    setOpen(true)
  } else {
    setOpen(false)
  }
}

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
          {props.list.map((item) => (
            <li onClick={function() { props.handleListItemClick(item.state, "state") }}>{item.state}</li>
          ))}
        </ul>
      </div>
    </div>

    )
  }
}

export default FilterByState;
import React, { useEffect, useState } from "react";

let Filters = (props) => {
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
      Filter by Name:
      </button>
      </div>
    )
  } else {
    console.log(props.list)
    return (
      <div className="container">
      <button type="button" className="button" onClick={function () { handleClick() }}>
        Filter by Name:
      </button>
       {open && (
      <div className="dropdown">
        <ul>
          {props.list.map((item) => (
            <li onClick={function() { props.handleListItemClick(item.name) }}>{item.name}</li>
          ))}
        </ul>
      </div>
    )}
    </div>
    )
  }
}

export default Filters;
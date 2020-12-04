import React, { useEffect, useState } from "react";

let FilterByGenre = (props) => {
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
      Filter by Genre:
      </button>
      </div>
    )
  } else {
    console.log(props.list)
    return (
      <div className="container">
      <button type="button" className="button" onClick={function () { handleClick() }}>
        Filter by Genre:
      </button>
      <div className="dropdown">
        <ul>
          {props.list.map((item) => (
            <li onClick={function() { props.handleListItemClick(item.genre, 'genre') }}>{item.genre}</li>
          ))}
        </ul>
      </div>
    </div>

    )
  }
}

export default FilterByGenre;
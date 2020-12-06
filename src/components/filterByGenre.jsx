import React, { useEffect, useState } from "react";

let FilterByGenre = (props) => {
const [open, setOpen] = useState(false)
const splitGenres = [];
const handleClick = () => {
  if (open === false) {
    setOpen(true)
  } else {
    setOpen(false)
  }
}

const splitTheGenres = () => {
  for (var i = 0; i < props.list.length; i++) {
    let row =  props.list[i].genre
    row = row.split(',')
    for (var j = 0; j < row.length; j++) {
      if (splitGenres.indexOf(row[j]) === - 1) {
        splitGenres.push(row[j])
      }
    }
  }
}
splitTheGenres();

  if (open === false) {
    return (
      <div className="container">
      <button type="button" className="button" onClick={function () { handleClick() }}>
      Filter by Genre:
      </button>
      </div>
    )
  } else {
    return (
      <div className="container">
      <button type="button" className="button" onClick={function () { handleClick() }}>
        Filter by Genre:
      </button>
      <div className="dropdown">
        <ul>
          {splitGenres.map((item) => (
            <li onClick={function() { props.handleListItemClick(item, 'genre') }}>{item}</li>
          ))}
        </ul>
      </div>
    </div>

    )
  }
}

export default FilterByGenre;
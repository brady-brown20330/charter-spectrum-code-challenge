import React from 'react';

const SearchField = (props) => {
  return (
    <div>
      <input placeholder="Search by Name, City or Genre" onChange={props.handleSearchInput}></input>
      <button className="search" onClick={props.handleSubmit}>Search</button>
    </div>
  )
}

export default SearchField;
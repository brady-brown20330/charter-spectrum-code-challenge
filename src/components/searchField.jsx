import React from 'react';

const SearchField = (props) => {
  return (
    <div>
      <input placeholder="Get Yourself Fed!" onChange={props.handleSearchInput}></input>
      <button className="search" onClick={props.handleSubmit}>Search</button>
    </div>
  )
}

export default SearchField;
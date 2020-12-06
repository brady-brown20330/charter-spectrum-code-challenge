import React from 'react';

const SearchField = (props) => {
  return (
    <div>
      <input onChange={props.handleSearchInput}></input>
      <button onClick={props.handleSubmit}>Submit</button>
    </div>
  )
}

export default SearchField;
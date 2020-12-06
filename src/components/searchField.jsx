import React from 'react';

const SearchField = (props) => {
  return (
    <div>
      <input onChange={props.inputHandler}></input>
      <button>Submit</button>
    </div>
  )
}

export default SearchField;
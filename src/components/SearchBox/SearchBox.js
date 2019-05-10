import React from 'react';
import './SearchBox.css'

const SearchBox = ({ searchChange, searchField }) => {
  return  (
    
    <div className='pa2'>
      <label>
        <input
          className='pa3 ba b--black bg-white'
          type='search'
          placeholder='Search items'
          onChange={searchChange}
        />
      </label>
      
    </div>
  );
}

export default SearchBox;
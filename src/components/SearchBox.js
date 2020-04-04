import React from 'react';

const SearchBox = ({searcfield, searchChange}) => {
  return(
    <div className='pa2'>
    <input
      className='pa3 ba b--gree bg-lightest-blue'
      type='search'
      placeholder='search robots'
      onChange = {searchChange}
    />
    </div>
  );
}

export default SearchBox;
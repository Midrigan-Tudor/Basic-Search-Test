import React from "react";
import PropTypes from 'prop-types';
import './search-box.style.css';

const SearchBox=({placeholder,handleChange})=>{
    return(<input className='search' type="search" placeholder={placeholder} onChange={handleChange}/>)
}

SearchBox.propTypes={
    placeholder: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
  }

export default SearchBox;
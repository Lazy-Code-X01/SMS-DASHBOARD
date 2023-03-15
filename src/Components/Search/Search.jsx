import React from 'react'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import './Search.scss'

const Search = () => {
  return (
    <div className='search'>
    <input 
        type="text"  
        placeholder='Search By Product Category'
        />
        <SearchOutlinedIcon />
    </div>
  )
}

export default Search
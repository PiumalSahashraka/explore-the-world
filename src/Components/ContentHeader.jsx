import React from 'react'
import { BiSearch } from 'react-icons/bi'
import '../styles/contentHeader.css'




export default function ContentHeader(props) {
  return (
    <div className='content-header'>
      <div className="search-box">
        <BiSearch className='icon'/>
        <input type="text" placeholder='Search for a country...' onChange={props.onTypingSearch }/>
      </div>
      <select name="region" id="" placeholder="Filter by region" onChange={props.onRegionChange}>
      <option value="all" selected disabled hidden>Filter by region</option> 
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="antarctic">Antarctic</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>Antarctic
        <option value="oceania">Oceania</option>
        
      </select>
    </div>
  )
}

import React from 'react'
import '../styles/card.css'
export default function Card (props) {
  return (
    <div className='card'>
            <img src={`${props.imagePath}`} alt="country" ></img>
            <div className="card-inner-container">
                <h1>{props.cName}</h1>
                <h3>Capital: <span>{props.capital && props.capital}</span></h3>
                <h3>Region: <span>{props.region}</span></h3>
                <h3>Population: <span>{props.population}</span></h3>
            </div>
    </div>
  )
}

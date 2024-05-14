import React from 'react'
import { Link } from 'react-router-dom'

const CardItem = ({id,name,image}) => {
  console.log(id,name,image);
  return (
    <Link to={`/card/${id}`}>
      <div className="card">
        <img src={image} alt="Avatar"/>
        <div className="container">
          <h4><b>{name}</b></h4> 
        </div>
      </div>
    </Link>
  )
}

export default CardItem
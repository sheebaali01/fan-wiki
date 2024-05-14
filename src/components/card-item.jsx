import React from 'react'

const CardItem = ({name,image}) => {
  return (
    <div className="card">
      <img src={image} alt="Avatar"/>
      <div className="container">
        <h4><b>{name}</b></h4> 
      </div>
    </div>
  )
}

export default CardItem
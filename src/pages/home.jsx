import React, { useEffect, useState } from 'react'
import CardItem from '../components/card-item';
import axios from 'axios';

const Home = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get('https://finalspaceapi.com/api/v0/character/').then((res)=>{
        console.log(res.data);
        setData(res.data);
    })
    },[data])
   
  return (
    <div className="home">
    <h1>
     Character Wiki
    </h1>
    <main>
    {
        data.map((i) => (
          <CardItem
            key={i.id}
            id={i.id}
            name={i.name}
            image={i.img_url}
          />
         ))
      } 
      
    </main>
  </div>
  )
}

export default Home
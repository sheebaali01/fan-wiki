import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CardDetail = () => {
  const { id } = useParams();
  const [cardData, setCardData] = useState(null);
  const [isLoading ,setIsLoading] = useState(true);
  useEffect(() => {
    const fetchCardData = async () => {
      setIsLoading(true);
      
        await axios.get(`https://finalspaceapi.com/api/v0/character/${id}`).then((res) => {
          console.log(res.data);
          setIsLoading(false);
          setCardData(res.data);
        })
             
    };

    fetchCardData();
  }, [id]);
  
   return (
    <div className='detail-container'>
        <main >
          {isLoading ? (
            <h2>Loading...</h2>
          ) : (
            cardData && (
            <>
                <div className="img_div">
                  <img src={cardData.img_url} alt="Avatar" />
                </div>
                <div className='container'>
                  <div className='content'>
                      <h3>{cardData.name}</h3>
                      <div className="published">
                        {/* <span>Published:</span>
                          {articles[0].date} */}
                      </div>
                      <div>
                        <p>Status : {cardData.status}</p>
                        <p>Species : {cardData.species}</p>
                        <p>Gender : {cardData.gender}</p>
                        <p>Hair : {cardData.hair}</p>
                      </div>
                  </div>
                </div>
            </>
              
            )
          )}
        </main>
    </div>
  );
  
   
  
}

export default CardDetail
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../Loader/Loader';
import './apiWorks.css'

function ApiWorks() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className='api-box'>
        {
            data ? data.map((i)=>(
                <h5 key={i.id}>{i.name}</h5>
            )) :
            <Loader />
        }
    </div>
  );
}

export default ApiWorks;

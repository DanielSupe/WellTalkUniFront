'use client'

import React, { useEffect, useState } from 'react'

const FraseDia = () => {

    const [frase, setFrase] = useState<any>({});

  useEffect(() => {
    const fetchFraseDelDia = async () => {
        fetch('https://frasedeldia.azurewebsites.net/api/phrase')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error('There was a problem with the request:', error);
        });
      
    };

    fetchFraseDelDia();
  }, []);


  return (
    <div className="mx-auto max-w-3/5 h-full flex justify-center items-center">
        <p className=' text-center'>{frase?.phrase}</p>
    </div>


  )
}

export default FraseDia
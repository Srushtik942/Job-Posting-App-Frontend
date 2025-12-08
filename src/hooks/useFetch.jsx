import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

  const fetchData = async()=>{
    try{
        setLoading(true);
        setError(null);

        const response = await fetch(url);
        console.log(response);

        if(!response.ok){
            throw new Error("Failed to fetch Data");
        }
        const result = await response.json();
        setData(result);
    }catch(error){
        setError(error.message);
    }finally{
        setLoading(false);
    }
  };

  useEffect(()=>{
    if(url) fetchData();
  },[url]);

  return{data,loading,error, fetchData};

}

export default useFetch

import { useState , useEffect } from 'react'

function useCurrencyInfo(currency){
    const [data,setData]=useState({})
    useEffect(()=>{
      fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${curency}.json`)
      .then((res)=>res.json())
      .then((res)=> setData(res[currency]))
      console.log(data);
    },[currency])
    console.log(data);
    return data
}

export default useCurrencyInfo
// jab jab currency ke andar change ho tab tab mein useeffect hook ko call krvana chahunga
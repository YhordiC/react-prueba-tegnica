import { useEffect, useState } from "react"

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
export const App = () => {
 
   const [fact,setFact] = useState('lorem ipsum cat fact whatever')

   useEffect(()=>{
    fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then(res => res.json())
    .then(data => setFact(data.fact))
   },[])
    return (
        <>
        <h1>Prueba tegnica</h1>
        <p>{fact}</p>
        </>
        
    )
}
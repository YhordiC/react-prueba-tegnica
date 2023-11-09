import { useEffect, useState } from "react"

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGEN_URL = 'https://cataas.com/cat/says/'

export const App = () => {
 
   const [fact,setFact] = useState('lorem ipsum cat fact whatever')
   const [urlImg, setUrlImg] = useState()

   useEffect(()=>{
    fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then(res => res.json())
    .then(data => {
        const {fact } = data
        setFact(fact)
        const threeFirstWords = fact.split('',3).join('')

        fetch(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red&json=true`)
    .then(res => res.json())
    .then(responde => {
        const {mimetype}= responde
     
        setUrlImg(`${CAT_PREFIX_IMAGEN_URL}${threeFirstWords}?${mimetype}`)
    })
    })

    
   
}
   ,[])
    return (
        <main>
        <h1>Prueba tegnica</h1>
        {fact && <p>{fact}</p>}
        {urlImg && <img src={urlImg} alt={`ìmagen de gatito diciendo ${fact}`}/>}
        </main>
        
    )
}
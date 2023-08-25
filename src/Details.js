import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Details(){

let { id }=useParams()

const [quote, setQuote]=useState({})

useEffect(function(){
    fetch(`http://localhost:8080/quotes/${id}`)
    .then(response=> response.json())
    .then((data)=>{
        setQuote(data)
    })
    .catch(error=>console.log(error))
},[])


    return <div>
        <p>{quote.name}</p>
        <h2>{quote.description}</h2>
        <h6>By: {quote.author}</h6>
    </div>
}
export default Details
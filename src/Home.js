import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function Home(){

    const [quotes, setQuotes]=useState([])
     useEffect(()=>{
        fetch("http://localhost:8080/quotes")
        .then(response=> response.json())
        .then((data)=>{
            setQuotes(data)
        })
        .catch(error=>console.log(error))
     },[])

     
//FUNCTION POST(){
//NAVIGATE("/HOME")
//}
    return <div>
        {
            quotes.map((quote)=>{
                return <div key={quote.id}>
                    <h1>{quote.name}</h1>
                    <button><Link to={`/quotes/${quote.id}`}>View Quote</Link></button>
                </div>
            })
        }
    </div>
}

export default Home
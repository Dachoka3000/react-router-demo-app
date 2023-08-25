import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Post(){

    const [name, setName]= useState("")
    const [author, setAuthor]=useState("")
    const [description, setDescription]=useState("")

    let navigate = useNavigate()

    function postQuote(event){
        event.preventDefault()

        let newQuote={
            name:name,
            author:author,
            description:description
        }
        fetch("http://localhost:8080/quotes",{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(newQuote)
        })
        .then(response=> response.json())
        .then((data)=>{console.log(data)})
        .catch(error=>console.log(error))

        event.target.reset()
        navigate("/")
    }

    return <div>
        <form onSubmit={postQuote}>
            <label for="name">Name</label>
            <input type="text" id="name" onChange={(e)=>{setName(e.target.value)}}/>
            <label for="author">Author</label>
            <input type="text" id="author" onChange={(e)=>{setAuthor(e.target.value)}}/>
            <label for="description">Description</label>
            <input type="text" id="description" onChange={(e)=>{setDescription(e.target.value)}}/>
            <button type="submit">Submit</button>
        </form>
    </div>
}

export default Post
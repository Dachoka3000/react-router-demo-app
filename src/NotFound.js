import { useNavigate } from "react-router-dom"

function NotFound(){

    let navigate = useNavigate()
    return <div>
        <h1>404 ERROR</h1>
        <h1>This page does not exist</h1>

        <button onClick={()=>{navigate("/")}}>Go back home</button>
    </div>
}

export default NotFound
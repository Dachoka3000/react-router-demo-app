import { Link , Outlet} from "react-router-dom"
import Footer from "./Footer"


function Landing(){
    return <div>
        <nav>
        <button><Link to="/quotes">Home</Link></button>
        <button><Link to="/about">About</Link></button>
        <button><Link to="/quotes/create">Post</Link></button>
        <Link to="/contacts">Contacts</Link>

      </nav>

        <Outlet></Outlet>
        <p>This is code from the landing page</p>
      <Footer/>
    </div>
}
export default Landing
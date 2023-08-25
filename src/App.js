import Home from './Home';
import About from './About';
import Contacts from './Contacts';
import NotFound from './NotFound';
import Landing from './Landing';
import Details from './Details';
import Post from './Post';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      

      <Routes>
        <Route element={<Landing/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/quotes' element={<Home/>}/>
          <Route path='/quotes/:id' element={<Details/>}/>
          <Route path='/quotes/create' element={<Post/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
        </Route>
       
        <Route path='*' element={<NotFound/>}></Route>

      </Routes>

      
    </div>
  );
}

export default App;

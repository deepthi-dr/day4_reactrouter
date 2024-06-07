import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route,Routes,Link } from "react-router-dom";
import Home from './home';
import AboutMe from './aboutme';
import JeoPardy from './jeopardy';
import PageNotFound from './error';

function App() {
  return (
    <BrowserRouter>
    <ul>  
    <li>  
    <Link to="/home">Home</Link>  
    </li>  
    <li>  
    <Link to="/aboutme">About Me</Link>  
    </li>  
    <li>  
    <Link to="/jeopardy">Jeopardy</Link>  
    </li>  
    <li>  
    <Link to="/error">PageNotFound</Link>  
    </li>  
</ul> 
<Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/AboutMe' element={<AboutMe />} />
        <Route path='/JeoPardy' element={<JeoPardy />} />
        <Route path='/error' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

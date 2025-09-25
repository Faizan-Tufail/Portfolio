import './App.css'

import { Route,Routes,BrowserRouter as Router } from 'react-router-dom'

import Navigation from './Layout/Navigation.jsx';

// Pages

import Home from './Pages/Home'
import About from './Pages/About'
import Portfolio from './Pages/Portfolio'
import Service from './Pages/Service'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'

const App =() =>{

  return (

   
<>

    <Router>

   <Navigation className="active" />

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
     

    </Router>
</>
  )
}

export default App

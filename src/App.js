import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Roadmap from './components/Roadmap';
import WhitePaper from './components/WhitePaper.js';
import ToggleContextProvider from './contexts/ToggleContext';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  
  return (

    <ToggleContextProvider>
    <div className="App">
      <Router> 
          <Navbar/> 
          <Roadmap/>
        <Routes> 
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/whitepaper" element={<WhitePaper/>}/>
        </Routes>
      </Router>
    </div>
    </ToggleContextProvider>
  );
}

export default App;

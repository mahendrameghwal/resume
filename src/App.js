import './App.css';

import { Tempimg } from './ImageComponents/Tempimg';

import { BrowserRouter as Router , Route ,Routes } from 'react-router-dom'
import Temp1input from './input/Temp1input';



function App() {
  return (
    <div className="App">
    <Router>
  
  

 
 
 <Routes>
 <Route path="/" element={<Tempimg/>}/>
 <Route path="/temp1" element={<Temp1input/>}/>
 
 </Routes>
 </Router>
    </div>
  );
}

export default App;

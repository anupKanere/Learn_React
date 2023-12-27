import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Routing from './Component/Routing';
import Home from './Component/Home';
import About from './Component/About';
import User from './Component/User';

function App() {
  return (
    <div className="App">
      <h1>Routing In React</h1>
      <Router>
        <Routes>
          <Route path='/' element={<Routing></Routing>}> </Route>
          <Route path='/home' element={<Home></Home>}> </Route>
          <Route path='/about' element={<About></About>}> </Route>
          <Route path='/users' element={<User></User>}> </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

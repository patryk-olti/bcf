import React from 'react';

import './App.css';

import { 
  BrowserRouter as Router,
  Routes, 
  Route
} from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Error from './Pages/Error';

function App() {

  return (
    <div className="App">
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
            <Route path='/*' element={<Error />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;

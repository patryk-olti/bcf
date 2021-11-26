import React, { useEffect } from 'react';

import './App.css';

import { getdb } from './firebaseConfig';

import { 
  BrowserRouter as Router,
  Routes, 
  Route
} from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Error from './Pages/Error';

import Animation from './Pages/Animation';


function App() {

  useEffect( () => {
    getdb('users');
  }, [])

  return (
    <div className="App">
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/animation' element={<Animation />} />
            <Route path='/*' element={<Error />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;

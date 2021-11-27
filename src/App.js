import React, { useContext } from 'react';

import { AppContext } from './AppContext';

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

import Animation from './Pages/Animation';
import AdminPanel from './Pages/AdminPanel';
import UserPage from './Pages/UserPage';

function App() {

  const { logged } = useContext(AppContext);

  return (
    <div className="App">
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/animation' element={<Animation />} />
            <Route exact path='/adminpanel' element={<AdminPanel />} />
            {logged ? <Route exact path='/adminpanel' element={<AdminPanel />} /> : <Route path='/*' element={<Error />} />}
            {logged ? <Route exact path='/userpage' element={<UserPage />} /> : <Route path='/*' element={<Error />} />}
            <Route path='/*' element={<Error />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;

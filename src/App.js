import React from 'react';
import Menu from './Components/Menu/Menu';
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import {Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="container">
      <Menu/>
      <Route path="/login" exact component={Login} />
      <Route path='/register'exact component={Register}/>
      
     
    </div>
  );

}

export default App;

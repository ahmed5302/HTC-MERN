import React ,{Fragment}from 'react';
import Login  from './components/login';
import Register  from './components/register';
import Addemp from './components/addEmp';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'; 



function App() {
  return ( 
    
  <Fragment>
  <Router>
    <Switch>
  <Route exact path="/" component={Login}></Route>
  <Route exact path="/register" component={Register}></Route>
  <Route exact path="/addemp" component={Addemp}></Route>
  </Switch>
  </Router>
  </Fragment>
  );
}

export default App;
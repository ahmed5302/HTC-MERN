import React ,{Fragment}from 'react';
import Login  from './components/login';
import Register  from './components/register';
import Addemp from './components/addEmp';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'; 
import {Provider} from 'react-redux';
import store from './store';




function App() {
  return ( 
  <Provider store={store}>  
    <Fragment>
  <Router>
    <Switch>
  <Route exact path="/" component={Login}></Route>
  <Route exact path="/register" component={Register}></Route>
  <Route exact path="/addemp" component={Addemp}></Route>
  </Switch>
  </Router>
  </Fragment>
  </Provider>


  );
}

export default App;
import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import Events from './components/Events';
import Login from './components/admin/Login';
import Register from './components/admin/Register';
import Admin from './components/admin/Admin';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
    	<BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
	        <Route exact path="/" component={Events} /	>
	        <Route exact path="/admin" component={Admin} /	>
	        <Route path="/login" component={Login}/>
	        <Route path="/register" component={Register}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;

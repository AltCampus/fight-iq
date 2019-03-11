import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header";
import Header2 from "./components/Header2";
import Events from "./components/Events";
import Login from "./components/userAuth/Login";
import Register from "./components/userAuth/Register";
import Admin from "./components/admin/Admin";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdminAddEvent from "./components/admin/events/AdminAddEvent";
import AdminEventDetail from "./components/admin/events/AdminEventDetail";
import AddFight from "./components/admin/AddFight";
import AddPlayer from "./components/admin/AddPlayer";
import DisplayPlayersList from "./components/admin/DisplayPlayersList";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className='App'>
					<Header />
					<Header2 />
					<Switch>
						<Route exact path='/' component={Events} />
						<Route exact path='/admin' component={Admin} />
						<Route exact path='/admin/event' component={AdminAddEvent} />
						<Route
							exact
							path='/admin/event/:eventid'
							component={AdminEventDetail}
						/>
						<Route
							exact
							path='/admin/:eventid/edit'
							component={AdminAddEvent}
						/>
						<Route exact path='/admin/:eventid/fights' component={AddFight} />
						<Route exact path='/admin/players/add' component={AddPlayer} />
						<Route exact path='/admin/players' component={DisplayPlayersList} />
						<Route path='/login' component={Login} />
						<Route path='/register' component={Register} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;

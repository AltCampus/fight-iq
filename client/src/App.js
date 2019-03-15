import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import "./App.scss";
import Header from "./components/Header";
import Header2 from "./components/Header2";
import Events from "./components/Events";
import Login from "./components/userAuth/Login";
import Register from "./components/userAuth/Register";
import Admin from "./components/admin/Admin";
import AdminAddEvent from "./components/admin/events/AdminAddEvent";
import AdminEventDetail from "./components/admin/events/AdminEventDetail";
import AddFight from "./components/admin/fights/AddFight";
import AddPlayer from "./components/admin/player/AddPlayer";
import AddResult from "./components/admin/fights/AddResult";
import EventCards from "./components/user/EventCards";
import DisplayPlayersList from "./components/admin/player/DisplayPlayersList";
import Profile from "./components/user/profile/Profile";
import PrivateRoute from "./components/PrivateRoute";

class App extends Component {
	render() {
		let { isLogged, isAdmin } = this.props;
		return (
			<BrowserRouter>
				<div className='App'>
					<Header />
					<Header2 />
					<Switch>
						<Route exact path='/' component={Events} />

						<PrivateRoute
							exact
							path='/admin'
							component={Admin}
							auth={isAdmin}
						/>

						<PrivateRoute
							exact
							path='/admin/event'
							component={AdminAddEvent}
							auth={isAdmin}
						/>
						<PrivateRoute
							exact
							path='/admin/event/:eventid'
							component={AdminEventDetail}
							auth={isAdmin}
						/>
						<PrivateRoute
							exact
							path='/admin/:eventid/edit'
							component={AdminAddEvent}
							auth={isAdmin}
						/>
						<PrivateRoute
							exact
							path='/admin/:eventid/fights'
							component={AddFight}
							auth={isAdmin}
						/>
						<PrivateRoute
							exact
							path='/admin/:eventid/fights/:fightid/edit'
							component={AddFight}
							auth={isAdmin}
						/>

						<PrivateRoute
							exact
							path='/admin/:eventid/fights/:fightid/result'
							component={AddResult}
							auth={isAdmin}
						/>

						<PrivateRoute
							exact
							path='/profile'
							component={Profile}
							auth={isLogged}
						/>

						<PrivateRoute
							exact
							path='/admin/players/add'
							component={AddPlayer}
							auth={isAdmin}
						/>
						<PrivateRoute
							exact
							path='/admin/players'
							component={DisplayPlayersList}
							auth={isAdmin}
						/>

						<Route path='/login' component={Login} />
						<Route path='/register' component={Register} />
						<Route path='/events' component={EventCards} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isLogged: state.isLogged,
		isAdmin: state.isAdmin
	};
};

export default connect(mapStateToProps)(App);

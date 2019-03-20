import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import "./App.scss";
import AdminHeader from "./components/Header";
import Header2 from "./components/Header2";
import Login from "./components/userAuth/Login";
import Register from "./components/userAuth/Register";
import Admin from "./components/admin/Admin";
import AdminAddEvent from "./components/admin/events/AdminAddEvent";
import AdminEventDetail from "./components/admin/events/AdminEventDetail";
import AddFight from "./components/admin/fights/AddFight";
import AddPlayer from "./components/admin/player/AddPlayer";
import AddResult from "./components/admin/fights/AddResult";
import EventDetails from "./components/user/event/EventDetails";
import Predict from "./components/user/predict/Predict";
import DisplayPlayersList from "./components/admin/player/DisplayPlayersList";
import Profile from "./components/user/profile/Profile";
import PrivateRoute from "./components/PrivateRoute";
import Homepage from "./components/user/homepage/Homepage";

class App extends Component {
	render() {
		let { isLogged, isAdmin } = this.props;

		return (
			<BrowserRouter>
				<div className='App'>
					<Switch>
						<PrivateRoute path='/admin' component={AdminHeader} auth={isAdmin}/>
					</Switch>
					{/* <Header /> */}
					<Header2 />
					<div className='App-main'>
						<Switch>
							{/* Admin Routes */}


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
								path='/admin/players'
								component={DisplayPlayersList}
								auth={isAdmin}
							/>
							<PrivateRoute
								exact
								path='/admin/players/add'
								component={AddPlayer}
								auth={isAdmin}
							/>
							<PrivateRoute
								exact
								path='/admin/players/:id/edit'
								component={AddPlayer}
								auth={isAdmin}
							/>

							{/* Profile & User auth pages */}
							<PrivateRoute path='/login' component={Login} auth={!isLogged} />
							<PrivateRoute
								path='/register'
								component={Register}
								auth={!isLogged}
							/>
							<PrivateRoute
								exact
								path='/profile'
								component={Profile}
								auth={isLogged}
							/>

							{/* User Routes */}
							<Route exact path='/' component={Homepage} />
							<Route exact path='/events/:eventid' component={EventDetails} />
							<Route
								exact
								path='/events/:eventid/fights/:fightid/predict'
								component={Predict}
							/>
							<Route
								exact
								path='/events/:eventid/fights/:fightid/predict/:predictid/edit'
								component={Predict}
							/>
						</Switch>
					</div>
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

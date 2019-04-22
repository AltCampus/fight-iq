import Type from "./types";
const URL = process.env.NODE_ENV == 'production' ? "https://ufc.altcampus.in/" : "http://localhost:8000/";

//  Register submit
export function registerSubmit(state, cb) {
	return (dispatch) => {
		fetch(URL + "api/v1/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(state)
		})
			.then((response) => response.json())
			.then((data) => {
				dispatch({
					type: Type.REGISTER
				});
				if (data.success){
					cb(true)
				} else {
					cb(false, data.message)
				}
			});
	};
}

// Login submit
export function loginSubmit(state, cb) {
	return (dispatch) => {
		fetch(URL + "api/v1/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(state)
		})
			.then((response) => response.json())
			.then((data) => {
				dispatch({
					type: Type.LOGIN,
					success: data.success,
					isAdmin: data.isAdmin
				});
				// cb(true);
				if (data.success) {
					cb(true); // success handling
				} else {
					cb(false, data.message);
				}
			});
	};
}

// Logout
export function handleLogout() {
	return (dispatch) => {
		fetch(URL + "api/v1/loggedOut")
			.then((response) => response.json())
			.then((data) => {
				dispatch({
					type: Type.LOGOUT
				});
			});
	};
}

// Get user details
export function getUser(cb) {
	return (dispatch) => {
		fetch(URL + "api/v1/user")
			.then((response) => response.json())
			.then((data) => {
				dispatch({
					type: Type.GET_USER,
					user: data.user
				});
				cb(true);
			});
	};
}

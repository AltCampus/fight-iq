const URL = process.env.NODE_ENV == 'production' ? "https://ufc.altcampus.in/" : "http://localhost:8000/";
import Type from "./types";

export function addPlayer(playerDetails, cb) {
	return (dispatch) => {
		fetch(URL + "api/v1/admin/players", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(playerDetails)
		})
			.then((res) => res.json())
			.then((data) => {
				if (data) {
					dispatch({
						type: Type.ADD_PLAYER,
						data
					});
					cb(true);
				}
			});
	};
}

// Get players
export function getPlayers() {
	return (dispatch) => {
		fetch(URL + "api/v1/players")
			.then((res) => res.json())
			.then((data) => {
				dispatch({
					type: Type.GET_PLAYERS,
					players: data
				});
			});
	};
}

//get player
export function getPlayer(id, cb) {
	return (dispatch) => {
		fetch(URL + "api/v1/players/" + id)
			.then((res) => res.json())
			.then((data) => {
				dispatch({
					type: Type.GET_PLAYER,
					players: data
				});
				cb(data.player);
			});
	};
}

// Delete player
export function deleteEvent(id, cb) {
	return (dispatch) => {
		fetch(URL + "api/v1/admin/players/" + id, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then((res) => res.json())
			.then((data) => {
				dispatch({
					type: Type.DELETE_PLAYER
				});
				cb(true);
			});
	};
}

// edit Player
export function editPlayer(data, player_id, cb) {
	return (dispatch) => {
		fetch(URL + "api/v1/admin/players/" + player_id, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				if (data) {
					dispatch({
						type: Type.EDIT_PLAYER
					});
					cb(true);
				}
			});
	};
}

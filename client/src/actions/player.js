const URL = "http://localhost:8000/";
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
					data
				});
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
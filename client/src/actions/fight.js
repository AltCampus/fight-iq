const URL = "http://localhost:8000/";
import Type from "./types";

// Add  fight
export function addFight(data, eventId, cb) {
	return (dispatch) => {
		fetch(URL + "api/v1/admin/events/" + eventId + "/fights", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
			.then((response) => response.json())
			.then((data) => {
				if (data) {
					dispatch({
						type: Type.ADD_FIGHT
					});
					cb(true);
				}
			});
	};
}

// Get fights
export function getFights(eventId) {
	return (dispatch) => {
		fetch(URL + " /events/" + eventId + "/fights")
			.then((res) => res.json())
			.then((data) => {
				dispatch({
					type: Type.GET_FIGHT,
					data
				});
			});
	};
}

// Edit fight
export function editFight(data, eventId, fightId, cb){
	return (dispatch) => {
	fetch(URL + "api/v1/admin/events/" + eventId + "/fights/" + fightId, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
			.then((response) =>{
				console.log(JSON.stringify(data),"raviraviravi")
			 return response.json()})
			.then((data) => {
				if (data) {
					dispatch({
						type: Type.EDIT_FIGHT
					});
					cb(true);
				}
			});
	};
}

// Delete Fight

export function deleteFight(eventId, fightId, cb) {
	return (dispatch) => {
		let reqURL = URL + "api/v1/admin/events/" + eventId + "/fights/" + fightId;
		console.log(reqURL)
		fetch(reqURL, {
			method: "DELETE"
		})
			.then((res) =>res.json())
			.then((data) => {
				console.log(data)
				if (data.success){
					dispatch({
						type: Type.DELETE_FIGHT
					});
				}
			data.success? cb(true): cb(false, "Error: Enter correct data"); // Todo - Replace with error coming from server
			});
	};
}

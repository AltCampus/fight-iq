const URL = "http://localhost:8000/";
import Type from "./types";

// Add addFight submit
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
						type: Type.ADD_FIGHT,
						data
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
				// console.log("Inside getEvents", data);
				dispatch({
					type: Type.GET_FIGHT,
					data
				});
			});
	};
}

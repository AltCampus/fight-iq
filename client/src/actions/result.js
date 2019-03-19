import Type from "./types";
const URL = "http://localhost:8000/";

// Add  result
export function addResult(data, fightId, cb) {
	console.log("json being sent with request",data)
	console.log("Request link: ", URL + "api/v1/admin/" + fightId + "/result")
	return (dispatch) => {
		fetch(URL + "api/v1/admin/" + fightId + "/result", {
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
						type: Type.ADD_RESULT
					});
					cb(true);
				}
			});
	};
}

// Edit result
export function editResult(data, eventId, fightId, cb){
	return (dispatch) => {
	fetch(URL + "api/v1/admin/events/" + eventId + "/result/" + fightId, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
			.then((response) =>{
			 return response.json()})
			.then((data) => {
				if (data) {
					dispatch({
						type: Type.EDIT_RESULT
					});
					cb(true);
				}
			});
	};
}

// Delete Result

export function deleteResult(fightId, cb) {
	return (dispatch) => {
		let reqURL = URL + "api/v1/admin/" + fightId + "/result";
		fetch(reqURL, {
			method: "DELETE"
		})
			.then((res) =>res.json())
			.then((data) => {
				console.log(data)
				if (data.success){
					dispatch({
						type: Type.DELETE_RESULT
					});
				}
			data.success? cb(true): cb(false, "Error: Enter correct data"); // TODO - Replace with error coming from server
			});
	};
}

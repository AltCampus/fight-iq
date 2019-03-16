import Type from "./types";
const URL = "http://localhost:8000/";

// Add  result
export function addPrediction(data, cb) {
	console.log("json being sent with request",data)
	// console.log("Request link: ", URL + "api/v1/admin/" + fightId + "/result")
	return (dispatch) => {
		fetch(URL + "api/v1/prediction", {
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
						type: Type.ADD_PREDICTION
					});
					cb(true);
				}
			});
	};
}
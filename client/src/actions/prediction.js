import Type from "./types";
const URL = "http://localhost:8000/";

// add prediction
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

export function deletePrediction(predictionid, cb) {
	console.log(predictionid)
	return (dispatch) => {
		fetch(URL + "api/v1/prediction/"+predictionid, {
			method: "DELETE"
		})
		.then((res) =>res.json())
		.then((data) => {
			if (data.success){
				dispatch({
					type: Type.DELETE_PREDICTION
				});
			}
		cb(true); 
		});
	};
}

// edit prediction
export function editPrediction(data,predictionid, cb) {
	return (dispatch) => {
		fetch(URL + "api/v1/prediction/" + predictionid , {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
			.then((response) => response.json())
			.then((data) => {
				if (data) {
					dispatch({
						type: Type.EDIT_PREDICTION
					});
					cb(true);
				}
			});
	};
}
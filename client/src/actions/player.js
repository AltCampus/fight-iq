const URL = "http://localhost:8000/";
import Type from "./types";


export function addPlayer(playerDetails, cb){
	console.log(playerDetails)
	return dispatch => {
		fetch(URL + "api/v1/admin/players", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(playerDetails)
		})
		.then(res=>res.json())
		.then(data=>{
			console.log("Fighter data: ",data)
			if (data){
				dispatch({
					type: Type.ADD_PLAYER,
					data
				});
				cb(true);
			}
		});
	};
}


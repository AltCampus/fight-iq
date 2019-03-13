const URL = "http://localhost:8000/";
import Type from "./types";

// Add event
export function addEvent(state, cb) {
	return (dispatch) => {
		fetch(URL + "api/v1/admin/events", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(state)
		})
			.then((response) => response.json())
			.then((data) => {
				dispatch({
					type: Type.ADD_EVENT
				});
				data.success? cb(true): cb(false, "Error: Enter correct data"); // Todo - Replace with error coming from server
			});
	};
}

// Get events
export function getEvents() {
	return (dispatch) => {
		fetch(URL + "api/v1/events")
			.then((res) => res.json())
			.then((data) => {
				dispatch({
					type: Type.GET_EVENTS,
					events: data.event
				});
			});
	};
}

// Get event
export function getEvent(eventid) {
	return (dispatch) => {
		fetch(URL + "api/v1/events/" + eventid)
			.then((res) => res.json())
			.then((data) => {
				dispatch({
					type: Type.GET_EVENT,
					event: data.event
				});
			});
	};
}

// Edit event
export function editEvent(state, cb, eventid) {
	return (dispatch) => {
		fetch(URL + "api/v1/admin/events/" + eventid, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(state)
		})
			.then((res) => res.json())
			.then((data) => {
				dispatch({
					type: Type.EDIT_EVENTS
				});
				data.success? cb(true): cb(false, "Error: Enter correct data"); // Todo - Replace with error coming from server
			});
	};
}

// Delete event
export function deleteEvent(id, cb) {
	return (dispatch) => {
		fetch(URL + "api/v1/admin/events/" + id, {
			method: "DELETE"
		})
			.then((res) =>res.json())
			.then((data) => {
				if (data.success){
					dispatch({
						type: Type.DELETE_EVENTS
					});
				}
			data.success? cb(true): cb(false, "Error: Enter correct data"); // Todo - Replace with error coming from server
			});
	};
}

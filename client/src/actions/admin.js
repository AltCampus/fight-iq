const URL = 'http://localhost:8000/';
import Type from './types';

// Edit an event
export function updateEditEvent(eventid){
    return dispatch => {
        fetch(URL + 'api/v1/events/' + eventid)
            .then(res=>res.json())
            .then(data=>{
                dispatch({
                    type: Type.UPDATE_EDIT_EVENT,
                    editEvent: data.event
                })
            })
    }

}

// Add event submit
export function addEvent(state, cb){
	return dispatch => {
		fetch(URL + 'api/v1/admin/events', {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(state)
    })
    .then(response=>response.json())
    .then(data=>{
    	if (data.success){
	    	dispatch({
	    		type: Type.ADD_EVENT,
	    		event: state
	    	})
	    	cb(true);
    	} else {
    		dispatch({
    			type:Type.ADD_EVENT,
    			event: null
    		})
    		cb(false, "Error: Enter correct data"); // Todo - Replace with error coming from server
    	}
    	 
    	// if (data.success){
    	// 	cb(true); // success handling
    	// } else {
    	// 	cb(false, data.msg)
    	// }

    })
	}
}

// Get events
export function getEvents(){
    return dispatch => {
        fetch( URL + 'api/v1/events')
            .then(res=>res.json())
            .then(data=>{
                console.log('Inside getEvents', data)
                dispatch({
                    type: Type.GET_EVENTS,
                    events: data.events
                })
            })
    }
}

// Edit event
export function editEvent(state, cb, eventid){
    return dispatch => {
        fetch(URL + 'api/v1/admin/events/' + eventid, {
            method: "PUT", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(state)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            dispatch({
                type: Type.EDIT_EVENTS
            })
            // Todo: Handle CB according to the response
            if (data.success){
                cb(true)
            } else {
                cb(false, "Error: something went wrong, try again!")
            }
        })
    }
}

// Get event
 export function getEvent(eventid){
    console.log("Request made: ", URL + 'api/v1/events/' + eventid)
    return dispatch => {
        fetch( URL + 'api/v1/events/' + eventid)
            .then(res=>res.json())
            .then(data=>{
                dispatch({
                    type: Type.GET_EVENT,
                    event: data.event
                })
            })
    }
 }

// Delete event
export function deleteEvent(id){
    return dispatch => {
        fetch(URL + 'api/v1/admin/events/' + id, {
            method: "DELETE", 
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(res=>res.json())
        .then(data=>{
            dispatch({
                type: Type.DELETE_EVENTS
            })
            // Need to be discussed if this is the right thing to do

            // Todo: Handle CB according to the response
        })
    }
}

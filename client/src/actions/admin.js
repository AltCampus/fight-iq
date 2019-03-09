const URL = 'http://localhost:8000/';
import Type from './types';

// Edit an event
export function updateEditEvent(eventid){
	return {
		type: Type.UPDATE_EDIT_EVENT,
        eventid: eventid
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
    			type:Type.D_EVENT,
    			event: null
    		})
            console.log('check')
    		cb(false, data.message);
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
                console.log('test', data)
                // dispatch({
                //     type: Type.GET_EVENTS,
                //     events: data.events
                // })
            })
    }
}

// Edit event
export function editEvent(state, cb){
    return dispatch => {
        fetch(URL + 'api/v1/admin/events', {
            method: "PUT", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(state)
        })
        .then(res=>res.json())
        .then(data=>{
            dispatch({
                type: Type.EDIT_EVENTS
            })
            // Todo: Handle CB according to the response
        })
    }
}

// Get event
 export function getEvent(eventid){
    return dispatch => {
        fetch( URL + 'event/' + eventid)
            .then(res=>res.json())
            .then(data=>{
                dispatch({
                    type: Type.GET_EVENT,
                    event: data
                })
            })
    }
 }


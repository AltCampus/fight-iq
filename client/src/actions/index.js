const URL = 'http://localhost:8000/';

export function updateEditEvent(eventid){
	return {
		type: 'UPDATE_EDIT_EVENT',
        eventid: eventid
	}
}

// export function loginSubmit(state){
// 	return dispatch => {
// 		fetch(URL + '/api/v1/login', {
//         method: "POST", 
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(state)
//     })
//     .then(response=>response.json())
//     .then(data=>console.log(data))
// 	}
// }

//  Register submit

export function registerSubmit(state, cb){
	console.log(state, "cheking ")
	return dispatch => {
		fetch(URL + 'api/v1/register', {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(state)
    })
    .then(response=>response.json())
    .then(data=>{
    	console.log(data._id)
    	dispatch({
    		type: "REGISTER"
    	})
    	cb(true); 
    	// if (data.success){
    	// 	cb(true); // success handling
    	// } else {
    	// 	cb(false, data.msg)
    	// }

    })
	}
}


// Login submit

export function loginSubmit(state, cb){
	return dispatch => {
		fetch(URL + 'api/v1/login', {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(state)
    })
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
    	dispatch({
    		type: "LOGIN",
            success: data.success
    	})
    	// cb(true); 
    	if (data.success){
    		cb(true); // success handling
    	} else {
    		cb(false, data.msg)
    	}

    })
	}
}

// Logout

export function handleLogout(){
    return dispatch => {
        fetch(URL + 'api/v1/logout')
            .then(response=>console.log(response))
            .then(data=>{
                dispatch({
                    type: 'LOGOUT'
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
	    		type: "ADD_EVENT",
	    		event: state
	    	})
	    	cb(true);
    	} else {
    		dispatch({
    			type:"ADD_EVENT",
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

// Write an action that fetches the events data and sends the data to the reducer

//  http://localhost:8000/api/v1/events

export function getEvents(){
    return dispatch => {
        fetch( URL + 'api/v1/events')
            .then(res=>res.json())
            .then(data=>{
                dispatch({
                    type: 'GET_EVENTS',
                    events: data.events
                })
            })
    }
}

// Write function to handle edit event and sends confirmation to reducer

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
                type: 'EDIT_EVENTS'
            })
            // Todo: Handle CB according to the response
        })
    }
}

// Write a function to do GET request for event details

 export function getEvent(eventid){
    return dispatch => {
        fetch( URL + 'event/' + eventid)
            .then(res=>res.json())
            .then(data=>{
                dispatch({
                    type: 'GET_EVENT',
                    event: data
                })
            })
    }
 }

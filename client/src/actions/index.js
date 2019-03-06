const URL = 'http://localhost:8000/';

export function updateEditEvent(data){
	return {
		type: 'UPDATE_EDIT_EVENT',
		event: {
			title: "UFC 235",
			mainEvent: "Jon Jones vs Anthony Smith",
			location: "T-mobile arena, Las Vegas, Nevada",
			dateTime: "03-03-2019, 8:30 AM IST",
			players: {
				player1: {
					name: "Jon Jones",
					nickName: "Bones",
					imgLink: "http://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/2335639.png&w=350&h=254",

				}, 
				player2: {
					name: "Anthony Smith",
					nickName: "The Lion Heart",
					imgLink: "https://ufc-video.s3.amazonaws.com/2018-11/SMITH_ANTHONY.png?HEm0_AZx0NqEHuNYiJIEpFhybJ_gu1PC"
				}
			}
		}
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
    	dispatch({
    		type: "LOGIN"
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


// Add event submit

export function addEvent(state, cb){
	return dispatch => {
		fetch(URL + 'api/v1/admin/event', {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(state)
    })
    .then(response=>response.json())
    .then(data=>{
    	if (data.status){
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
    		cb(false);
    	}
    	 
    	// if (data.success){
    	// 	cb(true); // success handling
    	// } else {
    	// 	cb(false, data.msg)
    	// }

    })
	}
}
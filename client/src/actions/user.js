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
    		type: Type.REGISTER
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
    		type: Type.LOGIN,
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
                    type: Type.LOGOUT
                })
            })
    }
}

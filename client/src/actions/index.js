cost url = 'http://localhost:8000/'

export function postEvent (data){
	return dispatch =>{
		fetch(`${url}/api/v1/admin/event`,
		method :'POST',
		headers : {
			'content-Type':'application/json'
		},
		body: JSON.Stringify(data)
	})
		.then(res => res.json())
		.then(data => console.log(data,"data in action component"))
}
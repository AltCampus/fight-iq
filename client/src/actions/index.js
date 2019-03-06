const URL = 'localhost:8000/';

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

export function loginSubmit(state){
	return dispatch => {
		fetch(URL + '/api/v1/login', {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(state)
    })
    .then(response=>return response.json())
    .then(data=>console.log(data))
	}
}
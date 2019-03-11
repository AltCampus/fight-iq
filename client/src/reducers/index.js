import Type from "../actions/types";

const initState = {
	events: [],
	editEvent: {},
	isLogged: false,
	event: {},
	fightsArr: []
};

export default function rootReducer(state = initState, action) {
	switch (action.type) {
// User Auth
		case Type.REGISTER:
			return {
				...state
			};

		case Type.LOGIN:
			return {
				...state,
				isLogged: action.success
			};

		case Type.LOGOUT:
			return {
				...state,
				isLogged: false
			};

// Events 
		case Type.ADD_EVENT:
			return {
				...state,
			};

		case Type.GET_EVENTS:
			return {
				...state,
				events: action.events
			};

		case Type.GET_EVENT:
			return {
				...state,
				event: action.event
			};
			
		case Type.EDIT_EVENTS:
			return {
				...state
			};

		case Type.DELETE_EVENTS:
			return {
				...state
			};

// Fights

		case Type.ADD_FIGHT:
			console.log(action.data);
			return {
				...state,
				fightsArr: [...state.fightsArr, action.data]
			};

		case Type.GET_FIGHT:
			return {
				...state
			};

		case Type.ADD_PLAYER:
			return {
				...state
			}

		default:
			return state;
	}
}

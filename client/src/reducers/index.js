import Type from "../actions/types";

const initState = {
	events: [],
	editEvent: {},
	isLogged: false,
	event: {},
	fightsArr: [],
	players: [],
	user: {}
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
// User

		case Type.GET_USER:
			return {
				...state,
				user: action.user
			}

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
			return {
				...state,
				fightsArr: [...state.fightsArr, action.data]
			};

		case Type.EDIT_FIGHT:
			return {
				...state
			}

		case Type.GET_FIGHT:
			return {
				...state
			};

		case Type.DELETE_FIGHT: 
			return {
				...state
			}

// Player

		case Type.ADD_PLAYER:
			return {
				...state,
				players: action.data
			};
		case Type.GET_PLAYERS:
			return {
				...state,
				players: action.players
			};
		case Type.DELETE_PLAYER:
			return {
				...state
			};

// Result

		case Type.ADD_RESULT:
			return {
				...state
			}
		

		default:
			return state;
	}
}

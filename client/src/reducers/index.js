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
		case Type.UPDATE_EDIT_EVENT:
			return {
				...state,
				editEvent: action.editEvent
			};

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

		case Type.ADD_EVENT:
			let events3 = [...state.events];

			if (action.event) {
				events3.push(action.event);
			}

			return {
				...state,
				events: events3
			};

		// Handle edit event reducer

		case Type.EDIT_EVENTS:
			return {
				...state
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

		case Type.DELETE_EVENTS:
			return {
				...state
			};

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
			};

		default:
			return state;
	}
}

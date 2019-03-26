import Type from "../actions/types";

export default (state = {events: [], event: {}, editEvent: {}}, action) => {
  switch (action.type) {
    case Type.ADD_EVENT:
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

    case Type.EDIT_EVENTS:
      return {
        ...state
      };

    case Type.DELETE_EVENTS:
      return {
        ...state
      };
    default:
      return state;
  }
};
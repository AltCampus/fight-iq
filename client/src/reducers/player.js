import Type from "../actions/types";

export default (state = {players: []}, action) => {
  switch (action.type) {
    case Type.ADD_PLAYER:
      return {
        ...state
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
    case Type.EDIT_PLAYER:
      return {
        ...state
      };
      
    default:
      return state;
  }
};
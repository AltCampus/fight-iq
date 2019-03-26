import Type from "../actions/types";

export default (state = {fight: [],fightsArr: []}, action) => {
  switch (action.type) {
    case Type.ADD_FIGHT:
      return {
        ...state,
        fightsArr: [...state.fightsArr, action.data]
      };

    case Type.EDIT_FIGHT:
      return {
        ...state
      };

    case Type.GET_FIGHT:
      return {
        ...state
      };

    case Type.DELETE_FIGHT:
      return {
        ...state
      };

    default:
      return state;
  }
};
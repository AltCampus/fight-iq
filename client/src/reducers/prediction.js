import Type from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case Type.ADD_PREDICTION:
      return {
        ...state
      };
    case Type.DELETE_PREDICTION:
      return {
        ...state
    };
    case Type.EDIT_PREDICTION:
      return {
        ...state
      };
      
    default:
      return state;
  }
};
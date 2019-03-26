import Type from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case Type.ADD_RESULT:
      return {
        ...state
      };
      
    default:
      return state;
  }
};
import Type from "../actions/types";

export default (state = {message: "", showMessage: false}, action) => {
  switch (action.type) {
    case Type.SHOW_MESSAGE:
      return {
        ...state,
        showMessage: true,
        message: action.message
      };
    case Type.HIDE_MESSAGE:
      return {
        ...state,
        showMessage: false,
        message: ""
      }

    default:
      return state;
  }
};
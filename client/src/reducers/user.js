import Type from "../actions/types";

export default (state = {isLogged: false,isAdmin: false, user: {}}, action) => {
  switch (action.type) {
        case Type.REGISTER:
      return {
        ...state
      };

    case Type.LOGIN:
      return {
        ...state,
        isLogged: action.success,
        isAdmin: action.isAdmin
      };

    case Type.LOGOUT:
      return {
        ...state,
        isLogged: false,
        isAdmin: false,
        user: {}
      };

    case Type.GET_USER:
      return {
        ...state,
        user: action.user
      };

    default:
      return state;
  }
};
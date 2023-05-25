import { Actions } from "../actions";

const initialState = {
  isLoggedIn: false,
  token: "",
  currentUser: {
    name: "Joe Doe",
  },
};

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case Actions.LOGIN_USER:
      return { ...state, isLoggedIn: true };
    case Actions.LOGOUT_USER:
      return { ...initialState };
    case Actions.UPDATE_USERNAME:
      return { ...state, currentUser: { name: action.payload } };
    default:
      return { ...state };
  }
};

//immutable

import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (currenState = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...currenState,
        currentUser: action.payload,
        error: null
      };
    case UserActionTypes.SIGN_IN_FAILURE:
      return {
        ...currenState,
        error: action.payload
      };
    default:
      return currenState;
  }
};

export default userReducer;

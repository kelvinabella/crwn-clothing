import { UserActionTypes } from "../user.types";

const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (currenState = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...currenState,
        currentUser: action.payload
      };
    default:
      return currenState;
  }
};

export default userReducer;

const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (currenState = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...currenState,
        currentUser: action.payload
      };
    default:
      return currenState;
  }
};

export default userReducer;

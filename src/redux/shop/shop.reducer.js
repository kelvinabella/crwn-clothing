import ShopActionTypes from "./shop.types";

const INITIAL_DATA = {
  collections: null
};

const shopReducer = (currentSate = INITIAL_DATA, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...currentSate,
        collections: action.payload
      };
    default:
      return currentSate;
  }
};

export default shopReducer;

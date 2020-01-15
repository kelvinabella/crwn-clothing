import SHOP_DATA from "../../assets/shop.data";

const INITIAL_DATA = {
  collections: SHOP_DATA
};

const shopReducer = (currentSate = INITIAL_DATA, action) => {
  switch (action.type) {
    default:
      return currentSate;
  }
};

export default shopReducer;

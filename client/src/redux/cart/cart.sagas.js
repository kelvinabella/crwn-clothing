import { takeLatest, all, call, put } from "redux-saga/effects";
import UserActionTypes from "../user/user.types";
import { clearCart } from "./cart.actions";

export function* clearCartItemsOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartItemsOnSignOut);
}

export function* cartSaga() {
  yield all([call(onSignOutSuccess)]);
}

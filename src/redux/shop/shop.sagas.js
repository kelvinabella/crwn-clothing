import { takeLatest, call, put } from "redux-saga/effects";
import ShopActionTypes from "./shop.types";
import {
  convertCollectionsSnapshotToMap,
  firestore
} from "../../firebase/firebase.utils";

import { fetchCollectionsSuccess, fetchCollectionsError } from "./shop.action";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const collectionSnapShot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      collectionSnapShot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsError(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

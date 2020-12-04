import { all } from "redux-saga/effects";
import rootPhotoSaga from "./photos";
export default function* rootSaga() {
  yield all([rootPhotoSaga()]);
}

import { call, put, takeLatest } from "redux-saga/effects";
import { API_GET_PHOTOS } from "../../config/API";
import getRequest from "../../utils/networkCaller";
import * as PhotoConstants from "../constants/photos";
// TODO Type declaration for sagas
function* getPhotosSaga(params: any) {
  try {
    const { startFrom } = params;
    console.log({ startFrom }, params);
    const requestURL = API_GET_PHOTOS(startFrom);
    const payload = yield call(getRequest, requestURL);
    yield put({ type: PhotoConstants.PHOTO_LOADING_SUCCESS, payload });
  } catch (error) {
    yield put({ type: PhotoConstants.PHOTO_LOADING_ERROR, error });
  }
}

export default function* rootPhotoSaga() {
  yield takeLatest(PhotoConstants.PHOTO_LOADING, getPhotosSaga);
}

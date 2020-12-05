import { call, put, takeLatest } from "redux-saga/effects";
import { API_GET_PHOTOS } from "../../config/API";
import { getFromCache, storeInCache } from "../../utils/cacheHelper";
import getRequest from "../../utils/networkCaller";
import * as PhotoConstants from "../constants/photos";
// TODO Type declaration for sagas
function* getPhotosSaga(params: any) {
  try {
    const { startFrom } = params;
    const cacheCheck = getFromCache(startFrom);
    if (cacheCheck) {
      yield put({
        type: PhotoConstants.PHOTO_LOADING_SUCCESS,
        payload: cacheCheck,
      });
    }

    const requestURL = API_GET_PHOTOS(startFrom);
    const payload = yield call(getRequest, requestURL);
    storeInCache(startFrom, payload);
    yield put({ type: PhotoConstants.PHOTO_LOADING_SUCCESS, payload });
  } catch (error) {
    yield put({ type: PhotoConstants.PHOTO_LOADING_ERROR, error });
  }
}

export default function* rootPhotoSaga() {
  yield takeLatest(PhotoConstants.PHOTO_LOADING, getPhotosSaga);
}

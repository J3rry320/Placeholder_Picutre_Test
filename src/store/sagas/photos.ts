import { call, put, select, takeLatest } from "redux-saga/effects";
import { API_GET_PHOTOS } from "../../config/API";
import { getFromCache, storeInCache } from "../../utils/cacheHelper";
import getRequest from "../../utils/networkCaller";
import * as PhotoConstants from "../constants/photos";
const getPhotoState = (state: PhotoPlaceHolder.IAppReducer) => state.photo;
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
    } else {
      const requestURL = API_GET_PHOTOS(startFrom);
      const payload = yield call(getRequest, requestURL);
      storeInCache(startFrom, payload);
      yield put({ type: PhotoConstants.PHOTO_LOADING_SUCCESS, payload });
    }
  } catch (error) {
    yield put({ type: PhotoConstants.PHOTO_LOADING_ERROR, error });
  }
}

function* deletePhotosSaga(params: any) {
  try {
    const { deleteID, currentPage } = params;
    const currentState = yield select(getPhotoState);
    const finalState = currentState.photos.filter(
      (ele: any) => ele.id !== deleteID
    );
    storeInCache(currentPage, finalState);
    // if (finalState.length === 0)
    //   yield put({
    //     type: PhotoConstants.PHOTO_LOADING,
    //     startFrom: (currentPage + 1) * 5,
    //   });
    yield put({ type: PhotoConstants.DELETE_PHOTO_SUCCESS, finalState });
  } catch (error) {
    yield put({ type: PhotoConstants.DELETE_PHOTO_ERROR, error });
  }
}

function* editPhotoSaga(params: any) {
  const { idToUpdate, updatedInfo, currentPage } = params;
  try {
    const currentState = yield select(getPhotoState);
    const finalState = currentState.photos.map((ele: any) => {
      if (ele.id === idToUpdate) ele.title = updatedInfo;
      return ele;
    });
    console.log({ finalState });
    storeInCache(currentPage, finalState);
    yield put({ type: PhotoConstants.EDIT_PHOTO_SUCCESS, finalState });
  } catch (error) {
    yield put({ type: PhotoConstants.EDIT_PHOTO_ERROR, error });
  }
}

export default function* rootPhotoSaga() {
  yield takeLatest(PhotoConstants.EDIT_PHOTO, editPhotoSaga);
  yield takeLatest(PhotoConstants.PHOTO_LOADING, getPhotosSaga);
  yield takeLatest(PhotoConstants.DELETE_PHOTO, deletePhotosSaga);
}

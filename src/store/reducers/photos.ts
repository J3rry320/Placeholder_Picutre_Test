import * as PhotoConstants from "../constants/photos";
const INIT_STATE: PhotoPlaceHolder.IPhotoReducer = {
  photos: null,
  loading: null,
  error: null,
};
// TODO Make actions typesafe
export default function Photos(state = INIT_STATE, actions: any) {
  const { payload, error, type, finalState } = actions;
  switch (type) {
    case PhotoConstants.PHOTO_LOADING:
      return { ...state, loading: true };
    case PhotoConstants.PHOTO_LOADING_SUCCESS:
      return { ...state, photos: payload, loading: false };
    case PhotoConstants.PHOTO_LOADING_ERROR:
      return { ...state, error, loading: false };
    case PhotoConstants.DELETE_PHOTO_SUCCESS:
      return { ...state, photos: finalState };
    case PhotoConstants.DELETE_PHOTO_ERROR:
      return { ...state, error };
    default:
      return state;
  }
}

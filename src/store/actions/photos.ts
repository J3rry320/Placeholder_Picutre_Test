import * as PhotoConstants from "../constants/photos";

export const getPhotosFromAPI = (startFrom: number) => ({
  type: PhotoConstants.PHOTO_LOADING,
  startFrom,
});

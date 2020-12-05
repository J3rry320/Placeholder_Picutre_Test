import * as PhotoConstants from "../constants/photos";

export const getPhotosFromAPI = (startFrom: number) => ({
  type: PhotoConstants.PHOTO_LOADING,
  startFrom,
});

export const deletePhotoFromState = (
  deleteID: number,
  currentPage: number
) => ({
  type: PhotoConstants.DELETE_PHOTO,
  deleteID,
  currentPage,
});

export const editPhotoInState = (
  idToUpdate: number,
  updatedInfo: string,
  currentPage: number
) => ({
  idToUpdate,
  updatedInfo,
  currentPage,
  type: PhotoConstants.EDIT_PHOTO,
});

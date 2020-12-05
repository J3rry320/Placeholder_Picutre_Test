declare module PhotoPlaceHolder {
  export interface PhotoResponse {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  }

  export type Maybe<T> = T | null;

  export interface IPhotoReducer {
    photos: Maybe<PhotoResponse[]>;
    loading: Maybe<boolean>;
    error: Maybe<Error>;
  }

  export interface IAppReducer {
    photo: IPhotoReducer;
  }
}

import { combineReducers } from "redux";
import photo from "./photos";

export const rootReducer = combineReducers<PhotoPlaceHolder.IAppReducer>({
  photo,
});

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { getPhotosFromAPI } from "../store/actions/photos";
// TODO Type declaration for containers
function PhotoTable({ photo, getPhotosAction }: any) {
  useEffect(() => {
    getPhotosAction(0);
  }, []);
  useEffect(() => {
    console.log({ photo });
  }, [photo]);
  return <div>Hello World from the {photo[0]}</div>;
}
const mapStateToProps = ({ photo }: PhotoPlaceHolder.IAppReducer) => ({
  photo,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getPhotosAction: (startFrom: number) => dispatch(getPhotosFromAPI(startFrom)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoTable);

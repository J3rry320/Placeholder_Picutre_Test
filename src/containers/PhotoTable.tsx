import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Paginate from "../components/Paginate";
import PictureCard from "../components/PictureCard";
import { getPhotosFromAPI } from "../store/actions/photos";
// TODO Type declaration for containers
type PhotoTableProps = {
  photo: PhotoPlaceHolder.IPhotoReducer;
  getPhotosAction: (startFrom: number) => void;
};

function PhotoTable({ photo, getPhotosAction }: PhotoTableProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    getPhotosAction(currentIndex);
  }, []);
  useEffect(() => {
    console.log({ photo });
  }, [photo]);

  const { loading, photos } = photo;
  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <>
          {photos?.map((ele) => (
            <PictureCard
              thumbnailUrl={ele.thumbnailUrl}
              title={ele.title}
              url={ele.url}
              key={ele.id}
            />
          ))}
        </>
      )}
      <Paginate
        onPageChange={({ selected }: any) => getPhotosAction(selected * 5)}
      />
    </>
  );
}
const mapStateToProps = ({ photo }: PhotoPlaceHolder.IAppReducer) => ({
  photo,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getPhotosAction: (startFrom: number) => dispatch(getPhotosFromAPI(startFrom)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoTable);

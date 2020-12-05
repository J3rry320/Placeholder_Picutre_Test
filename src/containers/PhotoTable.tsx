import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Paginate from "../components/Paginate";
import PictureCard from "../components/PictureCard";
import {
  deletePhotoFromState,
  editPhotoInState,
  getPhotosFromAPI,
} from "../store/actions/photos";
// TODO Type declaration for containers
type PhotoTableProps = {
  photo: PhotoPlaceHolder.IPhotoReducer;
  getPhotosAction: (startFrom: number) => void;
  deletePhotoAction: (deleteID: number, currentPage: number) => void;
  editPhotoAction: (
    idToUpdate: number,
    updatedInfo: string,
    currentPage: number
  ) => void;
};

function PhotoTable({
  photo,
  getPhotosAction,
  deletePhotoAction,
  editPhotoAction,
}: PhotoTableProps) {
  const [currentPage, setCurrentIndex] = useState(0);

  useEffect(() => {
    getPhotosAction(currentPage);
  }, [getPhotosAction, currentPage]);

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
              onEditClick={(newValue) => {
                editPhotoAction(ele.id, newValue, currentPage);
              }}
              onCloseClick={() => deletePhotoAction(ele.id, currentPage)}
              thumbnailUrl={ele.thumbnailUrl}
              title={ele.title}
              url={ele.url}
              key={ele.id}
            />
          ))}
        </>
      )}
      {photos?.length === 0 && <div>No More Results in this page</div>}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Paginate
          onPageChange={({ selected }: any) => {
            setCurrentIndex(selected * 5);
          }}
        />
      </div>
    </>
  );
}
const mapStateToProps = ({ photo }: PhotoPlaceHolder.IAppReducer) => ({
  photo,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getPhotosAction: (startFrom: number) => dispatch(getPhotosFromAPI(startFrom)),
  deletePhotoAction: (deleteID: number, currentPage: number) =>
    dispatch(deletePhotoFromState(deleteID, currentPage)),
  editPhotoAction: (
    idToUpdate: number,
    updatedInfo: string,
    currentPage: number
  ) => dispatch(editPhotoInState(idToUpdate, updatedInfo, currentPage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoTable);

import React, { useState } from "react";
type PictureCardProps = {
  onEditClick: (editedValue: string) => void;
  onCloseClick: () => void;
};
function PictureCard({
  title,
  thumbnailUrl,
  url,
  onEditClick,
  onCloseClick,
}: Partial<PhotoPlaceHolder.PhotoResponse> & PictureCardProps) {
  const [showInput, setShowInput] = useState(false);
  const [newValue, setNewValue] = useState("");
  return (
    <div className="wrapper">
      {showInput ? (
        <>
          <div
            onClick={() => {
              setShowInput(false);
              onEditClick(newValue);
            }}
            className="wrapper__icon-bar"
          >
            <span className="material-icons">done</span>
          </div>
          <div
            onClick={() => setShowInput(false)}
            className="wrapper__icon-bar"
          >
            <span className="material-icons">close</span>
          </div>
        </>
      ) : (
        <div
          onClick={() => {
            setShowInput(true);
          }}
          className="wrapper__icon-bar"
        >
          <span className="material-icons">create</span>
        </div>
      )}

      <div onClick={onCloseClick} className="wrapper__icon-bar">
        <span className="material-icons">delete</span>
      </div>

      <div className="picture-card">
        <div className="picture-card__thumbnail-card">
          <img
            className="picture-card__thumbnail-card-thumbnail"
            src={thumbnailUrl}
            alt={`Thumnail for ${title}`}
          />
          {showInput ? (
            <input
              defaultValue={newValue}
              onChange={(value) => setNewValue(value.target.value)}
            />
          ) : (
            <div className="picture-card__thumbnail-card-heading">{title}</div>
          )}
        </div>
        <img src={url} alt={title} className="picture-card__image" />
      </div>
    </div>
  );
}

export default PictureCard;

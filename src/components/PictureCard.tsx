import React from "react";
type PictureCardProps = {
  onClick: () => void;
};
function PictureCard({
  title,
  thumbnailUrl,
  url,
  onClick,
}: Partial<PhotoPlaceHolder.PhotoResponse> & PictureCardProps) {
  return (
    <div className="wrapper">
      <div onClick={onClick} className="wrapper__icon-bar">
        <span className="material-icons">close</span>
      </div>
      <div className="picture-card">
        <div className="picture-card__thumbnail-card">
          <img
            className="picture-card__thumbnail-card-thumbnail"
            src={thumbnailUrl}
            alt={`Thumnail for ${title}`}
          />
          <div className="picture-card__thumbnail-card-heading">{title}</div>
        </div>
        <img src={url} alt={title} className="picture-card__image" />
      </div>
    </div>
  );
}

export default PictureCard;

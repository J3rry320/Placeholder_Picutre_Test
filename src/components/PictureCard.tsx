import React from "react";
import Paginate from "./Paginate";

function PictureCard({
  title,
  thumbnailUrl,
  url,
}: Partial<PhotoPlaceHolder.PhotoResponse>) {
  return (
    <div className="wrapper">
      <div className="wrapper__icon-bar">
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

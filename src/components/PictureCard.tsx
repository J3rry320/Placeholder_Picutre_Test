import React from "react";

function PictureCard({
  title,
  thumbnailUrl,
  url,
}: PhotoPlaceHolder.PhotoResponse) {
  return <div>{title}</div>;
}

export default PictureCard;

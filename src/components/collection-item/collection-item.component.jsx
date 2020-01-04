import React from "react";

import "./collection-item.style.scss";

const CollectionItem = ({ imageUrl, name, price }) => {
  return (
    <div className="collection-item">
      <div
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
        className="image"
      ></div>
      <div className="collection-footer">
        <div className="name">{name}</div>
        <div className="prce">{price}</div>
      </div>
    </div>
  );
};

export default CollectionItem;

import React from "react";

import CollectionItem from "../collection-item/collection-item.component";
import {
  CollectionPreviewContainer,
  PreviewContainer,
  CollectionPreviewTitleContainer
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionPreviewContainer>
      <CollectionPreviewTitleContainer>
        {title.toUpperCase()}
      </CollectionPreviewTitleContainer>
      <PreviewContainer>
        {items
          .filter((item, id) => id < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;

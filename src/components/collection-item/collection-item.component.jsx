import React from "react";

import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.action";
import { connect } from "react-redux";

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
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
      <CustomButton onClick={() => addItem(item)} inverted>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);

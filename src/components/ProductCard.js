import React from "react";
import Button from "./Button";
import Text from "./Text";

function ProductCard({ title, remaining, pic, price, onClick, onAddToCard }) {

  const handleCardAdd = e => {
    onAddToCard(e);
    e.stopPropagation();
  }
  return (
    <div className="product-card" onClick={onClick}>
      <Text size="large">{title}</Text>
      <Text className="text--red">{remaining} left in stock</Text>
      <img src={pic} alt="product" />
      <div className="price-inline">
        <Text size="medium">{price}$</Text>
        <Button onClick={handleCardAdd} text="add to card" variant={remaining === 0 ? "disable" : "skeleton"} />
      </div>
    </div>
  );
}

export default ProductCard;

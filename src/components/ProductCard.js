import React from "react";
import Button from "./Button";
import Text from "./Text";

function ProductCard({ title, remaining, pic, price }) {
  return (
    <div class="product-card">
      <Text size="large">{title}</Text>
      <Text className="text--red">{remaining} left in stock</Text>
      <img src={pic} alt="product" />
      <div class="price-inline">
        <Text size="medium">{price}$</Text>
        <Button text="add to card" variant="skeleton" />
      </div>
    </div>
  );
}

export default ProductCard;

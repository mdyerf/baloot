import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Text from "../components/Text";
import Button from "../components/Button";
import images from "../res/images";

function Product() {
  const product = {
    title: "Huawei nova 9",
    provider: "Huawei",
    categories: ["IT", "Technology"],
    price: 300,
    remaining: 5,
    rate: 4.1,
    rateNums: 12,
  };

  return (
    <>
      <Header showSearch={false} />

      <div className="page-container">
        <div class="product">
          <img src={require('../assets/Product.png')} alt="product" class="product-image" />
          <div class="product-info">
            <Text size="large">{product.title}</Text>

            <div class="remain-rate-flex">
              <Text size="medium" className="text--red">{product.remaining} left in stock</Text>

              <div class="product-rate">
                <img src={images.image.star} alt="" class="start-rate" />
                <Text size="medium" className="curr-rate">{product.rate}</Text>
                <Text size="medium" className="rate-nums">({product.rateNums})</Text>
              </div>
            </div>

            <Text size="medium">
              by <Button text={product.provider} variant="link" />
            </Text>

            <Text>Category(s)</Text>

            <ul class="categories">
              {product.categories.map(c => (
                <li key={c}><Text>{c}</Text></li>
              ))}
            </ul>

            <div class="price-inline">
              <Text size="large">{product.price}$</Text>
              <Button text="add to card" variant="skeleton" />
            </div>

            <Text size="large">rate now</Text>
            <div class="rate-stars-flex">
              <img src={images.image.stars} alt="" class="rate-stars" />
              <img src={images.image.stars} alt="" class="rate-stars" />
              <Button text="submit" variant="control" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Product;

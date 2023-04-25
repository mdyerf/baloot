import React from 'react';
import PropTypes from 'prop-types';
import Text from './Text';
import Button from './Button';
import images from '../res/images';

function ProductDetails({ title, remaining, rate, rateNums, provider, categories, price }) {
  return (
    <div className="product">
      <img src={images.image.product} alt="product" className="product-image" />
      <div className="product-info">
        <Text size="large">{title}</Text>

        <div className="remain-rate-flex">
          <Text size="medium" className="text--red">
            {remaining} left in stock
          </Text>

          <div className="product-rate">
            <img src={images.image.star} alt="" className="start-rate" />
            <Text size="medium" className="curr-rate">
              {rate}
            </Text>
            <Text size="medium" className="rate-nums">
              ({rateNums})
            </Text>
          </div>
        </div>

        <Text size="medium">
          by <Button text={provider} variant="link" />
        </Text>

        <Text>Category(s)</Text>

        <ul className="categories">
          {categories.map((c) => (
            <li key={c}>
              <Text>{c}</Text>
            </li>
          ))}
        </ul>

        <div className="price-inline">
          <Text size="large">{price}$</Text>
          <Button text="add to card" variant="skeleton" />
        </div>

        <Text size="large">rate now</Text>
        <div className="rate-stars-flex">
          <img src={images.image.stars} alt="" className="rate-stars" />
          <img src={images.image.stars} alt="" className="rate-stars" />
          <Button text="submit" variant="control" />
        </div>
      </div>
    </div>
  );
}

ProductDetails.propTypes = {
  title: PropTypes.string.isRequired,
  remaining: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  rateNums: PropTypes.number.isRequired,
  provider: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductDetails;

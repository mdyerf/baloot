import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Text from './Text';
import Button from './Button';
import Row from './Row';
import images from '../res/images';
import Rate from './Rate';

function ProductDetails({ title, remaining, rate, rateNums, provider, categories, price }) {
  const [userRate, setUserRate] = useState(rate);

  const handleRateSubmit = () => {
    console.log(`Rate is ${userRate}`);
  };

  return (
    <Row justifyContent="space-around">
      <img className="product-image" src={images.image.product} alt="product" />
      <div className="product-info">
        <Text size="large">{title}</Text>

        <Row>
          <Text size="medium" className="text--red">
            {remaining} left in stock
          </Text>

          <Row alignItems="flex-end">
            <img src={images.image.star} alt="" />
            <Text size="large">{rate}</Text>
            <Text size="medium">({rateNums})</Text>
          </Row>
        </Row>

        <Text size="medium">
          by <Button text={provider} variant="link" />
        </Text>

        <Text className="categories" size="medium">
          Category(s)
        </Text>

        <ul>
          {categories.map((c) => (
            <li key={c}>
              <Text size="medium">{c}</Text>
            </li>
          ))}
        </ul>

        <Row variant="shadow">
          <Text size="large">{price}$</Text>
          <Button text="add to card" variant="skeleton" />
        </Row>

        <Rate value={userRate} onChange={setUserRate} onSubmit={handleRateSubmit} />
      </div>
    </Row>
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

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Text from './Text';
import Button from './Button';
import Row from './Row';
import images from '../res/images';
import Rate from './Rate';
import routes from '../routes';
import Comments from './Comments';
import Suggestions from './Suggestions';

function ProductDetails({ title, remaining, rate, rateNums, providerId, provider, categories, price }) {
  const [userRate, setUserRate] = useState(rate);

  const navigate = useNavigate();

  const handleRateSubmit = () => {
    console.log(`Rate is ${userRate}`);
  };

  const handleCardAdd = (id) => {
    console.log(`added id: ${id}`);
    // call add to card api
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
          by <Button text={provider} variant="link" onClick={() => navigate(`${routes.provider}/${providerId}`)} />
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
          <Button text="add to card" variant="skeleton" onClick={handleCardAdd} />
        </Row>

        <Rate value={userRate} onChange={setUserRate} onSubmit={handleRateSubmit} />
      </div>
      <Comments count={2} />

      <Suggestions />
    </Row>
  );
}

ProductDetails.propTypes = {
  title: PropTypes.string.isRequired,
  remaining: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  rateNums: PropTypes.number.isRequired,
  provider: PropTypes.string.isRequired,
  providerId: PropTypes.number.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductDetails;

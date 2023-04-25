import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Text from './Text';
import Row from './Row';

function ProductCard({ title, remaining, pic, price, onClick, onAddToCard }) {
  const handleCardAdd = (e) => {
    onAddToCard(e);
    e.stopPropagation();
  };
  return (
    <div className="product-card" onClick={onClick}>
      <Text size="large">{title}</Text>
      <Text className="text--red">{remaining} left in stock</Text>
      <img src={pic} alt="product" />
      <Row>
        <Text size="medium">{price}$</Text>
        <Button onClick={handleCardAdd} text="add to card" variant={remaining === 0 ? 'disable' : 'skeleton'} />
      </Row>
    </div>
  );
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  remaining: PropTypes.number.isRequired,
  pic: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  onAddToCard: PropTypes.func.isRequired,
};

export default ProductCard;

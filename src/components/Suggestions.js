import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import routes from '../routes';
import ProductCard from './ProductCard';
import Row from './Row';
import Text from './Text';

function Suggestions({ title, products }) {
  const navigate = useNavigate();

  const handleCardAdd = (id) => {
    console.log(`added id: ${id}`);
    // call add to card api
  };

  return (
    <>
      <Text size="large" className="suggestion-title">
        {title}
      </Text>
      <Row>
        {products.map((commodity) => (
          <ProductCard
            key={commodity.id}
            title={commodity.title}
            remaining={commodity.remaining}
            pic={commodity.pic}
            price={commodity.price}
            onAddToCard={() => handleCardAdd(commodity.id)}
            onClick={() => navigate(`${routes.product}/${commodity.id}`)}
          />
        ))}
      </Row>
    </>
  );
}

Suggestions.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
};

export default Suggestions;

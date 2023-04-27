import React from 'react';
import { useNavigate } from 'react-router-dom';
import images from '../res/images';
import routes from '../routes';
import ProductCard from './ProductCard';
import Row from './Row';
import Text from './Text';

function Suggestions() {
  const commodities = [
    {
      id: 1,
      title: 'Phone',
      remaining: 0,
      pic: images.image.product,
      price: 100,
    },
  ];

  const navigate = useNavigate();

  const handleCardAdd = (id) => {
    console.log(`added id: ${id}`);
    // call add to card api
  };

  return (
    <>
      <Text size="xlarge" className="suggestion-title">
        You also might like...
      </Text>
      <Row>
        {commodities.map((commodity) => (
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

export default Suggestions;

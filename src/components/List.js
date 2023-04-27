import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import Text from './Text';
import Counter from './Counter';

function List({ icon, title, products, editable, onItemCountChange }) {
  return (
    <>
      <Row className="suggestion-title" justifyContent="flex-start">
        <img className="icon" alt="" src={icon} />
        <Text size="large">{title}</Text>
      </Row>
      <table>
        <tr>
          <td>
            <Text size="medium">Image</Text>
          </td>
          <td>
            <Text size="medium">Name</Text>
          </td>
          <td>
            <Text size="medium">Categories</Text>
          </td>
          <td>
            <Text size="medium">Price</Text>
          </td>
          <td>
            <Text size="medium">ProviderId</Text>
          </td>
          <td>
            <Text size="medium">Rating</Text>
          </td>
          <td>
            <Text size="medium">In stock</Text>
          </td>
          <td>
            <Text size="medium">In cart</Text>
          </td>
        </tr>
        {products.map((ci) => (
          <tr key={ci.id}>
            <td>
              <img width={100} src={ci.image} alt="" />
            </td>
            <td>
              <Text size="medium">{ci.name}</Text>
            </td>
            <td>
              <Text size="medium">{ci.categories.join()}</Text>
            </td>
            <td>
              <Text size="medium">{ci.price}</Text>
            </td>
            <td>
              <Text size="medium">{ci.providerId}</Text>
            </td>
            <td>
              <Text size="medium">{ci.rating}</Text>
            </td>
            <td>
              <Text size="medium">{ci.inStock}</Text>
            </td>
            <td>
              {editable ? (
                <Counter value={ci.inCart} onChange={(value) => onItemCountChange(ci.id, value)} />
              ) : (
                <Text size="medium">{ci.inCart}</Text>
              )}
            </td>
          </tr>
        ))}
      </table>
      <Row variant="shadow" />
    </>
  );
}

List.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
  editable: PropTypes.bool.isRequired,
  onItemCountChange: PropTypes.func.isRequired,
};

export default List;

import React from 'react';
import PropTypes from 'prop-types';
import images from '../res/images';
import Button from './Button';
import Text from './Text';
import Row from './Row';

function Rate({ value, onChange, onSubmit }) {
  return (
    <div className="rate">
      <Text size="medium">rate now</Text>
      <Row>
        <Row>
          {[...Array(10).keys()].map((i) => (
            <img
              key={i}
              width={25}
              height={i < value ? 25 : 20}
              src={i < value ? images.image.star : images.image.starGray}
              alt=""
              onClick={() => onChange(i + 1)}
            />
          ))}
        </Row>
        <Button text="submit" variant="control" onClick={onSubmit} />
      </Row>
    </div>
  );
}

Rate.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Rate;

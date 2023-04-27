import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import Text from './Text';
import images from '../res/images';
import Button from './Button';
import Input from './Input';

function Comments({ count }) {
  return (
    <div className="comments">
      <Row variant="shadow">
        <Text size="xlarge">Comments ({count})</Text>
      </Row>

      <Row variant="shadow">
        <div>
          <Text size="large">This was awsome!!!!</Text>
          <Text size="small">2023-03-20 * #username</Text>
        </div>
        <Row>
          <Text size="small">Is this comment helpful? 1</Text>
          <img className="like-pic" src={images.image.like} alt="" />
          <Text size="small">1</Text>
          <img className="like-pic" src={images.image.dislike} alt="" />
        </Row>
      </Row>

      <Row variant="shadow">
        <Text size="large">Submit your opinion</Text>
        <Input type="text" variant="rich" />
        <Button text="post" variant="control" />
      </Row>
    </div>
  );
}

Comments.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Comments;

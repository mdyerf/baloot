import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import Text from './Text';
import images from '../res/images';
import Button from './Button';
import Input from './Input';

function Comments({ comments }) {
  const [text, setText] = useState('');

  const handleCommentPost = () => {
    console.log(`comment ${text} posted`);
  };
  const handleCommentVote = (id, vote) => {
    console.log(`comment ${id} voted ${vote}`);
  };

  return (
    <div className="comments">
      <Row variant="shadow">
        <Text size="xlarge">Comments ({comments.length})</Text>
      </Row>

      {comments.map((comment) => (
        <Row key={comment.id} variant="shadow">
          <div>
            <Text size="large">{comment.text}</Text>
            <Text size="small">
              {comment.date} * #{comment.user}
            </Text>
          </div>
          <Row>
            <Text size="small">Is this comment helpful? {comment.likes}</Text>
            <img className="like-pic" src={images.image.like} alt="" onClick={() => handleCommentVote(comment.id, 1)} />
            <Text size="small">{comment.dislikes}</Text>
            <img
              className="like-pic"
              src={images.image.dislike}
              alt=""
              onClick={() => handleCommentVote(comment.id, -1)}
            />
          </Row>
        </Row>
      ))}

      <Row variant="shadow">
        <Text size="large">Submit your opinion</Text>
        <Input type="text" variant="rich" value={text} onChange={(e) => setText(e.target.value)} />
        <Button text="post" variant="control" onClick={handleCommentPost} />
      </Row>
    </div>
  );
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default Comments;

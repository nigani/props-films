import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star.js';
import { nanoid } from 'nanoid';

export default function Stars(props) {
  const { count } = props;
  return (
    count >= 1 & count <= 5
    ? <ul class="card-body-stars u-clearfix">
      {Array(count).fill().map(_ => (
        <Star key={nanoid()}/>
      ))}
    </ul> 
    : <></>
  );
}

Stars.propTypes = {
  count: PropTypes.number.isRequired,
};

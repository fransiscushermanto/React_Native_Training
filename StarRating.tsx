import React from 'react';
// import _ from 'lodash';
import {TouchableOpacity} from 'react-native';
import {StarOff, StarOn} from './Icons';

interface IStarRating {
  maxValue: number;
  value: number;
  style: {[key: string]: any};
  onStarClick: (params: any) => any;
}

function range(size: number, startAt: number = 0) {
  return [...Array(size).keys()].map((i) => i + startAt);
}

function StarRating({maxValue, value, style, onStarClick}: IStarRating) {
  return (
    <>
      {range(maxValue, 1).map((i) => (
        <TouchableOpacity
          key={i}
          onPress={() => onStarClick(i)}
          style={{...style, marginRight: i < maxValue ? 18 : 0}}>
          {i <= value ? <StarOn /> : <StarOff />}
        </TouchableOpacity>
      ))}
    </>
  );
}

export default StarRating;

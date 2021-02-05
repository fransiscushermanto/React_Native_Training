import React from 'react';
import {GoodReview, NeutralReview, BadReview} from './Icons';

interface IMoliReactionComponentProps {
  rating: number;
}

function MoliReactionComponent({rating}: IMoliReactionComponentProps) {
  return (
    <>
      {rating === 0 || rating === 3 ? (
        <NeutralReview />
      ) : rating < 3 ? (
        <BadReview />
      ) : (
        rating > 3 && <GoodReview />
      )}
    </>
  );
}

export default MoliReactionComponent;

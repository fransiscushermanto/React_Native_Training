import {useEffect, useState} from 'react';

function useAppRating(
  maxValue: number,
  satisfactionJSON: {good: Array<any>; neutral: Array<any>; bad: Array<any>},
) {
  const [rating, setRating] = useState<number>(0);
  const [satisfactionItems, setSatisfactionItems] = useState<Array<any>>([]);

  useEffect(() => {
    function handleRatingChange() {
      if (rating === 0 || rating === Math.round(maxValue / 2)) {
        setSatisfactionItems(
          satisfactionJSON.neutral.map((item) => ({...item, active: false})),
        );
      } else if (rating < Math.round(maxValue / 2)) {
        setSatisfactionItems(
          satisfactionJSON.bad.map((item) => ({...item, active: false})),
        );
      } else if (rating > Math.round(maxValue / 2)) {
        setSatisfactionItems(
          satisfactionJSON.good.map((item) => ({...item, active: false})),
        );
      }
    }

    handleRatingChange();
  }, [rating]);

  return {
    rating,
    setRating,
    satisfactionItems,
    setSatisfactionItems,
  };
}

export {useAppRating};

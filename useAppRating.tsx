import {useCallback, useEffect, useState} from 'react';
import produce from 'immer';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating, maxValue]);

  const onRatingClick = useCallback((id: number) => {
    setRating(id);
  }, []);

  const onSelectSatisfaction = useCallback((id: number) => {
    setSatisfactionItems((prevItem) =>
      produce(prevItem, (draft) => {
        const target = draft.filter((tempItem) => tempItem.id === id)[0];
        const indexTarget = draft.indexOf(target);
        draft[indexTarget].active = !draft[indexTarget].active;
      }),
    );
  }, []);

  return {
    onRatingClick,
    rating,
    satisfactionItems,
    onSelectSatisfaction,
  };
}

export {useAppRating};

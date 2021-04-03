import { ADD_COUNT, MINUS_COUNT } from './actionTypes';

export const addCount = (count: number = 3): Action<ActionPayloadCount> => ({
  type: ADD_COUNT,
  payload: {
    count,
  },
});

export const minusCount = (count: number = 3): Action<ActionPayloadCount> => ({
  type: MINUS_COUNT,
  payload: {
    count,
  },
});

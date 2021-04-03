import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_COUNT, MINUS_COUNT } from '~/redux/actionTypes';

export const AddCount = () => {
  const count = useSelector((state: any) => {
    return state.opsCount.count;
  });
  const dispatch = useDispatch();

  return (
    <div>
      <div>Show React-Redux Hooks AddCount</div>
      <div style={{ marginBottom: '0.3rem' }}>store count {count}</div>
      <button
        onClick={() => dispatch({ type: ADD_COUNT, payload: { count: 1 } })}
      >
        add +1
      </button>
      <button
        onClick={() => dispatch({ type: MINUS_COUNT, payload: { count: 1 } })}
      >
        minus -1
      </button>
    </div>
  );
};

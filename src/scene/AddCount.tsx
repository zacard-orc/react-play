import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_COUNT, MINUS_COUNT } from '~/redux/actionTypes';
import './scene.scss';

export const AddCount = () => {
  const count = useSelector((state: any) => {
    return state.opsCount.count;
  });
  const dispatch = useDispatch();

  return (
    <div className="scene">
      <div style={{ borderBottom: '2px solid grey', marginBottom: '0.3rem' }}>
        React-Redux Hooks AddCount x1
      </div>
      <div className="scene_tips">store count {count}</div>
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

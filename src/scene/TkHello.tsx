import React from 'react';
import { axHello } from '~/redux/thunk';
import './scene.scss';
import { useDispatch, useSelector } from 'react-redux';

export const TkHello = () => {
  const msg = useSelector((state: any) => {
    return state.opsCount.msg;
  });
  const dispatch = useDispatch();

  return (
    <div className="scene">
      <div style={{ borderBottom: '2px solid grey', marginBottom: '0.3rem' }}>
        Redux Thunk Count x1
      </div>
      <div className="scene_tips">Thunk count {msg}</div>
      <button onClick={() => dispatch(axHello('Linly2021'))}>logCount</button>
    </div>
  );
};

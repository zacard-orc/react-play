import React from 'react';
import { useCounterDouble } from '~/hox/counterDouble';
import './scene.scss';

export const HoxCount2 = () => {
  // const counter = useCounterModel();
  const counter = useCounterDouble();

  return (
    <div className="scene">
      <div style={{ borderBottom: '2px solid grey', marginBottom: '0.3rem' }}>
        Hox Count x2
      </div>
      <div className="scene_tips">hox count {counter.count} </div>
      <button
        onClick={() => {
          counter.incrment();
        }}
      >
        add +1
      </button>
      <button
        onClick={() => {
          counter.decrment();
        }}
      >
        minus -1
      </button>
    </div>
  );
};

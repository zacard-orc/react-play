import React from 'react';
import {
  useCounterModel,
  // useCounterModelWithInitialValue,
} from '~/hox/counter';
import './scene.scss';

export const HoxCount = () => {
  const counter = useCounterModel();

  return (
    <div className="scene">
      <div style={{ borderBottom: '2px solid grey', marginBottom: '0.3rem' }}>
        Show Hox Count x1
      </div>
      <div style={{ marginBottom: '0.3rem' }}>hox count {counter.count} </div>
      <div style={{ marginBottom: '0.3rem' }}>
        {/*static count {useCounterModel.data}{' '}*/}
      </div>
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

import React from 'react';
import useHxLogger from '~/hox/hxLogger';
import './scene.scss';

export const HoxLog = () => {
  const hxLogger = useHxLogger();
  // console.log(useCounterModel.data, typeof useCounterModel.data);
  // const counter = useCounterModelWithInitialValue();

  return (
    <div className="scene">
      <div style={{ borderBottom: '2px solid grey', marginBottom: '0.3rem' }}>
        Hox Count x1
      </div>
      <div className="scene_tips">hox count {hxLogger.log.join(';')} </div>
      <button
        onClick={() => {
          hxLogger.logCount();
        }}
      >
        logCount
      </button>
    </div>
  );
};

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
        Show Hox Count x1
      </div>
      <div style={{ marginBottom: '0.3rem' }}>
        hox count {hxLogger.log.join(';')}{' '}
      </div>
      <div style={{ marginBottom: '0.3rem' }}>
        {/*static count {useCounterModel.data}{' '}*/}
      </div>
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

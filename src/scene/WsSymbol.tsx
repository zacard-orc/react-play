import React from 'react';
import './scene.scss';
import useWs from '~/hox/useWs';

export const WsSymbol = () => {
  const hxWs = useWs();

  return (
    <div className="scene">
      <div style={{ borderBottom: '2px solid grey', marginBottom: '0.3rem' }}>
        Ws onSymbol
      </div>
      <div className="scene_tips">
        ws rx {`<= ${JSON.stringify(hxWs.pdSymbol)}`}
      </div>
      <button
        onClick={() => {
          hxWs.sendMessage('sffff');
        }}
      >
        send
      </button>
    </div>
  );
};

import React from 'react';
import './scene.scss';
import useWs from '~/hox/useWs';

export const WsKlines = () => {
  const hxWs = useWs();

  return (
    <div className="scene">
      <div style={{ borderBottom: '2px solid grey', marginBottom: '0.3rem' }}>
        Ws onKlines
      </div>
      <div className="scene_tips">
        ws rx {`<= ${JSON.stringify(hxWs.pdKlines)}`}
      </div>
      <button
        onClick={() => {
          hxWs.sendMessage('kkkkkkkk');
        }}
      >
        send
      </button>
    </div>
  );
};

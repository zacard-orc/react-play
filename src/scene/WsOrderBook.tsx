import React from 'react';
import './scene.scss';
import useWs from '~/hox/useWs';

export const WsOrderBook = () => {
  const hxWs = useWs();

  return (
    <div className="scene">
      <div style={{ borderBottom: '2px solid grey', marginBottom: '0.3rem' }}>
        Ws onOrderBook
      </div>
      <div className="scene_tips">
        ws rx {`<= ${JSON.stringify(hxWs.pdOrderBook)}`}
      </div>
      <button
        onClick={() => {
          hxWs.sendMessage('linbllsdfsdf');
        }}
      >
        send
      </button>
    </div>
  );
};

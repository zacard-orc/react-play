import { useState } from 'react';
import logo from './logo.svg';
import './App.scss';

import {
  AddCount,
  AddCount10,
  HoxCount,
  HoxCount2,
  HoxLog,
  TkHello,
  WsKlines,
  WsOrderBook,
  WsSymbol,
  ScaleUp,
} from './scene';

import { FdRadioGroup, FdSelect, FdSpaceRoom, FdSub } from './parts';

function App() {
  const radioOptions = [
    { label: '汽车', active: false },
    { label: '轮船', active: false },
    { label: '地铁', active: false },
    { label: '飞机', active: false },
    { label: '火车', active: false },
  ];

  return (
    <div className="App">
      <div className="app-title">
        <img src={logo} className="App-logo" alt="logo" />
        <div>React Play</div>
      </div>
      <FdSub />
      <FdSpaceRoom />
      <div style={{ width: '500px' }}>
        <FdSelect />
      </div>
      <div style={{ width: '500px' }}>
        <FdRadioGroup
          options={radioOptions}
          onRadioHit={(hitMsg, hitIdx) => {
            console.log('hit => ', hitIdx, hitMsg);
          }}
        />
      </div>

      <div>
        <ScaleUp />
      </div>

      {/*<div className="test-p2vw"></div>*/}
      <AddCount />
      <AddCount10 />
      <HoxCount />
      <HoxCount2 />
      <HoxLog />
      <TkHello />
      <WsSymbol />
      <WsOrderBook />
      <WsKlines />
    </div>
  );
}

export default App;

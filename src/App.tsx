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
} from './scene';

function App() {
  return (
    <div className="App">
      <div className="app-title">
        <img src={logo} className="App-logo" alt="logo" />
        <div>React Play</div>
      </div>
      <div className="test-p2vw"></div>
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

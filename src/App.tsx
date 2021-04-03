import logo from './logo.svg';
import './App.scss';

import { AddCount, AddCount10, HoxCount, HoxCount2, HoxLog } from './scene';

function App() {
  return (
    <div className="App">
      <div className="app-title">
        <img src={logo} className="App-logo" alt="logo" />
        <div>React Play</div>
      </div>
      <AddCount />
      <AddCount10 />
      <HoxCount />
      <HoxCount2 />
      <HoxLog />
    </div>
  );
}

export default App;

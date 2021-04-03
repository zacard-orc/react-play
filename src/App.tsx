import logo from './logo.svg';
import './App.css';

import { AddCount, AddCount10 } from './scene';

function App() {
  return (
    <div className="App">
      <div style={{ marginBottom: '1rem' }}>
        <img src={logo} className="App-logo" alt="logo" />
        React Play
      </div>
      <AddCount />
      <AddCount10 />
    </div>
  );
}

export default App;

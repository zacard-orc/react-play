import logo from './logo.svg';
import './App.css';

import { AddCount } from './scene';

function App() {
  return (
    <div className="App">
      <div style={{ marginBottom: '1rem' }}>
        <img src={logo} className="App-logo" alt="logo" />
        React Play
      </div>
      <AddCount />
    </div>
  );
}

export default App;

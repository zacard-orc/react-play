// import { useSwipe } from './hooks/useSwipe';
import { usePrev } from './hooks/usePrev';

import { MouSq } from '~/cube/MouSq';
import './App.scss';
import { useCallback, useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState<number>(0);
  const prevCount = usePrev(count);
  return (
    <div className="App">
      <div>now = {count}</div>
      <div>prev = {prevCount}</div>
      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +1
        </button>
      </div>
    </div>
  );
}

export default App;

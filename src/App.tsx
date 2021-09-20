import { useEffect, useState } from 'react';
import useCounterModel from './hox/hxDemo';

import { MockHx } from '~/scene/MockHx';

function App() {
  const hx = useCounterModel();
  const [count, setCount] = useState(0);

  const opsClick = () => {
    console.log('bb');
    setCount(count + 1);
    hx.increment();
  };

  return (
    <div>
      Start App
      <div>
        {hx.count}
        <button onClick={opsClick}>click me +1</button>
        <p>{count}</p>
      </div>
      <MockHx />
    </div>
  );
}

export default App;

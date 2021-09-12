import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const opsClick = () => {
    console.log('bb');
    setCount(count + 1);
  };

  return (
    <div>
      Start App
      <div>
        <button onClick={opsClick}>click me +1</button>
        <p>{count}</p>
      </div>
    </div>
  );
}

export default App;

import { useState } from 'react';
import { createModel } from 'hox';

function useCounter(initialValue: number) {
  const [count, setCount] = useState(initialValue ?? 0);
  const decrment = () => setCount(count - 1);
  const incrment = () => setCount(count + 1);
  return {
    count,
    decrment,
    incrment,
  };
}

// export default createModel(useCounter);
export const useCounterModel = createModel(useCounter);
export const useCounterModelWithInitialValue = createModel(useCounter, 20);

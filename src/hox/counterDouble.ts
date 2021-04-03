import { useCounterModel } from '~/hox/counter';

export function useCounterDouble() {
  const counter = useCounterModel();
  return {
    ...counter,
    count: counter.count * 2,
  };
}

import useCounterModel from '../hox/hxDemo';

export const MockHx = () => {
  const hx = useCounterModel();

  return <div>12323 - {hx.count}</div>;
};

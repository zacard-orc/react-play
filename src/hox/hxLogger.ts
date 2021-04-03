import { useState } from 'react';
import { useCounterModel } from './counter';

export default function Hxlogger() {
  const [log, setLog] = useState([]);

  const logCount = () => {
    const counter = useCounterModel.data;
    console.log(counter);
    // @ts-ignore
    setLog(log.concat(counter?.count));
  };

  return {
    log,
    logCount,
  };
}

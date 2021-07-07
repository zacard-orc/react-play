import PubSub from 'pubsub-js';
import { useEffect, useState } from 'react';

const FdSub = () => {
  const [bsInfo, setBsInfo] = useState('');

  useEffect(() => {
    PubSub.subscribe('rx-ws', (topic: string, msg: any) => {
      setBsInfo(JSON.stringify(msg));
      console.log(topic);
    });
    return () => {
      PubSub.unsubscribe('rx-ws');
    };
  }, []);
  return (
    <div>
      FdSub
      <div style={{ fontSize: '8px' }}>{bsInfo}</div>
    </div>
  );
};

export { FdSub };

import { useEffect, useState } from 'react';
import { prWait } from '~/misc/util';

export default function SusExp001() {
  const [userInfo, setUserInfo] = useState<string>('SusInner Loading');

  useEffect(() => {
    prWait(1000).then(() => {
      setUserInfo('tom');
    });
  }, []);

  return (
    <div>
      <h1>{userInfo}</h1>
    </div>
  );
}

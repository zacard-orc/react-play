import { useState, useEffect, Suspense, lazy } from 'react';
import { prWait } from '~/misc/util';

function Idxmm() {
  const [userInfo, setUserInfo] = useState<string>('Loading');

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

function Test() {
  return <div className="demo">XXXX上线～</div>;
}

function App() {
  // @ts-ignore
  // const OtherCom = lazy(() => import('./cube/SusExp001'));
  const OtherCom = lazy(() => {
    return import('./cube/SusExp001');
  });

  const LazyCC = lazy(
    () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            // @ts-ignore
            default: () => <Test />,
          });
        }, 1000);
      }),
  );

  return (
    <div>
      Start App
      <Idxmm />
      <Suspense
        fallback={
          <div>
            <h1 style={{ color: 'red' }}>SusOut Loading</h1>
          </div>
        }
      >
        <OtherCom />
      </Suspense>
      <Suspense
        fallback={
          <div>
            <h1 style={{ color: 'red' }}>Promise Loading</h1>
          </div>
        }
      >
        <LazyCC />
      </Suspense>
    </div>
  );
}

export default App;

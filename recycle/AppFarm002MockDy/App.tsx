import { useSwipe } from './hooks/useSwipe';

import { MouSq } from '~/cube/MouSq';
import './App.scss';
import { useCallback, useEffect, useState } from 'react';

const lastPP = [-100, 0, 100];
const K_EXTENT = 15;
const K_INITNBO = [
  { y: -100, needHide: false },
  { y: 0, needHide: false },
  { y: 100, needHide: false },
];
const K_COLORLIST = [
  {
    dvName: '0-紫色',
    bgColor: '#C8AEFB',
    posTop: -100,
  },
  {
    dvName: '1-粉红',
    bgColor: '#FFC2C2',
    posTop: 0,
  },
  {
    dvName: '2-蓝色',
    bgColor: '#6495ed',
    posTop: 100,
  },
];

function App() {
  const isSwipe = useSwipe();
  // const [lastPosTop, setPosTop] = useState<number>(0);
  const [lastPos, setLastPos] = useState(K_INITNBO);
  const [offset, setOffset] = useState<number>(0);

  const [dbo, setdbo] = useState(K_INITNBO);

  const rdCubeV3 = useCallback(() => {
    const _rdCubeV3 = () => {
      return dbo.map((el: any, idx: number) => {
        const dvel = K_COLORLIST[idx];
        // console.log(el.y);

        return (
          <MouSq
            posTop={el.y}
            dvName={dvel.dvName}
            bgColor={dvel.bgColor}
            show={!el.needHide}
            key={idx}
            posIdx={idx}
            play={el.y === 0}
          />
        );
      });
    };
    return _rdCubeV3();
  }, [dbo]);

  useEffect(() => {
    if (isSwipe.status === 1) {
      const ndbo = dbo.map((el) => {
        let eltmp = el.y;

        if (isSwipe.direction === 1) {
          eltmp = el.y - (isSwipe.delta * K_EXTENT * 100) / window.innerHeight;
        }
        if (isSwipe.direction === -1) {
          eltmp = el.y + (isSwipe.delta * K_EXTENT * 100) / window.innerHeight;
        }

        return {
          y: eltmp,
          needHide: false,
        };
      });
      setdbo(ndbo);
    }

    if (isSwipe.status === 2) {
      // 归元
      // console.log((Math.abs(dbo[1].y) * 100) / window.innerHeight);
      if ((Math.abs(dbo[1].y) * 100) / window.innerHeight < 5) {
        setdbo(lastPos);
      } else {
        // 超过一定幅度则滑动
        setOffset(offset + isSwipe.direction);
        // console.log(lastPos);
        const ndbo = lastPos.map((el) => {
          let eltmp = el.y;
          if (isSwipe.direction === 1) {
            eltmp = el.y - 100;
          }
          if (isSwipe.direction === -1) {
            eltmp = el.y + 100;
          }
          if (eltmp <= -200) {
            return {
              y: 100,
              needHide: true,
            };
          }
          if (eltmp >= 200) {
            return {
              y: -100,
              needHide: true,
            };
          }
          return {
            y: eltmp,
            needHide: false,
          };
        });
        setLastPos(ndbo);
        setdbo(ndbo);
      }

      // console.log(JSON.stringify(ndbo, null, 2));
    }
  }, [isSwipe.status, isSwipe.delta]);

  return (
    <div className="App">
      <div style={{ position: 'absolute' }}>
        <div>status: {isSwipe.status}</div>
        <div>delta: {Math.abs(isSwipe.delta)}</div>
        <div>direction: {isSwipe.direction === 1 ? 'up' : 'down'}</div>
        <div>lastPosTop: {lastPP.join(', ')}</div>
        <div>offset: {offset}</div>
      </div>
      {/*<div className="Guide">公告</div>*/}
      <div className="cube-ct">{rdCubeV3()}</div>
    </div>
  );
}

export default App;

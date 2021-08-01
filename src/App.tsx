import { usePrev } from './hooks/usePrev';

import { MouSq } from '~/cube/MouSq';
import './App.scss';
import { FdRect } from '~/parts';
import { useCallback, useEffect, useState } from 'react';

import { IRectBase } from '~/types/rect';

const getPoint = (e: MouseEvent) => {
  return [e.pageX, e.pageY];
};

enum TouchStatus {
  ing,
  no,
}

function App() {
  const [touchStatus, setTouchStatus] = useState<TouchStatus>(TouchStatus.no);
  const [dvr, setDvr] = useState<IRectBase>({
    x: 0,
    y: 0,
    w: 100,
    h: 70,
    zIndex: 100,
  });

  const [hitdv, setHitDv] = useState<IRectBase | undefined>(undefined);

  const getTopCube = (foucs: Array<number>, cubeList: Array<IRectBase>) => {
    return cubeList.find((el) => {
      const [fx, fy] = foucs;
      return el.x < fx && fx < el.x + el.w && el.y < fy && fy < el.y + el.h;
    });
  };

  const onTouchDown = useCallback(
    (e: any) => {
      console.log('down', getPoint(e));
      setTouchStatus(TouchStatus.ing);
      const hit = getTopCube(getPoint(e), [dvr]);
      // console.log('hit', hit);

      setHitDv(hit);
    },
    [touchStatus],
  );
  //
  // const onTouchDown = (e: any) => {
  //   console.log('down', getPoint(e));
  //   setTouchStatus(TouchStatus.ing);
  //   const hit = getTopCube(getPoint(e), [dvr]);
  //   console.log('hit', hit);
  //
  //   setHitDv(hit);
  // };

  const onTouchMove = (e: any) => {
    if (touchStatus === TouchStatus.ing && hitdv) {
      // console.log(hitdv);
      const [mx, my] = getPoint(e);
      setDvr({
        ...dvr,
        x: mx - dvr.w / 2,
        y: my - dvr.h / 2,
      });
    }
  };
  const onTouchUp = (e: any) => {
    console.log('up', getPoint(e));
    setTouchStatus(TouchStatus.no);
    console.log(dvr);
  };

  return (
    <div
      className="App"
      onMouseUp={onTouchUp}
      onMouseMove={onTouchMove}
      onMouseDown={onTouchDown}
    >
      <FdRect {...dvr} text={'1'} onChange={() => {}} />
    </div>
  );
}

export default App;

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

const cubeInit = [
  {
    x: 0,
    y: 0,
    w: 100,
    h: 70,
    zIndex: 100,
  },
  {
    x: 200,
    y: 300,
    w: 200,
    h: 50,
    zIndex: 110,
  },
  {
    x: 100,
    y: 300,
    w: 100,
    h: 250,
    zIndex: 120,
  },
  {
    x: 500,
    y: 100,
    w: 150,
    h: 50,
    zIndex: 130,
  },
  {
    x: 400,
    y: 200,
    w: 300,
    h: 70,
    zIndex: 140,
  },
];

function App() {
  const [touchStatus, setTouchStatus] = useState<TouchStatus>(TouchStatus.no);
  const [dvr, setDvr] = useState<Array<IRectBase>>(cubeInit);

  // const [hitdv, setHitDv] = useState<IRectBase | undefined>(undefined);
  const [hitIdx, setHitIdx] = useState<Number | undefined>(undefined);

  const getTopCube = (
    foucs: Array<number>,
    cubeList: Array<IRectBase>,
  ): number => {
    const cvCubeList: Array<IRectBase> = [];
    Object.assign(cvCubeList, cubeList);
    const _hdv = cvCubeList
      .sort((a: IRectBase, b: IRectBase) => {
        return b.zIndex - a.zIndex;
      })
      .find((el) => {
        const [fx, fy] = foucs;
        return el.x < fx && fx < el.x + el.w && el.y < fy && fy < el.y + el.h;
      });

    return cubeList.findIndex((el) => {
      return el.zIndex === _hdv?.zIndex;
    });
  };

  const onTouchDown = useCallback(
    (e: any) => {
      console.log('down', getPoint(e));
      setTouchStatus(TouchStatus.ing);
      const hitIdx = getTopCube(getPoint(e), dvr);
      console.log('hit', hitIdx);

      setHitIdx(hitIdx);
    },
    [touchStatus],
  );

  const onTouchMove = useCallback(
    (e: any) => {
      if (touchStatus === TouchStatus.ing && hitIdx !== undefined) {
        const [mx, my] = getPoint(e);
        const cvDvr: Array<IRectBase> = [];
        Object.assign(cvDvr, dvr);
        let cvHit: IRectBase = cvDvr[hitIdx as number];
        if (cvHit) {
          cvHit = {
            ...cvHit,
            x: mx - cvHit.w / 2,
            y: my - cvHit.h / 2,
          };

          cvDvr[hitIdx as number] = cvHit;
          setDvr(cvDvr);
        }
      }
    },
    [touchStatus],
  );
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
      {dvr.map((el, idx) => (
        <FdRect
          {...el}
          text={`00${idx}`}
          bgColor={
            ['orangered', 'dodgerblue', 'lightseagreen', 'greenyellow', 'pink'][
              idx
            ]
          }
          onChange={() => {}}
        />
      ))}
    </div>
  );
}

export default App;

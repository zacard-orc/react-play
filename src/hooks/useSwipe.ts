import { useEffect, useState } from 'react';
import { on, off } from '../misc/util';

interface Ax {
  x: number;
  y: number;
  ts: number;
}

interface AxSet {
  start?: Ax;
  moving?: Ax;
  end?: Ax;
}

interface SwipeStatus {
  status: number; // 0-start,1-moving,2-end,
  direction: number; // 1:up,-1:down,0-undef
  delta: number; // 距离
  ttl: number; // 耗时
}

export const useSwipe = () => {
  const [swipeStatus, setSwipeStatus] = useState<SwipeStatus>({
    status: 2,
    direction: 0,
    delta: 0,
    ttl: 0,
  });
  // const [lastPos, setlastPos] = useState<number>(0);

  const getPoint = (e: TouchEvent) => {
    return e.touches[0];
  };

  useEffect(() => {
    let ax: AxSet = {};
    let lastPos: number = 0;
    const hdStart = (e: TouchEvent) => {
      ax = {};
      const pt = getPoint(e);
      ax.start = {
        x: pt.pageX,
        y: pt.pageY,
        ts: Date.now(),
      };
      // setlastPos(pt.pageY);
      lastPos = pt.pageY;
      setSwipeStatus({
        status: 0,
        direction: 0,
        delta: 0,
        ttl: 0,
      });
      console.log('start');
    };

    const hdMove = (e: TouchEvent) => {
      const pt = getPoint(e);

      const direction = pt.pageY - lastPos > 0 ? -1 : 1;
      const delta = pt.pageY - ax.start!.y;
      const ttl = Date.now() - ax.start!.ts;

      // console.log('moving =>', delta, direction, pt.pageY, lastPos);
      lastPos = pt.pageY;

      ax.moving = {
        x: pt.pageX,
        y: pt.pageY,
        ts: Date.now(),
      };

      setSwipeStatus({
        status: 1,
        direction,
        delta,
        ttl,
      });
      // setlastPos(pt.pageY);
    };

    const hdEnd = (e: TouchEvent) => {
      ax.end = ax.moving;

      // 1:up,-1:down,2-undef
      const direction = ax.end && ax.end.y - ax.start!.y > 0 ? -1 : 1;
      const delta = ax.end && ax.end.y - ax.start!.y;
      const ttl = Date.now() - ax.start!.ts;

      setSwipeStatus({
        status: 2,
        direction,
        delta: delta || 0,
        ttl,
      });
      console.log('end');
    };

    const batchOff = () => {
      off(window, 'touchstart', hdStart.bind(this));
      off(window, 'touchmove', hdMove.bind(this));
      off(window, 'touchend', hdEnd.bind(this));
    };

    on(window, 'touchstart', hdStart.bind(this));
    on(window, 'touchmove', hdMove.bind(this));
    on(window, 'touchend', hdEnd.bind(this));

    return batchOff();
  }, []);

  return swipeStatus;
};

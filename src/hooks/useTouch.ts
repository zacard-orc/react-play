import { useEffect, useState } from 'react';
import { on, off } from '../misc/util';

interface Ax {
  x: number;
  y: number;
  ts: number;
}

interface AxSet {
  start?: Ax;
  last?: Ax;
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
  const getPoint = (e: TouchEvent) => {
    return e.touches[0];
  };

  useEffect(() => {
    let ax: AxSet = {};
    let lastPos: any = {};
    const hdStart = (e: TouchEvent) => {
      ax = {};
      const pt = getPoint(e);

      console.log('start', ax.start);
    };

    const hdMove = (e: TouchEvent) => {
      const pt = getPoint(e);
    };

    const hdEnd = (e: TouchEvent) => {
      const pt = getPoint(e);
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

  return 1;
};

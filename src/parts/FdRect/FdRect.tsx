import './FdRect.scss';
import {
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { IRectComponent } from '~/types/rect';

const FdRect = ({ x, y, w, h, zIndex, text, bgColor }: IRectComponent) => {
  const rectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // console.log(rectRef?.current?.style.top);
    // console.log(rectRef?.current?.style.left);
    //
    // const cx = rectRef?.current?.style.left.replace('px', '');
    // const cy = rectRef?.current?.style.top.replace('px', '');
    // const cw = rectRef?.current?.style.width.replace('px', '');
    // const ch = rectRef?.current?.style.height.replace('px', '');
    //
    // console.log(rectRef?.current?.style);
    // console.log(cx, cy, cw, ch);
    // setNxy([parseInt(initX || '0'), parseInt(initY || '0')]);
  });

  return (
    <div
      id="333"
      className="fm-dvrk"
      ref={rectRef}
      style={{
        top: y,
        left: x,
        width: w,
        height: h,
        zIndex,
        backgroundColor: bgColor,
      }}
    >
      {text}
    </div>
  );
};

export { FdRect };

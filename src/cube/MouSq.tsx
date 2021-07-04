import { createRef, useEffect, useRef, useState } from 'react';

import './cube.scss';

export const MouSq = ({ posTop, bgColor, dvName, show }: any) => {
  const sqRef: any = createRef<HTMLDivElement>();
  // console.log('ccc =>', dvName, show);

  useEffect(() => {
    if (!show) {
      setTimeout(() => {
        if (sqRef.current) {
          sqRef.current.style.display = 'block';
        }
      }, 500);
    }
  }, [show]);

  return (
    <div
      ref={sqRef}
      className="sc-mousq"
      style={{
        top: `${posTop}vh`,
        backgroundColor: bgColor,
        display: show ? 'block' : 'none',
      }}
    >
      {dvName}
    </div>
  );
};

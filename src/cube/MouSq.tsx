import { createRef, useEffect } from 'react';

import './cube.scss';

export const MouSq = ({ posTop, bgColor, dvName, show }: any) => {
  const sqRef: any = createRef<HTMLDivElement>();

  useEffect(() => {
    if (!show) {
      setTimeout(() => {
        if (sqRef.current) {
          sqRef.current.style.display = 'block';
        }
      }, 300);
    }
    // console.log(show);
  }, [show]);

  return (
    <div
      ref={sqRef}
      className="sc-mousq"
      style={{
        top: `${posTop}vh`,
        backgroundColor: bgColor,
        // display: show ? 'block' : 'none',
        visibility: show ? 'visible' : 'hidden',
      }}
    >
      {dvName}
    </div>
  );
};

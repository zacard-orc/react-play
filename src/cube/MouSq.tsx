import { createRef, useEffect } from 'react';

import './cube.scss';

export const MouSq = ({ posTop, bgColor, dvName, show, posIdx, play }: any) => {
  const sqRef: any = createRef<HTMLDivElement>();
  const vdRef: any = createRef<HTMLVideoElement>();

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

  useEffect(() => {
    // console.log(vdRef.current);
    console.log(dvName, play);
    if (play) {
      vdRef.current.play();
      vdRef.current.volume = 1;
    } else {
      vdRef.current.pause();
      vdRef.current.currentTime = 0;
    }
  }, [play]);

  useEffect(() => {});

  const hdTouchMove = (e: any) => {
    // console.log(e);
  };
  const hdClick = (e: any) => {
    // console.log(e);
    vdRef.current.play();
  };

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
      <div className="sc-fm-video">
        <video
          ref={vdRef}
          autoPlay={true}
          loop={true}
          src={`./v${posIdx}.mp4`}
          controls={false}
          onTouchMove={hdTouchMove}
          onClick={hdClick}
        ></video>
      </div>
    </div>
  );
};

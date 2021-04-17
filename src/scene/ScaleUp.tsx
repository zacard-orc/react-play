import './scene.scss';
import { cloneElement, useState } from 'react';

const ScaleUp = () => {
  const [isBig, setBig] = useState(false);
  const childx = () => {
    return (
      <div
        style={{ width: '100%', backgroundColor: '#FFF3C5', height: '100%' }}
      >
        <div key="1">这里是节目1</div>
        <div key="2">这里是节目2</div>
        <div key="3">这里是节目3</div>
        <div key="4">这里是节目4</div>
        <div key="5">这里是节目5</div>
      </div>
    );
  };

  return (
    <div className="scup" style={{}}>
      <div
        style={{
          position: isBig ? 'absolute' : 'static',
          zIndex: isBig ? 10 : 0,
          opacity: isBig ? 0.9 : 1,
          backgroundColor: isBig ? '#f3f3f3' : '#fff',
          width: isBig ? '100vw' : 'auto',
          height: isBig ? '50vh' : 'auto',
          top: isBig ? -100 : 0,
        }}
      >
        <button
          className="btn_sc"
          style={{
            left: isBig ? '90vw' : '300px',
          }}
          onClick={() => {
            console.log('点我放大了');
            const cc = cloneElement(childx(), { b: 1 });
            console.log(cc);

            setBig(!isBig);
          }}
        >
          点我放大
        </button>
        {childx()}
      </div>
    </div>
  );
};

export { ScaleUp };

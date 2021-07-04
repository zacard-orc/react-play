import { useSwipe } from './hooks/useSwipe';

import { MouSq } from '~/cube/MouSq';
import './App.scss';
import { useEffect, useState } from 'react';

let a = 1;

function App() {
  const isSwipe = useSwipe();
  // const [lastPosTop, setPosTop] = useState<number>(0);
  const [lastPosTop, setPosTop] = useState<number>(0);
  const [offset, setOffset] = useState<number>(0);
  const [colorList, setColorList] = useState<any>([
    {
      dvName: '紫色',
      bgColor: '#C8AEFB',
      posTop: -100,
    },
    {
      dvName: '粉红',
      bgColor: '#FFC2C2',
      posTop: 0,
    },
    {
      dvName: '蓝色',
      bgColor: '#6495ed',
      posTop: 100,
    },
  ]);

  const rdCube = () => {
    const mod = offset % 3;
    console.log('offset=>', offset, mod);
    return colorList.map((el: any, idx: number) => {
      let acPost = el.posTop - mod * 100;

      let needShow = acPost > -200 && acPost < 200;
      if (acPost === -200) {
        acPost = 100;
      }
      if (acPost === -300) {
        acPost = 0;
      }

      if (acPost === 200) {
        acPost = -100;
      }
      if (acPost === 300) {
        acPost = 0;
      }
      console.log('after =>', el.dvName, acPost, needShow);

      return (
        <MouSq
          posTop={acPost}
          dvName={el.dvName}
          bgColor={el.bgColor}
          show={needShow}
          key={idx}
        />
      );
    });
  };

  useEffect(() => {
    // 1:up,-1:down,2-undef
    // const comPos =
    //   lastPosTop -
    //   (isSwipe.direction * Math.abs(isSwipe.delta) * 10) / window.screen.height;
    // setPosTop(comPos);
    // console.log(isSwipe.status);
    if (isSwipe.status === 2) {
      // setPosTop(20);
      // console.log(isSwipe.delta, isSwipe.delta / window.screen.height);
      // const comPos =
      //   lastPosTop + (isSwipe.delta * 100 * 2) / window.screen.height;
      // console.log(comPos);
      setOffset(offset + isSwipe.direction);
    }
  }, [isSwipe.status]);

  return (
    <div className="App t-bd">
      <div style={{ position: 'absolute' }}>
        <div>status: {isSwipe.status}</div>
        <div>delta: {Math.abs(isSwipe.delta)}</div>
        <div>direction: {isSwipe.direction === 1 ? 'up' : 'down'}</div>
        <div>lastPosTop: {lastPosTop}</div>
        <div>offset: {offset}</div>
      </div>
      <div className="cube-ct">{rdCube()}</div>
    </div>
  );
}

export default App;

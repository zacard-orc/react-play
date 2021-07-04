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

  const colorList = [
    '#C8AEFB', // a 0 0
    '#FFC2C2', // b 1 100
    '#6495ed', // c 2 -100
  ];

  const rdCube = () => {
    const mod = offset % 3;
    console.log('offset=>', offset, mod);

    let posColorList: any = [];
    Object.assign(posColorList, colorList);
    const arr = new Array(Math.abs(mod));
    arr.fill(0);

    arr.map((_) => {
      const outEl = posColorList.shift();
      posColorList.push(outEl);
    });

    return posColorList.map((el: string, idx: number) => {
      const acPos = idx === 0 ? 0 : idx === 1 ? 100 : -100;
      return <MouSq posTop={acPos} bgColor={el} key={idx} />;
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
      // a++;
      // if (a % 3 === 0) {
      //   setPosTop(-10);
      // }
      // if (a % 3 === 1) {
      //   setPosTop(40);
      // }
      // if (a % 3 === 2) {
      //   setPosTop(90);
      // }
      // setPosTop(0);
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

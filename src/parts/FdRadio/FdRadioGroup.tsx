import './FdRadioGroup.scss';
import { FdRadio } from '~/parts';
import { useState } from 'react';

const FdRadioGroup = ({ options, onRadioHit }: FdRadioGroup) => {
  const [radioSt, setRadioSt] = useState<Array<boolean>>(
    options.map((el) => el.active),
  );

  return (
    <div className="fm-radiogroup">
      {options.map((el, idx) => {
        return (
          <FdRadio
            active={radioSt[idx]}
            label={el.label}
            labelIdx={idx}
            onChangeNotice={(hitMsg, hitIdx) => {
              const newState = !radioSt[hitIdx];
              radioSt.fill(false);
              radioSt[idx] = newState;
              setRadioSt(radioSt.slice(0));
              console.log(options[hitIdx]);
              onRadioHit(hitMsg, hitIdx);
            }}
          />
        );
      })}
    </div>
  );
};

export { FdRadioGroup };

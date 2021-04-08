// import Select from 'react-select';
import Select from 'rc-select';
import './FdSelect.scss';
import { useEffect, useState } from 'react';
// import './osSel.scss';

const sorterByLabel = (optionA: any, optionB: any) =>
  optionA.label.localeCompare(optionB.label);

const mo = [
  { value: 4, label: 'Mary' },
  { value: 3, label: 'Closed' },
  { value: 2, label: 'Communicated' },
  { value: 6, label: 'Identified' },
  { value: 1, label: 'Resolved' },
  { value: 5, label: 'Cancelled' },
  { value: 9, label: 'apple' },
];

const FdSelect = () => {
  const [iptvalue, setIptvalue] = useState('');
  const [actMo, setActMo] = useState(mo);

  useEffect(() => {
    const nn = mo.reduce((prev: any, el: any) => {
      if (el.label.includes(iptvalue)) {
        prev.push(el);
      }
      return prev;
    }, []);
    // console.log(nn);
    setActMo(nn);
  }, [iptvalue]);

  return (
    <div className="fm-sel">
      <input
        type="text"
        className="ipt-selinput"
        placeholder="Hello"
        value={iptvalue}
        onChange={(e) => {
          console.log(e.target.value);
          setIptvalue(e.target.value);
        }}
      />
      <div className="fm-r1">
        <div className="fm-r1-1">
          {actMo.map((el, idx) => {
            return (
              <div
                key={idx}
                onClick={(e) => {
                  console.log(e.target);
                  console.log(el.label);
                  console.log('bbbbb');
                }}
              >
                {el.label}
              </div>
            );
          })}
        </div>
      </div>
      <div className="fm-r2">
        <div
          className="fm-r2-1"
          onClick={() => {
            console.log('click search icon');
          }}
        >
          I
        </div>
      </div>
    </div>
  );
};

export { FdSelect };

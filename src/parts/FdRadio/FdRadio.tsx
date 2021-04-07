import './FdRadio.scss';

const FdRadio = ({
  active = false,
  onChangeNotice,
  label,
  labelIdx,
}: FdRadio) => {
  const onRadioAtomClick = () => {
    onChangeNotice(label, labelIdx);
  };

  return (
    <div className="radio-wrap" onClick={onRadioAtomClick}>
      <div className="circle">
        <div>
          <div className={`${active ? 'active' : ''} `} />
        </div>
      </div>
      <div className="label">{label}</div>
    </div>
  );
};

export { FdRadio };

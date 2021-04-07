interface FdRadio {
  active: boolean;
  label: string;
  labelIdx: number;
  onChangeNotice: (hitMsg: string, hitIdx: number) => void;
}
type FdRadioOption = {
  label: string;
  active: boolean;
};

interface FdRadioGroup {
  options: Array<FdRadioOption>;
  onRadioHit: (hitMsg: string, hitIdx: number) => void;
}

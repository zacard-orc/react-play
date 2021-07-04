import './cube.scss';

export const MouSq = ({ posTop, bgColor }: any) => {
  return (
    <div
      className="sc-mousq"
      style={{
        top: `${posTop}vh`,
        backgroundColor: bgColor,
      }}
    />
  );
};

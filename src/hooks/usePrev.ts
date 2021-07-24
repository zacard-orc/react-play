import { useEffect, useRef } from 'react';

export const usePrev = (data: number) => {
  const cr = useRef<number>();

  useEffect(() => {
    cr.current = data;
  }, [data]);

  return cr.current;
};

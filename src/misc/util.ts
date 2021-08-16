export const noop = () => {};

export function on<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T['addEventListener']> | [string, Function | null, ...any]
): void {
  if (obj?.addEventListener) {
    obj.addEventListener(
      ...(args as Parameters<HTMLElement['addEventListener']>),
    );
  }
}

export function off<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T['addEventListener']> | [string, Function | null, ...any]
) {
  if (obj?.removeEventListener) {
    obj.removeEventListener(
      ...(args as Parameters<HTMLElement['addEventListener']>),
    );
  }
}

export const isBrowser = typeof window !== 'undefined';
export const hasNavigator = typeof navigator !== 'undefined';

const bb = [1, 2, 3];

// multi,add
const add = (x: number): number => x + 10;
const multiply = (x: number): number => x * 10;
const compose = function () {
  const args = [].slice.apply(arguments);
  return function (x: number) {
    return args.reduceRight((res, cb: Function) => cb(res), x);
  };
};

// prwait
export const prWait = (tmout: number): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, tmout);
  });
};

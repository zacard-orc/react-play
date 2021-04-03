declare module '*.svg' {
  const content: string;
  export default content;
}

type ActionPayloadCount = {
  count: number;
  msg?: string;
};

interface Action<T> {
  type: string;
  payload: T;
}

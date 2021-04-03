declare module '*.svg' {
  const content: string;
  export default content;
}

type ActionPayloadCount = {
  count: number;
};

interface Action<T> {
  type: string;
  payload: T;
}

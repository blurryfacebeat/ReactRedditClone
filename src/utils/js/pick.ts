export const pick =
  <K extends string>(prop: K) =>
  <O extends Record<K, any>>(obj: O) =>
    obj[prop];

export const getValueNumber = pipe<number>(pick('currentTarget'), pick('value'), parseInt);

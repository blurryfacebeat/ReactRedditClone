export const compose =
  <U>(...fns: Array<Function>) =>
  <E>(initialValue: any): U =>
    fns.reduceRight((previousValue, fn) => fn(previousValue), initialValue);

export const pipe =
  <U>(...fns: Array<Function>) =>
  <E>(initialValue: any): U =>
    fns.reduce((previousValue, fn) => fn(previousValue), initialValue);

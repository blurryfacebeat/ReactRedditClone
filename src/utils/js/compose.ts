const compose = <U>(...fns: Array<Function>) => {
  return <E>(initialValue: any): U => fns.reduceRight((previousValue, fn) => fn(previousValue), initialValue);
};

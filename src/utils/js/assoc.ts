export const assoc = <K extends string, T>(key: K, value: T) => {
  return <O extends object>(obj: O) => ({
    ...obj,
    [key]: value,
  });
};

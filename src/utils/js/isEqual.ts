const isEqual =
  <T>(left: T) =>
  <E extends T>(right: E) =>
    left === right;

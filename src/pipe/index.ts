export const pipe = (...fns: Function[]) => {
  fns.reduce((result: any, currentFunction: Function) =>
    currentFunction(result)
  );
};

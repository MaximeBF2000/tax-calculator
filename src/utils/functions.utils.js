export const pipe =
  (...fns) =>
  x =>
    fns.reduce((x, f) => f(x), x)

export const nil = () => {}

export const numberify = n => parseFloat(n) || 0

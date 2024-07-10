var fibGenerator = function* () {
  yield (i = 0);
  yield (j = 1);
  while (true) {
    yield (res = i + j);
    [i, j] = [j, res];
  }
};

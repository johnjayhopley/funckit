module.exports = (production) => {
  const devtool = (() => {
    if(!production) {
      return 'source-map';
    }

    return 'eval';
  })();

  return devtool;
};

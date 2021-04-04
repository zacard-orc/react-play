const path = require('path');
// const { addPostcssPlugins } = require('customize-cra');

module.exports = function override(config) {
  require('react-app-rewire-postcss')(config, {
    plugins: (loader) => [
      require('postcss-flexbugs-fixes'),
      require('postcss-px-to-viewport')({
        viewportWidth: 750, // (Number) The width of the viewport.
        unitPrecision: 6, // (Number) The decimal numbers to allow the REM units to grow to.
        viewportUnit: 'vw', // (String) Expected units.
        selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px.
        minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
        mediaQuery: false, // (Boolean) Allow px to be converted in media queries.
      }),
      require('postcss-viewport-units')({}),
    ],
  });

  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '~': path.resolve(__dirname, 'src/'),
    },
  };
  return config;
};

export default {
  module: {
    rules: [
      {
        use: "babel-loader",
      },
    ],
  },
  watch: true,
  watchOptions: { aggregateTimeout: 2500 },
  mode: "development",
  devtool: "source-map",
};

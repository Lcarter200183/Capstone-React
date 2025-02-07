export default {
  module: {
    rules: [
      {
        use: "babel-loader",
      },
    ],
  },
  watch: true,
  watchOptions: { aggregateTimeout: 1000 },
  mode: "development",
  devtool: "source-map",
};

export default {
  module: {
    rules: [
      {
        use: "babel-loader",
      },
    ],
  },
  watch: true,
  mode: "development",
  devtool: "source-map",
};

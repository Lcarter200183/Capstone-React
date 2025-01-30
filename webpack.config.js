

export default
{
    module: {
       rules: [
           {
              test: /\.js/,
              exclude: /\.(scss|css)/,
              use: "babel-loader",
           },
           { 
              test: /\.(scss|css)/,
              use: ["style-loader", "css-loader", "sass-loader"],
           },
       ],
    },
    
      watch: true,
      watchOptions: { aggregateTimeout: 1000 },
      mode: "development",
      devtool: "source-map"
     
}

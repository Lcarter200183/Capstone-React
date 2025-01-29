

export default
{
    module: {
        rules: [
           {
            test: /\.js/,
            exclude: /\.(scss|css|otf|ttf)/,
            use: "babel-loader",
         },
         {
            test: /\.(scss|css)/,
            use: ["style-loader", "css-loader", "sass-loader"],
         },
         {
            test: /\.(jpg|png|mp4)/,
            type: "asset/resource",
         },
      ],
    },
    
        watch: true,
        mode: "development",
        watchOptions:  { aggregateTimeout: 2000 }, 
        devtool: "source-map",
      
};
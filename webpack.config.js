export default
{
    module: {
        rules: [
           {
            test: /\.(js|jsx)/,
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
        mode: "development",
        devtool: "source-map",
      
};
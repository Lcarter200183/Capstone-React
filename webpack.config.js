<<<<<<< HEAD
<<<<<<< HEAD
export  {
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
=======
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
>>>>>>> contactBrowserRouter
    },
    
        watch: true,
        mode: "development",
<<<<<<< HEAD
        devtool: "source-map",
      
};
>>>>>>> galleryBrowserRouter
=======
        devtool: "source-map"
      
};
>>>>>>> contactBrowserRouter
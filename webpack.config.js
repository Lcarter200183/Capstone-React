
<<<<<<< HEAD
export default  {
=======

export default
{
>>>>>>> galleryBrowserRouter
    module: {
       rules: [
           {
<<<<<<< HEAD
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
=======
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
>>>>>>> galleryBrowserRouter

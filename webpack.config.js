const path = require("path");
module.exports={
  context:__dirname+"/src/js",
  entry:'./index.js',
  mode:'development', //'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-env','react']
        }
      },
      {
          test: /\.css$/,
          loader: 'style-loader!css-loader',
      },
    ]
  },
  output:{
    path:path.resolve(__dirname,"dist"),
    filename:"bundle.js",
  }
}

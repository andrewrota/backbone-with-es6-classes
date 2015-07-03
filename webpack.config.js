module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/, loader: 'babel?stage=0', exclude: /node_modules/
      }
    ]
  }
};
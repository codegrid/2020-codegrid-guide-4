module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.ts',
  },
  output: {
    path: `${__dirname}/public/scripts`,
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /src\/.*\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};

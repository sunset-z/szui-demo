module.exports = {
  presets: [
    '@babel/preset-env',
    ["@babel/preset-react", { "runtime": "automatic" }],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
      },
    ],
    './babel-plugin-replace-ext.js'
  ],
};
